import { BoardHelper } from './../helpers/BoardHelper';
import { PlaceHelper } from '../helpers/PlaceHelper';
import { INetElement } from './INetElement';

export class Place implements INetElement {
    id: number;
    private xPosition: number;
    private yPosition: number;

    constructor() {
    }

    updateCoordinates(xPosition: number, yPosition: number): void {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    setID(id: number): void {
        this.id = id;
    }

    getID(): number {
        return this.id;
    }

    getXPosition(): number {
        return this.xPosition;
    }

    getYPosition(): number {
        return this.yPosition;
    }

    create(id: number, x: number, y: number): void {
        this.id = id;
        PlaceHelper.createPlaceWtihLabel(id, x - 205, y - 25);
        this.attachListeners();
    }

    private attachListeners(): void {
        BoardHelper.moveElementEvent();
    }
}
