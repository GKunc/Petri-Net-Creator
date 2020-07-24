import { ClearBoardDialogComponent } from './components/dialogs/clear-board-dialog/clear-board-dialog.component';
import { Arc } from './shared/net-elements/models/Arc';
import { Transition } from './shared/net-elements/models/Transition';
import { Place } from './shared/net-elements/models/Place';
import { INetElement } from './shared/net-elements/models/INetElement';
import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Petri Nets Creator';

  objects: INetElement[];
  clearBoardDialogRef: MatDialogRef<ClearBoardDialogComponent>;

  constructor(private dialog: MatDialog) {
    this.objects = [];
  }

  addPlace() {
    let netElement: INetElement = new Place(1, 100, 100);
    this.objects.push(netElement);
    netElement.create();
  }

  addTransition() {
    let netElement: INetElement = new Transition(1, 100, 100);
    this.objects.push(netElement);
    netElement.create();
  }

  addArc() {
    let netElement: INetElement = new Arc(1, 2);
    this.objects.push(netElement);
    netElement.create();
  }

  undo() {
    alert("Undo");
  }

  saveNet() {
    alert("saveNet");
  }

  createPdf() {
    alert("Create PDF");
  }

  openClearBoardDialog() {
    this.clearBoardDialogRef = this.dialog.open(ClearBoardDialogComponent);

    this.clearBoardDialogRef.afterClosed().subscribe(
      shouldClearBoard => {
        if(shouldClearBoard) {
          this.clear();
        }
      }
    );    
  }

  clear() {  
    let board = document.getElementById('svg-board');
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
  }
}
