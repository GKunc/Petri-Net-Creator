import { SignalRepository } from './../../../../core/repositories/SignalRepository';
import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
    templateUrl: './add-output-signals-dialog.component.html',
    styleUrls: ['./add-output-signals-dialog.component.css']
})

export class AddOutputSignalsDialogComponent {

  signalRepository: SignalRepository;

  constructor(
    private dialogRef: MatDialogRef<AddOutputSignalsDialogComponent>,
    @Inject(SignalRepository) signalRepository: SignalRepository
  ) {
    this.signalRepository = signalRepository;
  }

  addSignal(): void {
    this.signalRepository.addSignal();
  }

  removeSignal(): void {
    this.signalRepository.removeSignal();
  }

  close(): void {
    this.dialogRef.close();
  }
}
