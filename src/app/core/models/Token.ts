import { TokenHelper } from './../helpers/TokenHelper';
import { INetElement } from './INetElement';

export class Token implements INetElement {
    private id: number;

    constructor() {
    }

    setID(id: number): void {
        this.id = id;
    }

    getID(): number {
        return this.id;
    }

    create(id: number, prefix: string = '', usePrefixAsID: boolean = false): void {
        this.id = id;
        TokenHelper.createToken(this.id, prefix, usePrefixAsID);
    }
}
