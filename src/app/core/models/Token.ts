import { TokenHelper } from './../helpers/TokenHelper';
import { ArcHelper } from '../helpers/ArcHelper';
import { BoardHelper } from '../helpers/BoardHelper';
import { PlaceHelper } from '../helpers/PlaceHelper';
import { INetElement } from './INetElement';
import * as $ from 'jquery';


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
    }
}
