import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
    templateUrl: './clear-board-dialog.component.html',
    styleUrls: ['./clear-board-dialog.component.css']
})

export class ClearBoardDialogComponent {
  deleteChanges: boolean;

  constructor(private dialogRef: MatDialogRef<ClearBoardDialogComponent>) {
    this.deleteChanges = false;
  }

  delete(): void {
    this.deleteChanges = true;
    this.dialogRef.close(this.deleteChanges);
  }

  close(): void {
    this.dialogRef.close(this.deleteChanges);
  }
}
