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
  justified: boolean;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, @Inject(NetRepository) netRepository: NetRepository) {
    this.netRepository = netRepository;
    this.justified = false;
    this.setDefaultCursor();
    this.keyPressEventsHandler();
    this.cursorImageMove();
  }

  private setDefaultCursor(): void {
    this.placeCursor = false;
    this.transitionCursor = false;
    this.arcCursor = false;
    this.tokenCursor = false;
    this.deleteCursor = false;
    this.cursorImageMove();
  }

  private resetEventHandlers(): void {
    $(BoardHelper.getBoard()).off();
    $('.net-element').off();
    this.cursorImageMove();
  }

  private cursorImageMove(): void {
    $(BoardHelper.getBoard()).on('mousemove', (event) => {
      const element = document.getElementById('cursor-image');
      if (element === null) {
        return;
      }
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
    this.resetEventHandlers();
    this.setDefaultCursor();
    this.placeCursor = true;

    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createPlace(event.pageX, event.pageY);
    });
  }

  addTransition(): void {
    this.resetEventHandlers();
    this.setDefaultCursor();
    this.transitionCursor = true;

    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createTransition(event.pageX, event.pageY);
    });
  }

  addArc(): void {
    this.resetEventHandlers();
    this.setDefaultCursor();
    this.arcCursor = true;

    Array.from(document.getElementsByClassName('net-element')).forEach((element) => {
      $(element).on('click', () => {
        $('.net-element').off();
        $(BoardHelper.getBoard()).off();

        this.cursorImageMove();
        this.netRepository.createArc(element.getAttribute('id'));

        $(BoardHelper.getBoard()).on('mousemove', (event) => {
          ArcHelper.moveArrowWithCursor(
            element.getAttribute('id'),
            event.pageX - 205,
            event.pageY - 35
            );
        });

        let endElementClass: string;
        if (element.classList.contains('place')) {
          PlaceHelper.setDisabledCursor();
          endElementClass = 'transition';
        }
        else if (element.classList.contains('transition')) {
          TransitionHelper.setDisabledCursor();
          endElementClass = 'place';
        }

        Array.from(document.getElementsByClassName(endElementClass)).forEach((endElement) => {
          $(endElement).on('click', () => {
            $(endElement).off('click');
            $(element).off('mousemove');
            const arrow = document.getElementById(element.getAttribute('id') + ':');
            this.attachArcToEndElement(element, endElement, arrow);
            this.resetArcCreation();
          });
        });
      });
    });
  }

  attachArcToEndElement(startElement: Element, endElement: Element, arrow: Element): void {
    let [x1, y1] = ArcHelper.getCoorinatesOfElement(startElement.getAttribute('id'));
    let [x2, y2] = ArcHelper.getCoorinatesOfElement(endElement.getAttribute('id'));
    [x1, y1, x2, y2] = ArcHelper.connectToNearestEnd(
      startElement.getAttribute('id'),
      x1, y1, x2, y2);

    arrow.setAttribute('id', arrow.getAttribute('id') + endElement.getAttribute('id'));
    arrow.setAttribute('x2', x2.toString());
    arrow.setAttribute('y2', y2.toString());
  }

  addToken(): void {
    this.resetEventHandlers();
    this.setDefaultCursor();
    this.tokenCursor = true;

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
    this.resetEventHandlers();
    this.setDefaultCursor();
    this.deleteCursor = true;

    $('.net-element').on('click', (event) => {
      const elementID = event.target.getAttribute('id');
      const [elementType, ID] = elementID.split('-');
      const labelID = 'label-' + elementID;
      const board = BoardHelper.getBoard();
      board.removeChild(document.getElementById(elementID));
      board.removeChild(document.getElementById(labelID));
      const token = document.getElementById('token-' + elementID);

      if (elementType === 'place') {
        if (token !== null && token !== undefined) {
          board.removeChild(token);
        }
        this.netRepository.placeRepository.deleteElementByID(Number(ID));

      } else if (elementType === 'transition') {
        this.netRepository.transitionRepository.deleteElementByID(Number(ID));
      }

      const arcs = document.getElementsByClassName('arc');
      Array.from(arcs).forEach(arc => {
        if (arc.getAttribute('id').includes(elementID)) {
          board.removeChild(arc);
        }
      });
      this.cursorImageMove();
      this.deleteElement();
    });
  }

  defaultCursor(): void {
    // remove unattached arrow
    this.setDefaultCursor();
    this.resetEventHandlers();
    PlaceHelper.setPointerCursor();
    TransitionHelper.setPointerCursor();
    BoardHelper.moveElementEvent();
  }

  justifyElements(): void {
    if (!this.justified) {
      this.justified = true;
      const POSITION_MARGIN = 50;
      const netElements = BoardHelper.getAll();
      Array.from(netElements).forEach(currentElement => {
        const [currentX, currentY] = BoardHelper.getPositionOfElement(currentElement);
        Array.from(netElements).forEach(netElement => {
          const [x, y] = BoardHelper.getPositionOfElement(netElement);
          // move token / place / arc / transition / label
          if (netElement.classList.contains('place') || netElement.classList.contains('token') ) {
            if (currentX - x < POSITION_MARGIN && currentX - x > -POSITION_MARGIN) {
              if (currentElement.getAttribute('id').includes('transition')) {
                netElement.setAttribute('cx', (currentX + 35).toString());
                if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                  document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('x', (currentX + 35).toString());
                }
              } else {
                netElement.setAttribute('cx', (currentX).toString());
                if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                  document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('x', (currentX).toString());
                }
              }
            }

            if (currentY - y < POSITION_MARGIN && currentY - y > -POSITION_MARGIN) {
              if (currentElement.getAttribute('id').includes('transition')) {
                netElement.setAttribute('cy', (currentY + 10).toString());
                if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                  document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('y', (currentY - 7).toString());
                }
              } else {
                netElement.setAttribute('cy', currentY.toString());
                if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                  document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('y', (currentY - 17).toString());
                }
              }
            }
          }

          if (netElement.classList.contains('transition')) {
            if (currentX - x < POSITION_MARGIN && currentX - x > -POSITION_MARGIN) {
              if (currentElement.getAttribute('id').includes('place')) {
                netElement.setAttribute('x', (currentX - 35).toString());
                if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                  document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('x', (currentX).toString());
                }
              } else {
                netElement.setAttribute('x', (currentX).toString());
                if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                  document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('x', (currentX + 35).toString());
                }
              }
            }

            if (currentY - y < POSITION_MARGIN && currentY - y > -POSITION_MARGIN) {
              if (currentElement.getAttribute('id').includes('place')) {
                netElement.setAttribute('y', (currentY - 10).toString());
                if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                  document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('y', (currentY).toString());
                }
              } else {
                netElement.setAttribute('y', currentY.toString());
                if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                  document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('y', (currentY + 10).toString());
                }
              }
            }
          }
        });
      });
    }
  }

  private resetArcCreation(): void {
    PlaceHelper.setPointerCursor();
    TransitionHelper.setPointerCursor();
    this.addArc();
  }

  keyPressEventsHandler(): void {
    this.resetEventHandlers();
    $(document).on('keydown', (event) => {
       if (event.key === 'Escape') {
        this.defaultCursor();
      }
    });

    $(document).on('keypress', (event) => {
      if (event.key === 'a' || event.key === 'A') { // a/A
        this.addArc();
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
    let cloneCursors: Node;
    while (board.firstChild) { } {
      if (board.firstElementChild.getAttribute('id') === 'cursors') {
        cloneCursors = board.firstChild;
      }
      board.removeChild(board.firstChild);
    }
    board.appendChild(cloneCursors);
    BoardHelper.selectedElements = [];
    this.snackBar.open('Board has been cleared!', 'close', {
      duration: 2000,
    });
  }
}
