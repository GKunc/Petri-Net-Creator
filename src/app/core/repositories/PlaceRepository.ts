import { Injectable } from '@angular/core';
import { Place } from './../models/Place';

@Injectable({
    providedIn: 'root'
})
export class PlaceRepository {
    places: Place[];

    constructor() {
        this.places = [];
    }

    create(x: number, y: number): void {
        const place: Place = new Place(this.getLowestAvailableID());
        place.create(x, y);
        this.places.push(place);
    }

    removeAll(): void {
        this.places = [];
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

    getLowestAvailableID(): number {
        let id = 0;
        let found = false;
        while (!found) {
            if (this.places.find(place => place.getID() === id)) {
                id++;
            } else {
                found = true;
            }
        }
        return id;
    }
}
