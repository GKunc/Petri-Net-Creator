import { Place } from './../../../../core/models/Place';
import { Transition } from './../../../../core/models/Transition';
import { NetRepository } from './../../../../core/repositories/NetRepository';
import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
    templateUrl: './logic-description-dialog.component.html',
    styleUrls: ['./logic-description-dialog.component.css']
})

export class LogicDescriptionDialogComponent {

  transitions: Transition[];
  places: Place[];

  constructor(
    private dialogRef: MatDialogRef<LogicDescriptionDialogComponent>,
    @Inject(NetRepository) private readonly netRepository: NetRepository
  ) {
    this.transitions = this.netRepository.transitionRepository.getAll();
    this.places = this.netRepository.placeRepository.getAll();
  }

  close(): void {
    this.dialogRef.close();
  }
}
