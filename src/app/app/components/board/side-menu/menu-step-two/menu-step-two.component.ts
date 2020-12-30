import { PlaceHelper } from './../../../../../core/helpers/PlaceHelper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenHelper } from './../../../../../core/helpers/TokenHelper';
import { NetRepository } from './../../../../../core/repositories/NetRepository';
import { BoardHelper } from './../../../../../core/helpers/BoardHelper';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-menu-step-two',
  templateUrl: './menu-step-two.component.html',
  styleUrls: ['./menu-step-two.component.css']
})
export class MenuStepTwoComponent implements OnInit {

  startTokens: Element[];
  firedTransitionIDs: number[];
  autoSimulationTimeout: number;
  netRepository: NetRepository;

  subnetPlacesIDs: number[];

  constructor(
    @Inject(NetRepository) netRepository: NetRepository,
    private snackBar: MatSnackBar
  ) {
    this.netRepository = netRepository;
    this.firedTransitionIDs = [];

    this.subnetPlacesIDs = [];
  }

  ngOnInit(): void {
  }

  updateActiveInputSignals(): void {
    $(BoardHelper.getBoard()).off();
    $('.transition').off();
    PlaceHelper.setPointerCursor();

    const activeSignals: number[] = [];
    const signals = document.getElementsByClassName('active-input-signal');
    Array.from(signals).forEach(signal => {
      if ($(signal).is(':checked')) {
        activeSignals.push(Number(signal.getAttribute('id').split('-')[3]));
      }
    });
    this.netRepository.signalRepository.updateActiveInputSignals(activeSignals);
    this.checkIfTransitionCanBeFired();
  }

  startSimulation(): void {
    $(BoardHelper.getBoard()).off();
    PlaceHelper.setPointerCursor();
    $(BoardHelper.getBoard()).off();
    $('.net-element').off();
    this.startTokens = Array.from(TokenHelper.getAll());
    this.netRepository.buildNetMatrix();
    this.checkIfTransitionCanBeFired();
  }

  checkIfPositiveSignalsAreEnabled(id: number): boolean {
    return this.netRepository.transitionRepository.getByID(id).getSignals().every(signal =>
      this.netRepository.signalRepository.activeInputSignals.includes(signal));
  }

  checkIfNegativeSignalsAreDisnabled(id: number): boolean {
    console.log(`${this.netRepository.transitionRepository.getByID(id).getNegativeSignals()}`);
    return this.netRepository.transitionRepository.getByID(id).getNegativeSignals().every(signal =>
    !this.netRepository.signalRepository.activeInputSignals.includes(signal));
}

  checkIfTransitionCanBeFired(): void {
    for (let id = 0; id < this.netRepository.netMatrix.length; id++) {
      const inputPlacesIDs = this.getInputPlacesIDs(id);
      const transition = document.getElementById(`transition-${id}`);
      if (this.shouldTransitionBeEnabled(inputPlacesIDs) &&
          this.checkIfPositiveSignalsAreEnabled(id) &&
          this.checkIfNegativeSignalsAreDisnabled(id)) {
            $(transition).on('click', () => {
              this.runTransition(id);
            });
          } else {
            $(transition).off();
      }
    }
  }

  runTransition(id: number): void {
      this.removeInputTokens(id);
      if (this.addOutputTokens(id)) {
        this.checkIfTransitionCanBeFired();
        this.firedTransitionIDs.push(id);
      } else {
        this.resetSimulation();
        this.snackBar.open('Cannot run transition! The net is not safe!', 'close', {
          duration: 2000,
        });
      }
  }

  moveTokensToInputPlaces(id: number): void {
    this.removeOutputTokens(id);
    this.addInputTokens(id);
    this.checkIfTransitionCanBeFired();
  }

  private removeOutputTokens(id: number): void {
    this.getOutputPlacesIDs(id).forEach(placeID => {
      this.netRepository.removeToken(placeID);

      const subnetNumber = this.returnSubnetNumberContainingPlace(placeID);

      if (subnetNumber !== -1 &&
        document.getElementById(`subnet-${subnetNumber}-start-place-token`) !== null) {
          this.netRepository.removeToken(-1, `subnet-${subnetNumber}-start-place`, true);
      }
    });
  }

  private removeInputTokens(id: number): void {
    const inputPlacesIDs = this.getInputPlacesIDs(id);

    inputPlacesIDs.forEach(placeID => {
      this.netRepository.removeToken(placeID);

      const subnetNumber = this.returnSubnetNumberContainingPlace(placeID);

      if (subnetNumber !== -1 &&
        document.getElementById(`subnet-${subnetNumber}-start-place-token`) !== null) {
          this.netRepository.removeToken(-1, `subnet-${subnetNumber}-start-place`, true);
      }
    });
  }

