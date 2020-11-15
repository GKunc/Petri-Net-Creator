import { MinimizedNetHelper } from './../../../../../core/helpers/MinimizedNetHelper';
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
  subnetWithPlaceID: {subnetNumber: number, placeNumber: number}[];
  finishedSubnets: number[];

  constructor(
    @Inject(NetRepository) netRepository: NetRepository,
    private snackBar: MatSnackBar
  ) {
    this.netRepository = netRepository;
    this.firedTransitionIDs = [];
    this.subnetPlacesIDs = [];
    this.finishedSubnets = [];
    this.subnetWithPlaceID = [];
  }

  ngOnInit(): void {
  }

  subnetsWithIDs(): void {
    let subnetNumber = 0;
    this.subnetPlacesIDs = MinimizedNetHelper.findIndexesOfValues(this.netRepository.mainMinimizedMatrix.net, 1);
    this.subnetPlacesIDs.forEach(placeNumber => {
      this.subnetWithPlaceID.push({ subnetNumber, placeNumber });
      subnetNumber++;
    });
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
    this.checkIfTransitionCanBeFired(this.netRepository.netMatrix);
  }

  startSimulation(): void {
    $(BoardHelper.getBoard()).off();
    PlaceHelper.setPointerCursor();
    $(BoardHelper.getBoard()).off();
    $('.net-element').off();
    this.startTokens = Array.from(TokenHelper.getAll());

    if (this.netRepository.isNetMinimized) {
      this.subnetsWithIDs();
      this.checkIfAnySubnetFinished();
      this.checkIfTransitionCanBeFiredMinimizedMain();
      this.checkIfTransitionCanBeFiredMinimizedSubnets();
    } else {
      this.netRepository.buildNetMatrix();
      this.checkIfTransitionCanBeFired(this.netRepository.netMatrix);
    }
  }

  checkIfSignalsAreEnabled(id: number): boolean {
    return this.netRepository.transitionRepository.getByID(id).signals.every(signal =>
      this.netRepository.signalRepository.activeInputSignals.includes(signal));
  }

  checkIfTransitionCanBeFiredMinimizedMain(): void {
    for (let id = 0; id < this.netRepository.mainMinimizedMatrix.net.length; id++) {
      this.subnetPlacesIDs = MinimizedNetHelper.findIndexesOfValues(this.netRepository.mainMinimizedMatrix.net, 1);
      const inputPlacesIDs = this.getInputPlacesIDs(this.netRepository.mainMinimizedMatrix.net, id);
      const inputSubnetsIDs = this.checkIfPlacesAreInSubnet(inputPlacesIDs);
      // jezeli input place jest podsiecia, sparwdz czy podsiec jest skonczona
      if (inputSubnetsIDs.length > 0) {
        if (this.shouldTransitionBeEnabled(inputPlacesIDs, '', true) && this.areAllSubnetsFinished(inputPlacesIDs)) {
          this.enableTransition(this.netRepository.mainMinimizedMatrix.net, id, '', true);
        } else {
          this.disableTransition(id);
        }
      } else {
        if (this.shouldTransitionBeEnabled(inputPlacesIDs)) {
          this.enableTransition(this.netRepository.mainMinimizedMatrix.net, id);
        } else {
          this.disableTransition(id);
        }
      }
    }
  }

  checkIfAnySubnetFinished(): void {
    let subnetNumber = 0;
    this.netRepository.subnetMinimizedMatrices.forEach(subnetElement => {
      const subnet = subnetElement.net;
      const token = document.getElementById(`subnet-${subnetNumber}-token-place-${subnet[0].length - 1}`);
      if (token !== null && !this.finishedSubnets.includes(subnetNumber)) {
        this.finishedSubnets.push(subnetNumber);
      }
      subnetNumber++;
    });
  }

  areAllSubnetsFinished(inputSubnets: number[]): boolean {
    console.log('areAllSubnetsFinished');
    console.log(this.finishedSubnets);
    console.log(this.subnetWithPlaceID);
    let allFinished = true;
    inputSubnets.forEach(inputSubnet => {
      this.subnetWithPlaceID.forEach(subnetWithPlaceID => {
        if (inputSubnet === subnetWithPlaceID.placeNumber && !this.finishedSubnets.includes(subnetWithPlaceID.subnetNumber)) {
          allFinished = false;
        }
      });
    });
    return allFinished;
  }

  checkIfTransitionCanBeFiredMinimizedSubnets(): void {
    for (let i = 0; i < this.netRepository.subnetMinimizedMatrices.length; i++) {
      this.checkIfTransitionCanBeFired(this.netRepository.subnetMinimizedMatrices[i].net, `subnet-${i}-`);
    }
  }

  checkIfTransitionCanBeFired(netMatrix: number[][], prefix: string = ''): void {
    for (let id = 0; id < netMatrix.length; id++) {
      const inputPlacesIDs = this.getInputPlacesIDs(netMatrix, id);
      if (this.shouldTransitionBeEnabled(inputPlacesIDs, prefix) && this.checkIfSignalsAreEnabled(id)) {
          this.enableTransition(netMatrix, id, prefix);
      } else {
        this.disableTransition(id, prefix);
      }
    }
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

  runTransition(netMatrix: number[][], id: number, prefix: string = '', isSubnet: boolean = false): void {
    this.removeInputTokens(netMatrix, id, prefix, isSubnet);
    if (this.addOutputTokens(netMatrix, id, prefix)) {
        if (this.netRepository.isNetMinimized) {
          this.checkIfAnySubnetFinished();
          this.checkIfTransitionCanBeFiredMinimizedMain();
          this.checkIfTransitionCanBeFiredMinimizedSubnets();
        } else {
          this.checkIfTransitionCanBeFired(this.netRepository.netMatrix);
        }
        this.firedTransitionIDs.push(id);
      } else {
        this.resetSimulation();
        this.snackBar.open('Cannot run transition! The net is not safe!', 'close', {
          duration: 2000,
        });
      }
  }

  moveTokensToInputPlaces(netMatrix: number[][], id: number): void {
    this.removeOutputTokens(netMatrix, id);
    this.addInputTokens(id);
    this.checkIfTransitionCanBeFired(netMatrix);
  }

  private removeOutputTokens(netMatrix: number[][], id: number): void {
    this.getOutputPlacesIDs(netMatrix, id).forEach(placeID => {
      this.netRepository.removeToken(placeID);
    });
  }

  private removeInputTokens(netMatrix: number[][], id: number, prefix: string = '', isSubnet: boolean = false): void {
    const inputPlacesIDs = this.getInputPlacesIDs(netMatrix, id);

    inputPlacesIDs.forEach(placeID => {
      if (isSubnet) {
        const subnetID = this.subnetPlacesIDs.indexOf(placeID);
        this.netRepository.removeToken(placeID, `subnet-${subnetID}-start-`);
      } else {
        this.netRepository.removeToken(placeID, prefix);
      }
    });
  }

  private addInputTokens(id: number): void {
    this.getInputPlacesIDs(this.netRepository.netMatrix, id).forEach(placeID => {
      this.netRepository.createToken(placeID);
    });
  }

  private addOutputTokens(netMatrix: number[][], id: number,  prefix: string = ''): boolean {
    let result = true;
    const outputPlacesIDs = this.getOutputPlacesIDs(netMatrix, id);
    outputPlacesIDs.forEach(placeID => {
      const subnetID = this.subnetPlacesIDs.indexOf(placeID);
      const startToken = document.getElementById(`subnet-${subnetID}-start-token-place-${placeID}`);

      if (subnetID !== -1) {
        if (startToken === null) {
          prefix = `subnet-${subnetID}-start-`;
          this.netRepository.createToken(0, `subnet-${subnetID}-`);
        } else {
          this.netRepository.createToken(placeID, `subnet-${subnetID}-`);
        }
      }

      const token = document.getElementById(`token-place-${placeID}`);
      if (token !== null) {
        result =  false;
      }
      this.netRepository.createToken(placeID, prefix);
    });
    return result;
  }

  private shouldTransitionBeEnabled(inputPlacesIDs: number[], prefix: string = '', isSubnet: boolean = false): boolean {
    let shouldBeEnabled = true;
    inputPlacesIDs.forEach(id => {
      let token = document.getElementById(`${prefix}token-place-${id}`);
      if (isSubnet === true) {
        token = document.getElementById(`subnet-${this.subnetPlacesIDs.indexOf(id)}-start-token-place-${id}`);
      }
      if (token === null) {
          shouldBeEnabled = false;
        }
      });
    return shouldBeEnabled;
  }

  private disableTransition(id: number, prefix: string = ''): void {
    const transition = document.getElementById(`${prefix}transition-${id}`);
    transition.setAttribute('stroke', 'black');
    transition.classList.remove('ready-to-be-fired');
    $(transition).off();

  }

  private enableTransition(netMatrix: number[][], id: number, prefix: string = '', isSubnet: boolean = false): void {
    const transition = document.getElementById(`${prefix}transition-${id}`);
    transition.setAttribute('stroke', 'rgb(17, 175, 17)');
    transition.classList.add('ready-to-be-fired');
    $(transition).off();
    $(transition).on('click', () => {
        this.runTransition(netMatrix, id, prefix, isSubnet);
    });
  }

  private getInputPlacesIDs(netMatrix: number[][], transitionID: number): number[] {
    const inputPlacesIDs = [];
    let counter = 0;
    netMatrix[transitionID].forEach(place => {
      if (place === -1) {
        inputPlacesIDs.push(counter);
      }
      counter++;
    });
    return inputPlacesIDs;
  }

  private getOutputPlacesIDs(netMatrix: number[][], transitionID: number): number[] {
    const outputPlacesIDs = [];
    let counter = 0;
    netMatrix[transitionID].forEach(place => {
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
      if (this.netRepository.isNetMinimized) {
        // this.moveTokensToInputPlaces(Number(lastFiredTransitionID));
      } else {
        this.moveTokensToInputPlaces(this.netRepository.netMatrix, Number(lastFiredTransitionID));
      }
    }
  }

  nextStep(): void {
    const size = document.getElementsByClassName('ready-to-be-fired').length;
    const randomTransition = Math.floor(Math.random() * size);
    const firstReadyTransitionID = document.getElementsByClassName('ready-to-be-fired')[randomTransition]
    .getAttribute('id').split('-')[1];
    if (this.netRepository.isNetMinimized) {
      // this.runTransition(this.netRepository.netMatrix, Number(firstReadyTransitionID));
    } else {
      this.runTransition(this.netRepository.netMatrix, Number(firstReadyTransitionID));
    }
  }

  resetSimulation(): void {
    this.netRepository.tokenRepository.removeAll();
    this.startTokens.forEach(token => {
      this.netRepository.createToken(Number(token.getAttribute('id').split('-')[2]));
    });
    if (this.netRepository.isNetMinimized) {
      this.checkIfTransitionCanBeFiredMinimizedMain();
      this.checkIfTransitionCanBeFiredMinimizedSubnets();
    } else {
      this.checkIfTransitionCanBeFired(this.netRepository.netMatrix);
    }
  }
}
