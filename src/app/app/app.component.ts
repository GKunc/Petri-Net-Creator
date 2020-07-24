import { ClearBoardDialogComponent } from './components/dialogs/clear-board-dialog/clear-board-dialog.component';
import { Arc } from './shared/net-elements/models/Arc';
import { Transition } from './shared/net-elements/models/Transition';
import { Place } from './shared/net-elements/models/Place';
import { INetElement } from './shared/net-elements/models/INetElement';
import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Petri Nets Creator';

  objects: INetElement[];
  clearBoardDialogRef: MatDialogRef<ClearBoardDialogComponent>;
  transition_id: number;
  place_id: number;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.objects = [];
    this.place_id = 1;
    this.transition_id = 1;
    this.deleteSelectedElementsHandler();
  }

  addPlace() {
    let netElement: INetElement = new Place(this.place_id, 100, 100);
    this.place_id++;
    this.objects.push(netElement);
    netElement.create();
  }

  addTransition() {
    let netElement: INetElement = new Transition(this.transition_id, 100, 100);
    this.transition_id++;
    this.objects.push(netElement);
    netElement.create();
  }

  addArc() {
    let netElement: INetElement = new Arc(1, 2);
    this.objects.push(netElement);
    netElement.create();
  }

  deleteSelectedElementsHandler(): void {
    $(document).on('keypress', (event) => {
      let elements = document.getElementsByClassName('net-element selected');
      let board = document.getElementById('svg-board');
      
      if((event.which === 8 || event.which === 100)) {
        Array.from(elements).forEach(element => {
          console.log(element);
          board.removeChild(element);
        });
      }    
    });
  }

  undo() {
    this.snackBar.open("Undo operation has been performed!", "close", {
      duration: 2000,
    });
  }

  saveNet() {
    this.snackBar.open("Net Model saved!", "close", {
      duration: 2000,
    });  }

  createPdf() {
    this.snackBar.open("PDF Created!", "close", {
      duration: 2000,
    });
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

    this.snackBar.open("Board has been cleared!", "close", {
      duration: 2000,
    });
  }
}
