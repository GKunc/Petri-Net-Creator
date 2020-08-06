import { ArcHelper } from './../helpers/ArcHelper';
import { BoardHelper } from './../helpers/BoardHelper';
import { PlaceHelper } from '../helpers/PlaceHelper';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const place_id_prefix = 'place-';

export class Place implements INetElement {
    id: number;
    color: string = 'white';

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
        BoardHelper.selectedElementEvent();
        BoardHelper.moveElementEvent();
    }

    private getDomID(): string {
        return place_id_prefix + this.id;
    }
}