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
    this.netRepository.createPlace(600, 100);
    this.netRepository.createTransition(600, 200);
    this.netRepository.createPlace(400, 300);
    this.netRepository.createPlace(800, 300);
    this.netRepository.createTransition(600, 400);
    this.netRepository.createPlace(600, 500);
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
    this.netRepository.addSignal();
    this.netRepository.addSignal();
    this.netRepository.createPlace(600, 100);
    this.netRepository.createTransition(600, 200);
    this.netRepository.createPlace(400, 300);
    this.netRepository.createPlace(800, 300);
    this.netRepository.createTransition(600, 400);
    this.netRepository.createPlace(600, 500);
    this.netRepository.createToken(0);
    ArcHelper.createArc('place-0', 'transition-0');
    ArcHelper.createArc('transition-0', 'place-1');
    ArcHelper.createArc('transition-0', 'place-2');
    ArcHelper.createArc('place-1', 'transition-1');
    ArcHelper.createArc('place-2', 'transition-1');
    ArcHelper.createArc('transition-1', 'place-3');

    this.netRepository.updateSelectedSignals([1, 2, 3]);
    this.netRepository.createSignal(0, 380, 160);
    this.netRepository.updateSelectedSignals([1, 3]);
    this.netRepository.createSignal(1, 380, 370);
    this.close();
  }

  drawSecondExampleNet(): void {
    this.clearBoard();
    this.netRepository.createPlace(600, 60);
    this.netRepository.createTransition(600, 140);
    this.netRepository.createPlace(400, 220);
    this.netRepository.createPlace(800, 220);
    this.netRepository.createTransition(400, 300);
    this.netRepository.createTransition(800, 300);
    this.netRepository.createPlace(400, 380);
    this.netRepository.createPlace(800, 380);
    this.netRepository.createTransition(600, 460);
    this.netRepository.createPlace(600, 540);
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
    this.netRepository.createPlace(600, 60);
    this.netRepository.createTransition(600, 140);
    this.netRepository.createPlace(400, 220);
    this.netRepository.createPlace(800, 220);
    this.netRepository.createTransition(400, 300);
    this.netRepository.createTransition(800, 300);
    this.netRepository.createPlace(400, 380);
    this.netRepository.createPlace(800, 380);
    this.netRepository.createTransition(600, 460);
    this.netRepository.createPlace(600, 540);
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
    this.netRepository.updateSelectedSignals([1, 3]);
    this.netRepository.createSignal(0, 380, 100);

    this.netRepository.updateSelectedSignals([2]);
    this.netRepository.createSignal(0, 560, 260);

    this.netRepository.updateSelectedSignals([1, 2, 3, 4]);
    this.netRepository.createSignal(0, 380, 420);
    this.close();
  }

  drawThirdExampleNet(): void {
    this.clearBoard();
    this.netRepository.createPlace(350, 60);
    this.netRepository.createTransition(500, 65);
    this.netRepository.createPlace(650, 60);
    this.netRepository.createTransition(800, 65);
    this.netRepository.createPlace(950, 60);

    this.netRepository.createTransition(650, 140);
    this.netRepository.createPlace(500, 220);
    this.netRepository.createPlace(800, 220);
    this.netRepository.createTransition(500, 300);
    this.netRepository.createTransition(800, 300);
    this.netRepository.createPlace(500, 380);
    this.netRepository.createPlace(800, 380);
    this.netRepository.createTransition(650, 460);

    this.netRepository.createPlace(650, 540);
    this.netRepository.createTransition(500, 545);
    this.netRepository.createPlace(350, 540);
    this.netRepository.createTransition(800, 545);
    this.netRepository.createPlace(950, 540);

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

  close(): void {
    this.dialogRef.close();
  }
}
