import { NetRepository } from '../api/repositories/NetRepository';
import { BoardHelper } from '../api/helpers/BoardHelper';
import { ClearBoardDialogComponent } from './components/dialogs/clear-board-dialog/clear-board-dialog.component';
import { Component, Inject } from '@angular/core';
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

  clearBoardDialogRef: MatDialogRef<ClearBoardDialogComponent>;
  netRepository: NetRepository;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, @Inject(NetRepository) netRepository: NetRepository) {
    this.netRepository = netRepository;
    this.deleteSelectedElementsHandler();
    this.connectElementsHandler();
  }

  addPlace() {
    this.netRepository.createPlace();
  }

  addTransition() {
    this.netRepository.createTransition();
  }

  addArc() {
    this.netRepository.createArc();
  }

  connectElementsHandler(): void {
    $(document).on('keypress', (event) => {
      if(event.which === 67 || event.which == 99) {
        this.netRepository.createArc();
      }
    }); 
  }

  deleteSelectedElementsHandler(): void {
    $(document).on('keypress', (event) => {
      let elements = BoardHelper.getSelectedElements();
      let board = BoardHelper.getBoard();
      
      if((event.which === 8 || event.which === 100)) {
        Array.from(elements).forEach(element => {
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

    this.clearBoardDialogRef.afterClosed().subscribe(shouldClearBoard => {
        if(shouldClearBoard) {
          this.clear();
          BoardHelper.addArrowHeadMarker();
          this.netRepository.resetIDs();
        }
      });    
  }

  clear() {  
    let board = BoardHelper.getBoard();
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    this.snackBar.open("Board has been cleared!", "close", {
      duration: 2000,
    });
  }
}
