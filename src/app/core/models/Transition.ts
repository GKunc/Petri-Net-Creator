import { BoardHelper } from './../helpers/BoardHelper';
import { TransitionHelper } from '../helpers/TransitionHelper';
import { INetElement } from './INetElement';

export class Transition implements INetElement {
    id: number;
    color = 'white';
    signals: number[];

    constructor() {
        this.signals = [];
    }

    addSignals(signals: number[]): void {
        this.signals = signals;
    }

    getID(): number {
        return this.id;
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
