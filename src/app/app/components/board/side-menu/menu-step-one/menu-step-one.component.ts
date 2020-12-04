import { SignalHelper } from './../../../../../core/helpers/SignalHelper';
import { AddInputSignalsDialogComponent } from './../../../dialogs/add-input-signals-dialog/add-input-signals-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ExampleNetsDialogComponent } from '../../../dialogs/example-nets-dialog/example-nets-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { TransitionHelper } from './../../../../../core/helpers/TransitionHelper';
import { PlaceHelper } from './../../../../../core/helpers/PlaceHelper';
import { ArcHelper } from './../../../../../core/helpers/ArcHelper';
import { NetRepository } from './../../../../../core/repositories/NetRepository';
import { CursorManager } from './../../../../shared/cursorManager';
import { BoardHelper } from './../../../../../core/helpers/BoardHelper';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-step-one',
  templateUrl: './menu-step-one.component.html',
  styleUrls: ['./menu-step-one.component.css']
})
export class MenuStepOneComponent implements OnInit {
  netRepository: NetRepository;
  cursorManager: CursorManager;
  exampleNetsDialogRef: MatDialogRef<ExampleNetsDialogComponent>;
  addInputSignalsDialogRef: MatDialogRef<AddInputSignalsDialogComponent>;

  constructor(
    @Inject(NetRepository) netRepository: NetRepository,
    @Inject(CursorManager) cursorManager: CursorManager,
    private dialog: MatDialog
  ) {
    this.netRepository = netRepository;
    this.cursorManager = cursorManager;
  }

  ngOnInit(): void {
  }

