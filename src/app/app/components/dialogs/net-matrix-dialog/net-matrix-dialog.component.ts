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

    this.netRepository.buildNetMatrix();

    this.numberOfPlaces = Array(this.netRepository.placeRepository.getAll().length);
    this.numberOfTransitions = Array(this.netRepository.transitionRepository.getAll().length);
  }

  close(): void {
    this.dialogRef.close();
  }
}
