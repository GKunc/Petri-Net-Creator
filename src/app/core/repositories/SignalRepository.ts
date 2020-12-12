import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignalRepository {
    inputSignals: number[];
    currentSignalNumber: number;
    selectedInputSignals: number[];
    activeInputSignals: number[];

  constructor() {
      this.currentSignalNumber = 1;
      this.inputSignals = [1];
      this.selectedInputSignals = [];
      this.activeInputSignals = [];
  }

  getCurrentSingalNumber(): number {
    return this.currentSignalNumber;
  }

  addSignal(): void {
    this.currentSignalNumber++;
    this.inputSignals.push(this.currentSignalNumber);
  }

  removeAll(): void {
    while (this.inputSignals.length > 1) {
      this.removeSignal();
    }
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

  updateActiveInputSignals(activeInputSignals: number[]): void {
    this.activeInputSignals = activeInputSignals;
  }

}
