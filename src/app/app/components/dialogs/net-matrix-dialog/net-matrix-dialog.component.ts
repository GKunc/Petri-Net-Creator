import { NetRepository } from '../../../../core/repositories/NetRepository';
import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
    templateUrl: './net-matrix-dialog.component.html',
    styleUrls: ['./net-matrix-dialog.component.css']
})

export class NetMatrixDialogComponent {

  netRepository: NetRepository;
  numberOfPlaces: number[];
  numberOfTransitions: number[];

  constructor(
    private dialogRef: MatDialogRef<NetMatrixDialogComponent>,
    @Inject(NetRepository) netRepository: NetRepository
  ) {
    this.netRepository = netRepository;

    this.netRepository.initNet();

    this.numberOfPlaces = Array(this.netRepository.placeRepository.places.length);
    this.numberOfTransitions = Array(this.netRepository.transitionRepository.transitions.length);
    console.log(this.netRepository.netMatrix);
  }

  close(): void {
    this.dialogRef.close();
  }
}
