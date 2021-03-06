import { NetRepository } from './../../../../core/repositories/NetRepository';
import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import * as $ from 'jquery';

@Component({
    templateUrl: './add-input-signals-dialog.component.html',
    styleUrls: ['./add-input-signals-dialog.component.css']
})

export class AddInputSignalsDialogComponent {

  netRepository: NetRepository;
  selectedSignals: number[];
  negativSelectedInputSignals: number[];

  constructor(
    private dialogRef: MatDialogRef<AddInputSignalsDialogComponent>,
    @Inject(NetRepository) netRepository: NetRepository
  ) {
    this.selectedSignals = [];
    this.negativSelectedInputSignals = [];
    this.netRepository = netRepository;
  }

  addSignal(): void {
    this.netRepository.signalRepository.addSignal();
  }

  removeSignal(): void {
    this.netRepository.signalRepository.removeSignal();
  }

  close(): void {
    this.dialogRef.close([]);
  }

  addCondition(): void {
    const signals = document.getElementsByClassName('output-signal');
    Array.from(signals).forEach(signal => {
      if ($(signal).is(':checked')) {
        this.selectedSignals.push(Number(signal.getAttribute('id').split('-')[1]));
      }
    });

    const negationSignal = document.getElementsByClassName('negation-output-signal');
    Array.from(negationSignal).forEach(signal => {
      if ($(signal).is(':checked')) {
        this.negativSelectedInputSignals.push(Number(signal.getAttribute('id').split('-')[2]));
      }
    });

    this.netRepository.signalRepository.updateSelectedSignals(this.selectedSignals, this.negativSelectedInputSignals);
    this.dialogRef.close([this.selectedSignals, this.negativSelectedInputSignals]);
  }
}
