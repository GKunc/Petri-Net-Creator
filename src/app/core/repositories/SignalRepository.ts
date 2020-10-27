import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignalRepository {
    inputSignals: number[];
    currentSignalNumber: number;
    selectedInputSignals: number[];
    outputSignals: number[];

  constructor() {
      this.currentSignalNumber = 1;
      this.inputSignals = [1];
      this.selectedInputSignals = [];
      this.outputSignals = [];
  }

  addSignal(): void {
    this.currentSignalNumber++;
    this.inputSignals.push(this.currentSignalNumber);
  }

  removeSignal(): void {
    if (this.inputSignals.length > 1) {
      this.inputSignals.pop();
      this.currentSignalNumber--;
    }
  }

  updateSelectedSignals(selectedInputSignals: number[]): void {
    this.selectedInputSignals = selectedInputSignals;
  }

  updateOutputSignals(outputSignals: number[]): void {
    this.outputSignals = outputSignals;
  }
}
