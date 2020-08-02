import { TransitionHelper } from '../api/helpers/TransitionHelper';
import { NetRepository } from '../api/repositories/NetRepository';
import { BoardHelper } from '../api/helpers/BoardHelper';
import { PlaceHelper } from '../api/helpers/PlaceHelper';
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
    this.keyPressEventsHandler();
  }

  addPlace() {
    BoardHelper.setDefualtCursor();
    BoardHelper.getBoard().classList.add('cursor-place');
    
    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createPlace(event.pageX, event.pageY);
    });
  }

  addTransition() {
    BoardHelper.setDefualtCursor();
    BoardHelper.getBoard().classList.add('cursor-transition');

    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createTransition(event.pageX, event.pageY);
    });
  }

  addArc() {
    // after user clicks esc it behaves as on creation of elements
    // check transient notifications
    // improve connection
    // when label clicked select element
    // align items 

    BoardHelper.setDefualtCursor();
    BoardHelper.getBoard().classList.add('cursor-arc');

    Array.from(document.getElementsByClassName('net-element')).forEach((element) => {
      $(element).on('dblclick', () => {
        $(element).off('dblclick');
        if(element.classList.contains('place')) {
          PlaceHelper.setDisabledCursor();
          Array.from(TransitionHelper.getAll()).forEach((transition) => {
            $(transition).on('dblclick', () => {
              $(transition).off('dblclick');
              this.netRepository.createArc();
              this.resetArcCreation();
            });
          });    
        } 
        else if(element.classList.contains('transition')) {
          TransitionHelper.setDisabledCursor();
          Array.from(PlaceHelper.getAll()).forEach((place) => {
            $(place).on('dblclick', () => {
              $(place).off('dblclick');
              this.netRepository.createArc();
              this.resetArcCreation();
            });
          });        
        }

      });
    });
  }

  private resetArcCreation(): void {
    PlaceHelper.setPointerCursor();
    TransitionHelper.setPointerCursor();
    BoardHelper.selectedElementEvent();
    this.addArc();
  }

  keyPressEventsHandler(): void {
    $(document).off('keypress');
    $(document).on('keydown', (event) => {
       if(event.keyCode === 27) { 
        BoardHelper.setDefualtCursor();
        Array.from(document.getElementsByClassName('net-element')).forEach((element) => {
          $(element).off('dblclick');
        });

        PlaceHelper.setPointerCursor();
        TransitionHelper.setPointerCursor();
        BoardHelper.removeSelection();

        BoardHelper.moveElementEvent();
        BoardHelper.selectedElementEvent();
      }
    });

    $(document).on('keypress', (event) => {
      if(event.which === 67 || event.which == 99) {
        this.addArc();
      }
      else if(event.which === 80 || event.which == 112) {
        this.addPlace();  
      }
      else if(event.which === 84 || event.which == 116) {
        this.addTransition();  
      }
      else if(event.which === 8 || event.which === 100) {
        this.deleteSelectedElements();
      }
    }); 
  }

  // delete arcs connected to object
  private deleteSelectedElements(): void {
    let elements = BoardHelper.getSelectedElements();
    let board = BoardHelper.getBoard();

    Array.from(elements).forEach(element => {
      board.removeChild(element);
      let id = element.getAttribute('id').split('-');
      if(id[0] === 'place') {
        this.netRepository.placeRepository.deleteElementByID(parseInt(id[1]));
      } else if(id[0] === 'transition')  {
        this.netRepository.transitionRepository.deleteElementByID(parseInt(id[1]));
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
          this.netRepository.removeAllElements();
        }
      });    
  }

  clear() {  
    let board = BoardHelper.getBoard();
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    BoardHelper.selectedElements = [];
    this.snackBar.open("Board has been cleared!", "close", {
      duration: 2000,
    });
  }
}
