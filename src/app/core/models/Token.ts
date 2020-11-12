import { TokenHelper } from './../helpers/TokenHelper';
import { INetElement } from './INetElement';

export class Token implements INetElement {
    id: number;

    constructor() {
    }

    getID(): number {
        return this.id;
    }

    create(id: number, x: number, y: number): void {
        this.id = id;
        TokenHelper.createToken(this.id, x - 170, y);
    }
}
