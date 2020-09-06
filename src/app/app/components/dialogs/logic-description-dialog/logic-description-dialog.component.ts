import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
    templateUrl: './logic-description-dialog.component.html',
    styleUrls: ['./logic-description-dialog.component.css']
})

export class LogicDescriptionDialogComponent {

  constructor(private dialogRef: MatDialogRef<LogicDescriptionDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
