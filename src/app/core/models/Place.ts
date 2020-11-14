import { BoardHelper } from './../helpers/BoardHelper';
import { PlaceHelper } from '../helpers/PlaceHelper';
import { INetElement } from './INetElement';

export class Place implements INetElement {
    id: number;
    xPosition: number;
    yPosition: number;

    constructor() {
    }

    updateCoordinates(xPosition: number, yPosition: number): void {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    getID(): number {
        return this.id;
    }

    create(id: number, x: number, y: number): void {
        PlaceHelper.createPlaceWtihLabel(id, x - 205, y - 25);
        this.attachListeners();
    }

    private attachListeners(): void {
        BoardHelper.moveElementEvent();
    }
}
