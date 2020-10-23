import { SignalHelper } from './../../../../../core/helpers/SignalHelper';
import { SignalRepository } from './../../../../../core/repositories/SignalRepository';
import { AddOutputSignalsDialogComponent } from './../../../dialogs/add-output-signals-dialog/add-output-signals-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenHelper } from './../../../../../core/helpers/TokenHelper';
import { NetRepository } from './../../../../../core/repositories/NetRepository';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardHelper } from './../../../../../core/helpers/BoardHelper';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-menu-step-two',
  templateUrl: './menu-step-two.component.html',
  styleUrls: ['./menu-step-two.component.css']
})
export class MenuStepTwoComponent implements OnInit {

  addOutputSignalsDialogRef: MatDialogRef<AddOutputSignalsDialogComponent>;
  startTokens: Element[];
  firedTransitionIDs: number[];
  autoSimulationTimeout: number;
  signalRepository: SignalRepository;

  constructor(
    private dialog: MatDialog,
    @Inject(NetRepository) private readonly netRepository: NetRepository,
    @Inject(SignalRepository) signalRepository: SignalRepository,
    private snackBar: MatSnackBar
  ) {
    this.signalRepository = signalRepository;
    this.firedTransitionIDs = [];
  }

  ngOnInit(): void {
  }

  addOutputSignals(): void {
    this.addOutputSignalsDialogRef = this.dialog.open(AddOutputSignalsDialogComponent);
    $('.transition').off();

    this.addOutputSignalsDialogRef.afterClosed().subscribe(selectedSignals => {
      if (selectedSignals.length > 0) {
          $('.transition').on('click', (event) => {
            const transitionNumber = Number(event.target.getAttribute('id').split('-')[1]);
            const xPosition = Number(event.target.getAttribute('x'));
            const yPosition = Number(event.target.getAttribute('y'));

            SignalHelper.createLabel(transitionNumber, selectedSignals, xPosition, yPosition);
            this.netRepository.transitionRepository.addSignals(transitionNumber, selectedSignals);
          });
        }
    });
  }

  updateInputSignals(): void {
    const activeSignals: number[] = [];
    const signals = document.getElementsByClassName('signal');
    Array.from(signals).forEach(signal => {
      if ($(signal).is(':checked')) {
        activeSignals.push(Number(signal.getAttribute('id').split('-')[1]));
      }
    });
    this.signalRepository.updateInputSignals(activeSignals);
  }

  startSimulation(): void {
    $(BoardHelper.getBoard()).off();
    $('.net-element').off();
    this.netRepository.initNet();
    this.checkIfTransitionCanBeFired();
    this.startTokens = Array.from(TokenHelper.getAll());
  }

  checkIfSignalsAreEnabled(id: number): boolean {
    console.log(this.signalRepository.activeSignals);
    return this.netRepository.transitionRepository.getByID(id).signals.every(signal =>
      this.signalRepository.activeSignals.includes(signal));
  }

  checkIfTransitionCanBeFired(): void {
    for (let id = 0; id < this.netRepository.netMatrix.length; id++) {
      const inputPlacesIDs = this.getInputPlacesIDs(id);
      if (this.shouldTransitionBeEnabled(inputPlacesIDs)) {
        if (!this.checkIfSignalsAreEnabled(id)) {
          this.snackBar.open('Signals are not ready!', 'close', {
            duration: 2000,
          });
        } else {
          this.enableTransition(id);
        }
      } else {
        this.disableTransition(id);
      }
    }
  }

  runTransition(id: number): void {
      console.log(this.netRepository.transitionRepository.getByID(id).signals);
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
    });
  }

  private removeInputTokens(id: number): void {
    this.getInputPlacesIDs(id).forEach(placeID => {
      this.netRepository.removeToken(placeID);
    });
  }

  private addInputTokens(id: number): void {
    this.getInputPlacesIDs(id).forEach(placeID => {
      this.netRepository.createToken(placeID);
    });
  }

  private addOutputTokens(id: number): boolean {
    let result = true;
    this.getOutputPlacesIDs(id).forEach(placeID => {
      const token = document.getElementById(`token-place-${placeID}`);
      if (token !== null) {
        result =  false;
      }
      this.netRepository.createToken(placeID);
    });
    return result;
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
    console.log(this.autoSimulationTimeout);
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
    const firstReadyTransitionID = document.getElementsByClassName('ready-to-be-fired')[randomTransition]
    .getAttribute('id').split('-')[1];
    this.runTransition(Number(firstReadyTransitionID));
  }

  resetSimulation(): void {
    this.netRepository.tokenRepository.removeAll();
    this.startTokens.forEach(token => {
      this.netRepository.createToken(Number(token.getAttribute('id').split('-')[2]));
    });
    this.checkIfTransitionCanBeFired();
  }
}
