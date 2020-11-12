import { SignalRepository } from './../../app/core/repositories/SignalRepository';

describe('SignalRepository', () => {
  let uut: SignalRepository;

  beforeEach(async () => {
      uut = new SignalRepository();
    });

  it('should add new signal', () => {
    // Arrange
    // Act
    uut.addSignal();

    // Assert
    expect(uut.currentSignalNumber).toBe(2);
    expect(uut.inputSignals).toEqual([1, 2]);
  });

  it('should not remove signal if only one is present', () => {
    // Arrange
    // Act
    uut.removeSignal();

    // Assert
    expect(uut.currentSignalNumber).toBe(1);
    expect(uut.inputSignals).toEqual([1]);
  });

  it('should remove signal if more than one is present', () => {
    // Arrange
    uut.addSignal();
    uut.addSignal();
    uut.addSignal();

    // Act
    uut.removeSignal();

    // Assert
    expect(uut.currentSignalNumber).toBe(3);
    expect(uut.inputSignals).toEqual([1, 2, 3]);
  });

  it('should remove all signals', () => {
    // Arrange
    uut.addSignal();
    uut.addSignal();
    uut.addSignal();

    // Act
    uut.removeAll();

    // Assert
    expect(uut.currentSignalNumber).toBe(1);
    expect(uut.inputSignals).toEqual([1]);
  });

  it('should update active signals', () => {
    // Arrange
    // Act
    uut.updateActiveInputSignals([1, 2]);

    // Assert
    expect(uut.activeInputSignals.length).toBe(2);
    expect(uut.activeInputSignals).toEqual([1, 2]);
  });

  it('should update selected signals', () => {
    // Arrange
    // Act
    uut.updateSelectedSignals([1, 2, 3]);

    // Assert
    expect(uut.selectedInputSignals.length).toBe(3);
    expect(uut.selectedInputSignals).toEqual([1, 2, 3]);
  });

});
