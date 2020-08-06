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

  placeCursor: boolean;
  transitionCursor: boolean;
  arcCursor: boolean;
  tokenCursor: boolean;
  deleteCursor: boolean;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, @Inject(NetRepository) netRepository: NetRepository) {
    this.netRepository = netRepository;
    this.setDefaultCursor();
    this.keyPressEventsHandler();
    this.cursorImageMove();
  }

  private setDefaultCursor(): void {
    $(BoardHelper.getBoard()).off('click');

    this.placeCursor = false;
    this.transitionCursor = false;
    this.arcCursor = false;
    this.tokenCursor = false;
    this.deleteCursor = false;
    this.cursorImageMove();
  }

  private cursorImageMove(): void {
    $(BoardHelper.getBoard()).on('mousemove', (event) => {
      console.log(event.pageX, event.pageY)
      let element = document.getElementById('cursor-image');
      if(element.classList.contains('cursor-place')) {
        $(element).attr('cx', event.pageX - 200);
        $(element).attr('cy', event.pageY - 20);
      } else if(
                element.classList.contains('cursor-transition') || 
                element.classList.contains('cursor-arc') || 
                element.classList.contains('cursor-token') ||
                element.classList.contains('cursor-delete')
              ) {
        $(element).attr('x', event.pageX - 235);
        $(element).attr('y', event.pageY - 35);
      }
  });
  }

  addPlace(): void {
    this.setDefaultCursor();
    this.placeCursor = true;
    // document.getElementById('cursor-img').classList.add('cursor-place');
    $('.net-element').off('dblclick');
    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createPlace(event.pageX, event.pageY);
    });
  }

  addTransition(): void {
    this.setDefaultCursor();
    this.transitionCursor = true;
    // BoardHelper.setDefualtCursor();
    // document.getElementById('cursor-img').classList.add('cursor-transition');
    $('.net-element').off('dblclick');
    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createTransition(event.pageX, event.pageY);
    });
  }

  addArc(): void {
    // when label clicked select element
    // align items 
    this.setDefaultCursor();
    this.arcCursor = true;

    $('.net-element').off('click');
    Array.from(document.getElementsByClassName('net-element')).forEach((element) => {
      $(element).on('dblclick', () => {
        $(element).off('dblclick');
        this.cursorImageMove();

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

  addToken(): void {
    this.setDefaultCursor();
    this.tokenCursor = true;

    $('.net-element').off('click');
    $('.place').on('click', (event) => {
      let id = parseInt(event.target.getAttribute('id').split('-')[1]);
      let x = parseInt(event.target.getAttribute('cx'));
      let y = parseInt(event.target.getAttribute('cy'));    
      if(document.getElementById("token-" + id) === null) {
        this.netRepository.createToken(id, x + 170, y);
      } else {
        this.snackBar.open(
          "Cannot create second token in the same place!", 
          "Got it!", 
          { panelClass: ['error'] }
        );
      }
      this.cursorImageMove();
    });
  }

  deleteElement(): void {
    this.setDefaultCursor();
    this.deleteCursor = true;

    $('.net-element').on('click', (event) => {
      let elementID = event.target.getAttribute('id');
      let [elementType, ID] = elementID.split('-');
      let labelID = 'label-' + elementID;
      let board = BoardHelper.getBoard();
      board.removeChild(event.target);
      board.removeChild(document.getElementById(labelID));

      if(elementType === 'place') {
        this.netRepository.placeRepository.deleteElementByID(parseInt(ID));
      } else if(elementType === 'transition')  {
        this.netRepository.transitionRepository.deleteElementByID(parseInt(ID));
      }
      this.cursorImageMove();
    });
  }

  justifyElements(): void {
    this.snackBar.open("Justify Elements!", "close", {
      duration: 2000,
    });
  }

  private resetArcCreation(): void {
    PlaceHelper.setPointerCursor();
    TransitionHelper.setPointerCursor();
    BoardHelper.removeSelection();
    BoardHelper.selectedElementEvent();
    this.addArc();
  }

  keyPressEventsHandler(): void {
    $(document).off('keypress');
    $(document).on('keydown', (event) => {
       if(event.keyCode === 27) { 
        this.setDefaultCursor();
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
      if(event.which === 65 || event.which == 97) { // a/A
        this.addArc();
      }
      else if(event.which === 80 || event.which == 112) { // p/P
        this.addPlace();  
      }
      else if(event.which === 84 || event.which == 116) { // t/T
        this.addTransition();   
      }
      else if(event.which === 83 || event.which == 115) { // s/S
        this.addToken();  
      }
      else if(event.which === 8 || event.which === 100) { // d/D
        this.deleteElement();
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
