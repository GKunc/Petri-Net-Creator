import { TokenHelper } from './../../../../core/helpers/TokenHelper';
import { ArcHelper } from './../../../../core/helpers/ArcHelper';
import { TransitionHelper } from './../../../../core/helpers/TransitionHelper';
import { PlaceHelper } from './../../../../core/helpers/PlaceHelper';
import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
    templateUrl: './example-nets-dialog.component.html',
    styleUrls: ['./example-nets-dialog.component.css']
})

export class ExampleNetsDialogComponent {

  constructor(private dialogRef: MatDialogRef<ExampleNetsDialogComponent>) {}

  drawFirstExampleNet(): void {
    PlaceHelper.createPlaceWtihLabel(0, 400, 30);
    TransitionHelper.createTransitionWithLabel(0, 365, 115);
    PlaceHelper.createPlaceWtihLabel(1, 200, 205);
    PlaceHelper.createPlaceWtihLabel(2, 600, 205);
    TransitionHelper.createTransitionWithLabel(1, 165, 295);
    TransitionHelper.createTransitionWithLabel(2, 565, 295);
    PlaceHelper.createPlaceWtihLabel(3, 200, 385);
    PlaceHelper.createPlaceWtihLabel(4, 600, 385);
    TransitionHelper.createTransitionWithLabel(3, 365, 475);
    PlaceHelper.createPlaceWtihLabel(5, 400, 565);
    TokenHelper.createToken(0, 400, 30);
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

  close(): void {
    this.dialogRef.close();
  }
}
