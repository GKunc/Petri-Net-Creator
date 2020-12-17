import { BoardHelper } from './../helpers/BoardHelper';
import { TransitionHelper } from '../helpers/TransitionHelper';
import { INetElement } from './INetElement';

export class Transition implements INetElement {
    private id: number;
    private xPosition: number;
    private yPosition: number;
    private signals: number[];
    private negativeSignals: number[];

    constructor() {
        this.signals = [];
        this.negativeSignals = [];
    }

    setID(id: number): void {
        this.id = id;
    }

    updateCoordinates(xPosition: number, yPosition: number): void {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    addSignals(signals: number[], negativeSignals: number[]): void {
        this.signals = signals;
        this.negativeSignals = negativeSignals;
    }

    getID(): number {
        return this.id;
    }

    getXPosition(): number {
        return this.xPosition;
    }

    getYPosition(): number {
        return this.yPosition;
    }

    getSignals(): number[] {
        return this.signals;
    }

    getNegativeSignals(): number[] {
        return this.negativeSignals;
    }

    create(id: number, xPosition: number, yPosition: number): void {
        this.id = id;
        TransitionHelper.createTransitionWithLabel(this.id, xPosition - 240, yPosition - 40);
        this.attachListeners();
    }

    private attachListeners(): void {
        BoardHelper.moveElementEvent();
    }
}