  private addInputTokens(id: number): void {
    const inputPlacesIDs = this.getInputPlacesIDs(id);

    inputPlacesIDs.forEach(placeID => {
      this.netRepository.createToken(placeID);

      const subnetNumber = this.returnSubnetNumberContainingPlace(placeID);

      if (subnetNumber !== -1 &&
        document.getElementById(`subnet-${subnetNumber}-start-place-token`) === null) {
          this.netRepository.createToken(-1, `subnet-${subnetNumber}-start-place`, true);
      }
    });
  }

  private addOutputTokens(id: number): boolean {
    let result = true;
    const outputPlacesIDs = this.getOutputPlacesIDs(id);

    outputPlacesIDs.forEach(placeID => {
      const token = document.getElementById(`token-place-${placeID}`);
      if (token !== null) {
        result =  false;
      }

      this.netRepository.createToken(placeID);

      const subnetNumber = this.returnSubnetNumberContainingPlace(placeID);

      if (subnetNumber !== -1 &&
         document.getElementById(`subnet-${subnetNumber}-start-place-token`) === null) {
        this.netRepository.createToken(-1, `subnet-${subnetNumber}-start-place`, true);
      }
    });
    return result;
  }

  private returnSubnetNumberContainingPlace(placeID: number): number {
    let currentSubnetNumber = 0;
    let foundSubnetNumber = -1;
    if (this.netRepository.isNetMinimized) {
      this.netRepository.subnetMinimizedMatrices.forEach(subnet => {
        if (subnet.originalPlaces.includes(placeID)) {
          foundSubnetNumber = currentSubnetNumber;
        }
        currentSubnetNumber++;
      });
    }
    return foundSubnetNumber;
  }

  private shouldTransitionBeEnabled(inputPlacesIDs: number[]): boolean {
    let shouldBeEnabled = true;
    inputPlacesIDs.forEach(id => {
        const token = document.getElementById(`token-place-${id}`);
        if (token === null) {
          shouldBeEnabled = false;
        }
      });
    return shouldBeEnabled;
  }

  private disableTransition(id: number): void {
    const transition = document.getElementById(`transition-${id}`);
    transition.setAttribute('stroke', 'black');
    transition.classList.remove('ready-to-be-fired');
    $(transition).off();
  }

  private enableTransition(id: number): void {
      const transition = document.getElementById(`transition-${id}`);
      transition.setAttribute('stroke', 'rgb(17, 175, 17)');
      transition.classList.add('ready-to-be-fired');
      $(transition).off();
      $(transition).on('click', () => {
        this.runTransition(id);
      });
  }

  private getInputPlacesIDs(transitionID: number): number[] {
    const inputPlacesIDs = [];
    let counter = 0;
    this.netRepository.netMatrix[transitionID].forEach(place => {
      if (place === -1) {
        inputPlacesIDs.push(counter);
      }
      counter++;
    });
    return inputPlacesIDs;
  }

  private getOutputPlacesIDs(transitionID: number): number[] {
    const outputPlacesIDs = [];
    let counter = 0;
    this.netRepository.netMatrix[transitionID].forEach(place => {
      if (place === 1) {
        outputPlacesIDs.push(counter);
      }
      counter++;
    });
    return outputPlacesIDs;
  }

  autoSimulation(): void {
      this.startSimulation();
      this.runTransitionInInterval();
  }

  private runTransitionInInterval(): void {
    this.autoSimulationTimeout = setTimeout(() => {
      if (document.getElementsByClassName('ready-to-be-fired').length > 0) {
        this.nextStep();
        this.runTransitionInInterval();
      } else {
        this.snackBar.open('There is no available transition to run!', 'close', {
          duration: 2000,
        });
      }
    }, 1000);
  }

  stopSimulation(): void {
    if (this.autoSimulationTimeout !== undefined) {
      clearTimeout(this.autoSimulationTimeout);
    } else {
      this.snackBar.open('Auto simulation has not been started!', 'close', {
        duration: 2000,
      });
    }
  }

  previousStep(): void {
    if (this.firedTransitionIDs.length > 0) {
      const lastFiredTransitionID = this.firedTransitionIDs.pop();
      this.moveTokensToInputPlaces(Number(lastFiredTransitionID));
    }
  }

  nextStep(): void {
    const size = document.getElementsByClassName('ready-to-be-fired').length;
    const randomTransition = Math.floor(Math.random() * size);
    const firstReadyTransition = document.getElementsByClassName('ready-to-be-fired')[randomTransition];
    if (firstReadyTransition !== undefined) {
      this.runTransition(Number(firstReadyTransition.getAttribute('id').split('-')[1]));
    }
  }

  resetSimulation(): void {
    this.netRepository.tokenRepository.removeAll();
    this.startTokens.forEach(token => {
      this.netRepository.createToken(Number(token.getAttribute('id').split('-')[2]));
    });
    this.checkIfTransitionCanBeFired();
  }

  checkIfPlacesAreInSubnet(inputPlacesIDs: number[]): number[] {
    const inputSubnets = [];
    this.subnetPlacesIDs.forEach(subnetID => {
      if (inputPlacesIDs.includes(subnetID)) {
        inputSubnets.push(subnetID);
      }
    });
    return inputSubnets;
  }
}
