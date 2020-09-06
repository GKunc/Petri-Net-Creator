import { NetRepository } from './../../../../../core/repositories/NetRepository';
import { MatDialog } from '@angular/material/dialog';
import { LogicDescriptionDialogComponent } from './../../../dialogs/logic-description-dialog/logic-description-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { TransitionHelper } from './../../../../../core/helpers/TransitionHelper';
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
    console.log('Start simulation');
    this.netRepository.initNet();
    console.log(this.netRepository.netMatrix);
    // TransitionHelper.runTransition();
  }

  autoSimulation(): void {
    // to be implemented
  }

  previousStep(): void {
    // to be implemented
  }

  runTransition(): void {
    // to be implemented
  }

  resetSimulation(): void {
    // to be implemented
  }
}
