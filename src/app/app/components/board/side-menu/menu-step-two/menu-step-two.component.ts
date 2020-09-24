import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenHelper } from './../../../../../core/helpers/TokenHelper';
import { NetRepository } from './../../../../../core/repositories/NetRepository';
import { MatDialog } from '@angular/material/dialog';
import { LogicDescriptionDialogComponent } from './../../../dialogs/logic-description-dialog/logic-description-dialog.component';
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

  logicDescriptionDialogRef: MatDialogRef<LogicDescriptionDialogComponent>;
  startTokens: Element[];

  constructor(
    private dialog: MatDialog,
    @Inject(NetRepository) private readonly netRepository: NetRepository,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openLogicDescriptionDialog(): void {
    this.logicDescriptionDialogRef = this.dialog.open(LogicDescriptionDialogComponent);
  }

  startSimulation(): void {
    $(BoardHelper.getBoard()).off();
    $('.net-element').off();
    this.netRepository.initNet();
    this.checkIfTransitionCanBeFired();
    this.startTokens = Array.from(TokenHelper.getAll());
  }

  checkIfTransitionCanBeFired(): void {
    for (let id = 0; id < this.netRepository.netMatrix.length; id++) {
      const inputPlacesIDs = this.getInputPlacesIDs(id);
      if (this.shouldTransitionBeEnabled(inputPlacesIDs)) {
        this.enableTransition(id);
      } else {
        this.disableTransition(id);
      }
    }
  }

  runTransition(id: number): void {
    this.removeInputTokens(id);
    this.addOutputTokens(id);
    this.checkIfTransitionCanBeFired();
  }

  private removeInputTokens(id: number): void {
    this.getInputPlacesIDs(id).forEach(placeID => {
      this.netRepository.removeToken(placeID);
    });
  }

  private addOutputTokens(id: number): void {
    this.getOutputPlacesIDs(id).forEach(placeID => {
      console.log(placeID);
      this.netRepository.createToken(placeID);
    });
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
      // to be implemented
      // auto run of transition every 1 s
      this.startSimulation();
      this.runTransitionInInterval();
  }

  private runTransitionInInterval(): void {
    setTimeout(() => {
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

  previousStep(): void {
    // to be implemented
    // run transition in opposite way
  }

  nextStep(): void {
    this.runTransition(Number(document.getElementsByClassName('ready-to-be-fired')[0].getAttribute('id').split('-')[1]));
  }

  resetSimulation(): void {
    this.netRepository.tokenRepository.removeAll();
    this.startTokens.forEach(token => {
      this.netRepository.createToken(Number(token.getAttribute('id').split('-')[2]));
    });
    this.checkIfTransitionCanBeFired();
  }
}
