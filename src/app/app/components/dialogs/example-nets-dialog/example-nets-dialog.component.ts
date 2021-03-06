import { BoardHelper } from './../../../../core/helpers/BoardHelper';
import { NetRepository } from './../../../../core/repositories/NetRepository';
import { ArcHelper } from './../../../../core/helpers/ArcHelper';
import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
    templateUrl: './example-nets-dialog.component.html',
    styleUrls: ['./example-nets-dialog.component.css']
})

export class ExampleNetsDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ExampleNetsDialogComponent>,
    @Inject(NetRepository) private readonly netRepository: NetRepository
  ) {}


  clearBoard(): void {
    const board = BoardHelper.getBoard();
    let cloneCursors: Node;
    while (board.firstChild) {
      if (board.firstElementChild.getAttribute('id') === 'cursors') {
        cloneCursors = board.firstChild;
      }
      board.removeChild(board.firstChild);
    }
    this.netRepository.removeAllElements();
    board.appendChild(cloneCursors);
    BoardHelper.addArrowHeadMarker();
  }

  drawFirstExampleNet(): void {
    this.clearBoard();
    this.netRepository.createPlace(400, 100);
    this.netRepository.createTransition(400, 200);
    this.netRepository.createPlace(300, 300);
    this.netRepository.createPlace(500, 300);
    this.netRepository.createTransition(400, 400);
    this.netRepository.createPlace(400, 500);
    this.netRepository.createToken(0);
    ArcHelper.createArc('place-0', 'transition-0');
    ArcHelper.createArc('transition-0', 'place-1');
    ArcHelper.createArc('transition-0', 'place-2');
    ArcHelper.createArc('place-1', 'transition-1');
    ArcHelper.createArc('place-2', 'transition-1');
    ArcHelper.createArc('transition-1', 'place-3');
    this.close();
  }

  drawFirstExampleNetWithSignals(): void {
    this.clearBoard();
    this.netRepository.createPlace(400, 100);
    this.netRepository.createTransition(400, 200);
    this.netRepository.createPlace(300, 300);
    this.netRepository.createPlace(500, 300);
    this.netRepository.createTransition(400, 400);
    this.netRepository.createPlace(400, 500);
    this.netRepository.createToken(0);
    ArcHelper.createArc('place-0', 'transition-0');
    ArcHelper.createArc('transition-0', 'place-1');
    ArcHelper.createArc('transition-0', 'place-2');
    ArcHelper.createArc('place-1', 'transition-1');
    ArcHelper.createArc('place-2', 'transition-1');
    ArcHelper.createArc('transition-1', 'place-3');

    this.netRepository.addSignal();
    this.netRepository.addSignal();
    this.netRepository.updateSelectedSignals([1, 2, 3]);
    this.netRepository.createSignal(0);
    this.netRepository.updateSelectedSignals([1, 3], [2]);
    this.netRepository.createSignal(1);
    this.close();
  }

  drawSecondExampleNet(): void {
    this.clearBoard();
    this.netRepository.createPlace(400, 60);
    this.netRepository.createTransition(400, 140);
    this.netRepository.createPlace(300, 220);
    this.netRepository.createPlace(500, 220);
    this.netRepository.createTransition(300, 300);
    this.netRepository.createTransition(500, 300);
    this.netRepository.createPlace(300, 380);
    this.netRepository.createPlace(500, 380);
    this.netRepository.createTransition(400, 460);
    this.netRepository.createPlace(400, 540);
    this.netRepository.createToken(0);
    ArcHelper.createArc('place-0', 'transition-0');
    ArcHelper.createArc('transition-0', 'place-1');
    ArcHelper.createArc('transition-0', 'place-2');
    ArcHelper.createArc('place-1', 'transition-1');
    ArcHelper.createArc('place-2', 'transition-2');
    ArcHelper.createArc('transition-1', 'place-3');
    ArcHelper.createArc('transition-2', 'place-4');
    ArcHelper.createArc('place-3', 'transition-3');
    ArcHelper.createArc('place-4', 'transition-3');
    ArcHelper.createArc('transition-3', 'place-5');
    this.close();
  }

  drawSecondExampleNetWithSignals(): void {
    this.clearBoard();
    this.netRepository.createPlace(400, 60);
    this.netRepository.createTransition(400, 140);
    this.netRepository.createPlace(300, 220);
    this.netRepository.createPlace(500, 220);
    this.netRepository.createTransition(300, 300);
    this.netRepository.createTransition(500, 300);
    this.netRepository.createPlace(300, 380);
    this.netRepository.createPlace(500, 380);
    this.netRepository.createTransition(400, 460);
    this.netRepository.createPlace(400, 540);
    this.netRepository.createToken(0);
    ArcHelper.createArc('place-0', 'transition-0');
    ArcHelper.createArc('transition-0', 'place-1');
    ArcHelper.createArc('transition-0', 'place-2');
    ArcHelper.createArc('place-1', 'transition-1');
    ArcHelper.createArc('place-2', 'transition-2');
    ArcHelper.createArc('transition-1', 'place-3');
    ArcHelper.createArc('transition-2', 'place-4');
    ArcHelper.createArc('place-3', 'transition-3');
    ArcHelper.createArc('place-4', 'transition-3');
    ArcHelper.createArc('transition-3', 'place-5');

    this.netRepository.addSignal();
    this.netRepository.addSignal();
    this.netRepository.addSignal();
    this.netRepository.updateSelectedSignals([1, 3], [2]);
    this.netRepository.createSignal(0);
    this.netRepository.updateSelectedSignals([2], [1]);
    this.netRepository.createSignal(2);
    this.netRepository.updateSelectedSignals([1, 2, 3, 4]);
    this.netRepository.createSignal(3);
    this.close();
  }

  drawThirdExampleNet(): void {
    this.clearBoard();
    this.netRepository.createPlace(235, 60);
    this.netRepository.createTransition(430, 65);
    this.netRepository.createPlace(550, 60);
    this.netRepository.createTransition(680, 65);
    this.netRepository.createPlace(810, 60);

    this.netRepository.createTransition(550, 140);
    this.netRepository.createPlace(450, 220);
    this.netRepository.createPlace(650, 220);
    this.netRepository.createTransition(450, 300);
    this.netRepository.createTransition(650, 300);
    this.netRepository.createPlace(450, 380);
    this.netRepository.createPlace(650, 380);
    this.netRepository.createTransition(550, 460);

    this.netRepository.createPlace(550, 540);
    this.netRepository.createTransition(430, 545);
    this.netRepository.createPlace(235, 540);
    this.netRepository.createTransition(680, 545);
    this.netRepository.createPlace(810, 540);

    this.netRepository.createToken(0);

    ArcHelper.createArc('place-0', 'transition-0');
    ArcHelper.createArc('transition-0', 'place-1');
    ArcHelper.createArc('transition-1', 'place-2');
    ArcHelper.createArc('place-1', 'transition-2');
    ArcHelper.createArc('transition-2', 'place-3');
    ArcHelper.createArc('place-1', 'transition-1');
    ArcHelper.createArc('transition-2', 'place-4');
    ArcHelper.createArc('place-3', 'transition-3');
    ArcHelper.createArc('place-4', 'transition-4');
    ArcHelper.createArc('place-5', 'transition-5');
    ArcHelper.createArc('transition-3', 'place-5');
    ArcHelper.createArc('transition-4', 'place-6');
    ArcHelper.createArc('place-6', 'transition-5');
    ArcHelper.createArc('transition-5', 'place-7');
    ArcHelper.createArc('place-7', 'transition-6');
    ArcHelper.createArc('transition-6', 'place-8');
    ArcHelper.createArc('place-7', 'transition-7');
    ArcHelper.createArc('transition-7', 'place-9');
    this.close();
  }

  drawFourthNet(): void {
    this.clearBoard();
    this.netRepository.createPlace(400, 60);
    this.netRepository.createTransition(400, 140);
    this.netRepository.createPlace(300, 220);
    this.netRepository.createPlace(400, 220);
    this.netRepository.createPlace(500, 220);
    this.netRepository.createTransition(300, 300);
    this.netRepository.createTransition(400, 300);
    this.netRepository.createTransition(500, 300);
    this.netRepository.createPlace(300, 380);
    this.netRepository.createPlace(400, 380);
    this.netRepository.createPlace(500, 380);
    this.netRepository.createTransition(400, 460);
    this.netRepository.createPlace(400, 540);

    this.netRepository.createToken(0);

    ArcHelper.createArc('place-0', 'transition-0');
    ArcHelper.createArc('transition-0', 'place-1');
    ArcHelper.createArc('transition-0', 'place-2');
    ArcHelper.createArc('transition-0', 'place-3');
    ArcHelper.createArc('place-1', 'transition-1');
    ArcHelper.createArc('place-2', 'transition-2');
    ArcHelper.createArc('place-3', 'transition-3');
    ArcHelper.createArc('transition-1', 'place-4');
    ArcHelper.createArc('transition-2', 'place-5');
    ArcHelper.createArc('transition-3', 'place-6');
    ArcHelper.createArc('place-4', 'transition-4');
    ArcHelper.createArc('place-5', 'transition-4');
    ArcHelper.createArc('place-6', 'transition-4');
    ArcHelper.createArc('transition-4', 'place-7');

    this.close();
  }

  drawFifthNet(): void {
    this.clearBoard();
    this.netRepository.createPlace(400, 60);
    this.netRepository.createTransition(400, 130);
    this.netRepository.createPlace(300, 200);
    this.netRepository.createPlace(500, 200);
    this.netRepository.createTransition(300, 340);
    this.netRepository.createTransition(400, 270);
    this.netRepository.createTransition(600, 270);
    this.netRepository.createPlace(300, 480);
    this.netRepository.createPlace(400, 340);
    this.netRepository.createPlace(600, 340);
    this.netRepository.createTransition(400, 410);
    this.netRepository.createTransition(600, 410);
    this.netRepository.createPlace(500, 480);
    this.netRepository.createTransition(400, 550);
    this.netRepository.createPlace(400, 600);

    this.netRepository.createToken(0);

    ArcHelper.createArc('place-0', 'transition-0');
    ArcHelper.createArc('transition-0', 'place-1');
    ArcHelper.createArc('transition-0', 'place-2');
    ArcHelper.createArc('place-1', 'transition-1');
    ArcHelper.createArc('transition-1', 'place-3');
    ArcHelper.createArc('place-3', 'transition-6');
    ArcHelper.createArc('place-2', 'transition-2');
    ArcHelper.createArc('place-2', 'transition-3');
    ArcHelper.createArc('transition-2', 'place-4');
    ArcHelper.createArc('transition-3', 'place-5');
    ArcHelper.createArc('place-4', 'transition-4');
    ArcHelper.createArc('place-5', 'transition-5');
    ArcHelper.createArc('transition-4', 'place-6');
    ArcHelper.createArc('transition-5', 'place-6');
    ArcHelper.createArc('place-6', 'transition-6');
    ArcHelper.createArc('transition-6', 'place-7');

    this.close();
  }
  close(): void {
    this.dialogRef.close();
  }
}
