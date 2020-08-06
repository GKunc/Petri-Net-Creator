import { ArcHelper } from './../helpers/ArcHelper';
import { BoardHelper } from './../helpers/BoardHelper';
import { TransitionHelper } from '../helpers/TransitionHelper';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const transition_id_prefix = 'transition-';

export class Transition implements INetElement {
    id: number;
    color: string = "white";

    constructor(id: number) {
        this.id = id;
    }

    getID(): number {
        return this.id;
    }
    
    create(x_position: number, y_position: number): void {
        TransitionHelper.createTransitionWithLabel(this.id, x_position - 240, y_position - 40);
        this.attachListeners();
    }

    private attachListeners(): void {
        BoardHelper.selectedElementEvent();
        BoardHelper.moveElementEvent();
    }

    private getDomID(): string {
        return transition_id_prefix + this.id;
    }

}