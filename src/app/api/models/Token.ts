import { TokenHelper } from './../helpers/TokenHelper';
import { ArcHelper } from '../helpers/ArcHelper';
import { BoardHelper } from '../helpers/BoardHelper';
import { PlaceHelper } from '../helpers/PlaceHelper';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const place_id_prefix = 'token-';

export class Token implements INetElement {
    id: number;

    constructor(id: number) {
        this.id = id;
    }   

    getID(): number {
        return this.id;
    }

    create(x: number, y: number): void {
        TokenHelper.createToken(this.id, x - 170, y);
        // this.attachListeners();
    }

    private attachListeners(): void {
        // BoardHelper.selectedElementEvent();
        // BoardHelper.moveElementEvent();
    }

    private getDomID(): string {
        return place_id_prefix + this.id;
    }
}