  addPlace(): void {
    this.cursorManager.resetEventHandlers();
    this.cursorManager.setDefaultCursor();
    this.cursorManager.placeCursor = true;

    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createPlace(event.pageX, event.pageY);
    });
  }

  addTransition(): void {
    this.cursorManager.resetEventHandlers();
    this.cursorManager.setDefaultCursor();
    this.cursorManager.transitionCursor = true;

    $(BoardHelper.getBoard()).on('click', (event) => {
      this.netRepository.createTransition(event.pageX, event.pageY);
    });
  }

  addArc(): void {
    this.cursorManager.resetEventHandlers();
    this.cursorManager.setDefaultCursor();
    this.cursorManager.arcCursor = true;

    Array.from(document.getElementsByClassName('net-element')).forEach((element) => {
      $(element).on('click', () => {
        $('.net-element').off();
        $(BoardHelper.getBoard()).off();

        this.cursorManager.cursorImageMove();
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
            ArcHelper.attachArcToEndElement(element, endElement, arrow);
            this.resetArcCreation();
          });
        });
      });
    });
  }

  resetArcCreation(): void {
    PlaceHelper.setPointerCursor();
    TransitionHelper.setPointerCursor();
    this.addArc();
  }

  addToken(): void {
    this.cursorManager.resetEventHandlers();
    this.cursorManager.setDefaultCursor();
    this.cursorManager.tokenCursor = true;

    $('.place').on('click', (event) => {
      const id = Number(event.target.getAttribute('id').split('-')[1]);
      const [x, y] = BoardHelper.getPositionOfElement(event.target);
      if (document.getElementById('token-place-' + id) === null) {
        this.netRepository.createToken(id);
      } else {
        this.netRepository.removeToken(id);
      }
      this.cursorManager.cursorImageMove();
    });
  }

  deleteElement(): void {
    this.cursorManager.resetEventHandlers();
    this.cursorManager.setDefaultCursor();
    this.cursorManager.deleteCursor = true;

    $('.net-element').on('click', (event) => {
      const elementID = event.target.getAttribute('id');
      const [elementType, ID] = elementID.split('-');
      const label = document.getElementById('label-' + elementID);
      const board = BoardHelper.getBoard();
      board.removeChild(document.getElementById(elementID));
      if (label !== null) {
        board.removeChild(label);
      }
      const token = document.getElementById('token-' + elementID);
      if (elementType === 'place') {
        if (token !== null && token !== undefined) {
          board.removeChild(token);
        }
        this.netRepository.placeRepository.remove(Number(ID));

      } else if (elementType === 'transition') {
        this.netRepository.transitionRepository.remove(Number(ID));
      }

      const arcs = document.getElementsByClassName('arc');
      Array.from(arcs).forEach(arc => {
        if (arc.getAttribute('id').includes(elementID)) {
          board.removeChild(arc);
        }
      });
      this.cursorManager.cursorImageMove();
      this.deleteElement();
    });
  }

  defaultCursor(): void {
    const arcs = ArcHelper.getAll();
    Array.from(arcs).forEach(arc => {
      if (arc.getAttribute('id').endsWith(':')) {
        document.getElementById('svg-board').removeChild(arc);
      }
    });

    this.cursorManager.setDefaultCursor();
    this.cursorManager.resetEventHandlers();
    PlaceHelper.setPointerCursor();
    TransitionHelper.setPointerCursor();
    BoardHelper.moveElementEvent();
  }

  justifyElements(): void {
    const POSITION_MARGIN = 50;
    const netElements = BoardHelper.getAll();
    Array.from(netElements).forEach(currentElement => {
      const [currentX, currentY] = BoardHelper.getPositionOfElement(currentElement);
      if (currentX === -1 && currentY === -1) {
        return;
      }
      Array.from(netElements).forEach(netElement => {
        const [x, y] = BoardHelper.getPositionOfElement(netElement);
        if (netElement.classList.contains('place') || netElement.classList.contains('token') ) {
          if (currentX - x < POSITION_MARGIN && currentX - x > -POSITION_MARGIN) {
            if (currentElement.getAttribute('id').includes('transition')) {
              netElement.setAttribute('cx', (currentX + 35).toString());
              if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('x', (currentX + 35).toString());
              }
              ArcHelper.moveArrowWithElement(netElement.getAttribute('id'));
            } else {
              netElement.setAttribute('cx', (currentX).toString());
              if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('x', (currentX).toString());
              }
              ArcHelper.moveArrowWithElement(netElement.getAttribute('id'));
            }
          }

          if (currentY - y < POSITION_MARGIN && currentY - y > -POSITION_MARGIN) {
            if (currentElement.getAttribute('id').includes('transition')) {
              netElement.setAttribute('cy', (currentY + 10).toString());
              if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('y', (currentY - 7).toString());
              }
              ArcHelper.moveArrowWithElement(netElement.getAttribute('id'));
            } else {
              netElement.setAttribute('cy', currentY.toString());
              if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('y', (currentY - 17).toString());
              }
              ArcHelper.moveArrowWithElement(netElement.getAttribute('id'));
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
              ArcHelper.moveArrowWithElement(netElement.getAttribute('id'));
            } else {
              netElement.setAttribute('x', (currentX).toString());
              if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('x', (currentX + 35).toString());
              }
              ArcHelper.moveArrowWithElement(netElement.getAttribute('id'));
            }
          }

          if (currentY - y < POSITION_MARGIN && currentY - y > -POSITION_MARGIN) {
            if (currentElement.getAttribute('id').includes('place')) {
              netElement.setAttribute('y', (currentY - 10).toString());
              if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('y', (currentY).toString());
              }
              ArcHelper.moveArrowWithElement(netElement.getAttribute('id'));
            } else {
              netElement.setAttribute('y', currentY.toString());
              if (document.getElementById('label-' + netElement.getAttribute('id')) !== null) {
                document.getElementById('label-' + netElement.getAttribute('id')).setAttribute('y', (currentY + 10).toString());
              }
              ArcHelper.moveArrowWithElement(netElement.getAttribute('id'));
            }
          }
        }
      });
    });
  }

  openExampleNetsDialog(): void {
    this.defaultCursor();
    this.exampleNetsDialogRef = this.dialog.open(ExampleNetsDialogComponent);
  }

  addInputSignals(): void {
    this.addInputSignalsDialogRef = this.dialog.open(AddInputSignalsDialogComponent);
    $('.transition').off();

    this.addInputSignalsDialogRef.afterClosed().subscribe(selectedSignals => {
      console.log('selectedSignals');
      console.log(selectedSignals);
      PlaceHelper.setDisabledCursor();
      if (selectedSignals.length > 0) {
        const signalLabel = SignalHelper.createLabel(this.netRepository.signalRepository.selectedInputSignals, 0, 0);
        SignalHelper.moveLabelWithCursor(signalLabel);
        $('.transition').on('click', (event) => {
            console.log('click > 0');
            const transitionNumber = Number(event.target.getAttribute('id').split('-')[1]);
            console.log(transitionNumber);
            console.log(selectedSignals);
            this.netRepository.createSignal(transitionNumber);
          });
        }
    });
  }
}

