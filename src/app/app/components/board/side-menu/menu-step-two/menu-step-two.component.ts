import { NetRepository } from './../../../../../core/repositories/NetRepository';
import { MatDialog } from '@angular/material/dialog';
import { LogicDescriptionDialogComponent } from './../../../dialogs/logic-description-dialog/logic-description-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { TransitionHelper } from './../../../../../core/helpers/TransitionHelper';
import { BoardHelper } from './../../../../../core/helpers/BoardHelper';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { ArcHelper } from 'src/app/core/helpers/ArcHelper';

@Component({
  selector: 'app-menu-step-two',
  templateUrl: './menu-step-two.component.html',
  styleUrls: ['./menu-step-two.component.css']
})
export class MenuStepTwoComponent implements OnInit {

  logicDescriptionDialogRef: MatDialogRef<LogicDescriptionDialogComponent>;

  constructor(
    private dialog: MatDialog,
    @Inject(NetRepository) private readonly netRepository: NetRepository
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
    this.disableTransition(id);
    this.checkIfTransitionCanBeFired();
  }

  private removeInputTokens(id: number): void {
    this.getInputPlacesIDs(id).forEach(placeID => {
      this.netRepository.removeToken(placeID);
    });
  }

  private addOutputTokens(id: number): void {
    this.getOutputPlacesIDs(id).forEach(placeID => {
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
    $(transition).off();
  }

  private enableTransition(id: number): void {
      const transition = document.getElementById(`transition-${id}`);
      transition.setAttribute('stroke', 'rgb(17, 175, 17)');
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
  }

  previousStep(): void {
    // to be implemented
  }

  mextStep(): void {
    // to be implemented
  }

  resetSimulation(): void {
    // to be implemented
  }
}
