import { ArcHelper } from './../helpers/ArcHelper';
import { BoardHelper } from './../helpers/BoardHelper';
import { TransitionHelper } from '../helpers/TransitionHelper';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const TRANSITION_PREFIX = 'transition-';

export class Transition implements INetElement {
    id: number;
    color = 'white';

    constructor(id: number) {
        this.id = id;
    }

    getID(): number {
        return this.id;
    }

    create(xPosition: number, yPosition: number): void {
        TransitionHelper.createTransitionWithLabel(this.id, xPosition - 240, yPosition - 40);
        this.attachListeners();
    }

    private attachListeners(): void {
        BoardHelper.moveElementEvent();
    }

    private getDomID(): string {
        return TRANSITION_PREFIX + this.id;
    }

}
