import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
    templateUrl: './example-nets-dialog.component.html',
    styleUrls: ['./example-nets-dialog.component.css']
})

export class ExampleNetsDialogComponent {

  constructor(private dialogRef: MatDialogRef<ExampleNetsDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
