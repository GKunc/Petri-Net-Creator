import { Injectable } from '@angular/core';
import { Place } from './../models/Place';

@Injectable({
    providedIn: 'root'
})
export class PlaceRepository {
    places: Place[];
    currentID: number;

    constructor() {
        this.places = [];
        this.currentID = 1;
    }

    create(x: number, y: number): void {
        const place: Place = new Place(this.currentID);
        place.create(x, y);
        this.currentID++;
        this.places.push(place);
    }

    removeAll(): void {
        this.places = [];
        this.currentID = 1;
    }

    getAll(): Place[] {
        return this.places;
    }

    getByID(id: number): Place {
        return this.places.find(place => place.getID() === id);
    }

    deleteElementByID(id: number): void {
        const index = this.places.indexOf(this.getByID(id));
        if (index !== -1) {
            this.places.splice(index, 1);
        }
    }
}
