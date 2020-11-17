import { TokenHelper } from './../helpers/TokenHelper';
import { INetElement } from './INetElement';

export class Token implements INetElement {
    id: number;

    constructor() {
    }

    getID(): number {
        return this.id;
    }

    create(id: number, prefix: string = '', usePrefixAsID: boolean = false): void {
        this.id = id;
        TokenHelper.createToken(this.id, prefix, usePrefixAsID);
    }
}
