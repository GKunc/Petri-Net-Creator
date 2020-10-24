import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignalRepository {
    outputSignals: number[];
    currentSignalNumber: number;
    selectedOutputSignals: number[];
    activeSignals: number[];

  constructor() {
      this.currentSignalNumber = 1;
      this.outputSignals = [1];
      this.selectedOutputSignals = [];
      this.activeSignals = [];
  }

  addSignal(): void {
    this.currentSignalNumber++;
    this.outputSignals.push(this.currentSignalNumber);
  }

  removeSignal(): void {
    if (this.outputSignals.length > 1) {
      this.outputSignals.pop();
      this.currentSignalNumber--;
    }
  }

  updateSelectedSignals(selectedOutputSignals: number[]): void {
    this.selectedOutputSignals = selectedOutputSignals;
  }

  updateInputSignals(activeSignals: number[]): void {
    this.activeSignals = activeSignals;
  }
}
