import { NetRepository } from './../../../core/repositories/NetRepository';
import { MatDialogRef } from '@angular/material/dialog';
import { ClearBoardDialogComponent } from './../dialogs/clear-board-dialog/clear-board-dialog.component';
import { BoardHelper } from './../../../core/helpers/BoardHelper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CursorManager } from './../../shared/cursorManager';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  clearBoardDialogRef: MatDialogRef<ClearBoardDialogComponent>;
  cursorManager: CursorManager;

  constructor(
      @Inject(NetRepository) private readonly netRepository: NetRepository,
      @Inject(CursorManager) cursorManager: CursorManager,
      private dialog: MatDialog,
      private snackBar: MatSnackBar
    ) {
      this.cursorManager = cursorManager;
    }

  ngOnInit(): void {
  }

  createPdf(): void {
    this.snackBar.open('PDF Created!', 'close', {
      duration: 2000,
    });
  }

  clear(): void {
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
    this.snackBar.open('Board has been cleared!', 'close', {
      duration: 2000,
    });
  }

  openClearBoardDialog(): void {
    this.clearBoardDialogRef = this.dialog.open(ClearBoardDialogComponent);

    this.clearBoardDialogRef.afterClosed().subscribe(shouldClearBoard => {
        if (shouldClearBoard) {
          this.clear();
          BoardHelper.addArrowHeadMarker();
          this.cursorManager.setDefaultCursor();
        }
    });
  }
}
