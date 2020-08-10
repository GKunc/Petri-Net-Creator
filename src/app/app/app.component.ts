import { ArcHelper } from './../api/helpers/ArcHelper';
import { TransitionHelper } from '../api/helpers/TransitionHelper';
import { NetRepository } from '../api/repositories/NetRepository';
import { BoardHelper } from '../api/helpers/BoardHelper';
import { PlaceHelper } from '../api/helpers/PlaceHelper';
import { ClearBoardDialogComponent } from './components/dialogs/clear-board-dialog/clear-board-dialog.component';
import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
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
      const element = document.getElementById('cursor-image');
      if (element.classList.contains('cursor-place')) {
        $(element).attr('cx', event.pageX - 200);
        $(element).attr('cy', event.pageY - 20);
      } else if (
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

    $('.net-element').off('dblclick');
    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createPlace(event.pageX, event.pageY);
    });
  }

  addTransition(): void {
    this.setDefaultCursor();
    this.transitionCursor = true;

    $('.net-element').off('dblclick');
    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createTransition(event.pageX, event.pageY);
    });
  }

  addNewArc(): void {
    this.setDefaultCursor();
    this.arcCursor = true;

    $('.net-element').off('click');
    Array.from(document.getElementsByClassName('net-element')).forEach((element) => {
      $(element).on('click', () => {
        $('.net-element').off('click');
        this.cursorImageMove();
        this.netRepository.createNewArc(element.getAttribute('id'));
        if (element.classList.contains('place')) {
          PlaceHelper.setDisabledCursor();
        }
        else if (element.classList.contains('transition')) {
          TransitionHelper.setDisabledCursor();
        }

        $(BoardHelper.getBoard()).on('mousemove', (event) => {
          ArcHelper.moveArrowWithCursor(
            element.getAttribute('id'),
            event.pageX - 205,
            event.pageY - 35
            );
        });

        Array.from(document.getElementsByClassName('net-element')).forEach((endElement) => {
          $(endElement).on('click', () => {
            $(endElement).off('click');
            $(element).off('mousemove');
            const arrow = document.getElementById(element.getAttribute('id') + ':');
            this.attachArcToEndElement(endElement, arrow);
            this.resetArcCreation();
          });
        });
      });
    });
  }

  attachArcToEndElement(endElement: Element, arrow: Element): void {
    let xPosition;
    let yPosition;
    if (endElement.classList.contains('place')) {
        xPosition = endElement.getAttribute('cx');
        yPosition = Number(endElement.getAttribute('cy'));
    }
    else if (endElement.classList.contains('transition')) {
        xPosition = endElement.getAttribute('x');
        yPosition = endElement.getAttribute('y');
    }

    arrow.setAttribute('x2', xPosition);
    arrow.setAttribute('y2', yPosition);
  }

  addArc(): void {
    // when label clicked select element
    this.setDefaultCursor();
    this.arcCursor = true;

    $('.net-element').off('click');
    Array.from(document.getElementsByClassName('net-element')).forEach((element) => {
      $(element).on('dblclick', () => {
        $(element).off('dblclick');
        this.cursorImageMove();

        if (element.classList.contains('place')) {
          PlaceHelper.setDisabledCursor();
          Array.from(TransitionHelper.getAll()).forEach((transition) => {
            $(transition).on('dblclick', () => {
              $(transition).off('dblclick');
              this.netRepository.createArc();
              this.resetArcCreation();
            });
          });
        }
        else if (element.classList.contains('transition')) {
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
      const id = Number(event.target.getAttribute('id').split('-')[1]);
      const x = Number(event.target.getAttribute('cx'));
      const y = Number(event.target.getAttribute('cy'));
      if (document.getElementById('token-' + id) === null) {
        this.netRepository.createToken(id, x + 170, y);
      } else {
        this.snackBar.open(
          'Cannot create second token in the same place!',
          'Got it!',
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
      const elementID = event.target.getAttribute('id');
      const [elementType, ID] = elementID.split('-');
      const labelID = 'label-' + elementID;
      const board = BoardHelper.getBoard();
      board.removeChild(event.target);
      board.removeChild(document.getElementById(labelID));

      if (elementType === 'place') {
        this.netRepository.placeRepository.deleteElementByID(Number(ID));
      } else if (elementType === 'transition')  {
        this.netRepository.transitionRepository.deleteElementByID(Number(ID));
      }
      this.cursorImageMove();
    });
  }

  justifyElements(): void {
    this.snackBar.open('Justify Elements!', 'close', {
      duration: 2000,
    });
  }

  private resetArcCreation(): void {
    PlaceHelper.setPointerCursor();
    TransitionHelper.setPointerCursor();
    BoardHelper.removeSelection();
    BoardHelper.selectedElementEvent();
    $('.net-element').off();
    this.addNewArc();
  }

  keyPressEventsHandler(): void {
    $(document).off('keypress');
    $(document).on('keydown', (event) => {
       if (event.key === 'd') {
        this.setDefaultCursor();
        Array.from(document.getElementsByClassName('net-element')).forEach((element) => {
          $(element).off('dblclick');
        });

        $(BoardHelper.getBoard()).off('mousemove');

        PlaceHelper.setPointerCursor();
        TransitionHelper.setPointerCursor();
        BoardHelper.removeSelection();

        BoardHelper.moveElementEvent();
        BoardHelper.selectedElementEvent();
      }
    });

    $(document).on('keypress', (event) => {
      if (event.key === 'a' || event.key === 'A') { // a/A
        this.addNewArc();
      }
      else if (event.key === 'p' || event.key === 'P') { // p/P
        this.addPlace();
      }
      else if (event.key === 't' || event.key === 'T') { // t/T
        this.addTransition();
      }
      else if (event.key === 's' || event.key === 'S') { // s/S
        this.addToken();
      }
      else if (event.key === 'd' || event.key === 'D') { // d/D
        this.deleteElement();
      }
    });
  }

  undo(): void {
    this.snackBar.open('Undo operation has been performed!', 'close', {
      duration: 2000,
    });
  }

  saveNet(): void {
    this.snackBar.open('Net Model saved!', 'close', {
      duration: 2000,
    });  }

  createPdf(): void {
    this.snackBar.open('PDF Created!', 'close', {
      duration: 2000,
    });
  }

  openClearBoardDialog(): void {
    this.clearBoardDialogRef = this.dialog.open(ClearBoardDialogComponent);

    this.clearBoardDialogRef.afterClosed().subscribe(shouldClearBoard => {
        if (shouldClearBoard) {
          this.clear();
          BoardHelper.addArrowHeadMarker();
          this.netRepository.removeAllElements();
        }
      });
  }

  clear(): void {
    const board = BoardHelper.getBoard();
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    BoardHelper.selectedElements = [];
    this.snackBar.open('Board has been cleared!', 'close', {
      duration: 2000,
    });
  }
}
