import { NetRepository } from './../../../../core/repositories/NetRepository';
import { TokenHelper } from './../../../../core/helpers/TokenHelper';
import { ArcHelper } from './../../../../core/helpers/ArcHelper';
import { TransitionHelper } from './../../../../core/helpers/TransitionHelper';
import { PlaceHelper } from './../../../../core/helpers/PlaceHelper';
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

  drawFirstExampleNet(): void {
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
    this.netRepository.createToken(0, 565, 35);
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
