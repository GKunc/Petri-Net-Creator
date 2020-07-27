import { Injectable } from '@angular/core';
import { INetElement } from './../models/INetElement';
import { Place } from './../models/Place';

@Injectable({
    providedIn: 'root'
})
export class PlaceRepository {
    current_id: number;

    constructor() {
        this.current_id = 1;
    }

    create(): void {
        let netElement: Place = new Place(this.current_id, 100, 100);
        netElement.create();
        this.current_id++;
    }

    resetIDs(): void {
        this.current_id = 1;
    }
}