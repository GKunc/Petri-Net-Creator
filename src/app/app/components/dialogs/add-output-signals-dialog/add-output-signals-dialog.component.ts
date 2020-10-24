import { SignalRepository } from './../../../../core/repositories/SignalRepository';
import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';
import * as $ from 'jquery';

@Component({
    templateUrl: './add-output-signals-dialog.component.html',
    styleUrls: ['./add-output-signals-dialog.component.css']
})

export class AddOutputSignalsDialogComponent {

  signalRepository: SignalRepository;
  selectedSignals: number[];

  constructor(
    private dialogRef: MatDialogRef<AddOutputSignalsDialogComponent>,
    @Inject(SignalRepository) signalRepository: SignalRepository
  ) {
    this.selectedSignals = [];
    this.signalRepository = signalRepository;
  }

  addSignal(): void {
    this.signalRepository.addSignal();
  }

  removeSignal(): void {
    this.signalRepository.removeSignal();
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
    this.signalRepository.updateSelectedSignals(this.selectedSignals);
    this.dialogRef.close(this.selectedSignals);
  }
}
