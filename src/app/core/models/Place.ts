import { ArcHelper } from './../helpers/ArcHelper';
import { BoardHelper } from './../helpers/BoardHelper';
import { PlaceHelper } from '../helpers/PlaceHelper';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const PLACE_PREFIX = 'place-';

export class Place implements INetElement {
    id: number;
    color = 'white';

    constructor(id: number) {
        this.id = id;
    }

    getID(): number {
        return this.id;
    }

    create(x: number, y: number): void {
        PlaceHelper.createPlaceWtihLabel(this.id, x - 205, y - 25);
        this.attachListeners();
    }

    private attachListeners(): void {
        BoardHelper.moveElementEvent();
    }

    private getDomID(): string {
        return PLACE_PREFIX + this.id;
    }
}
