import { Injectable } from '@angular/core';
import { INetElement } from './../models/INetElement';
import { Place } from './../models/Place';

@Injectable({
    providedIn: 'root'
})
export class PlaceRepository {
    constructor() {}

    create(id: number): void {
        let netElement: INetElement = new Place(id, 100, 100);
        netElement.create();
    }
}