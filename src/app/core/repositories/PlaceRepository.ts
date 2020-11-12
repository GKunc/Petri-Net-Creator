import { Injectable } from '@angular/core';
import { Place } from './../models/Place';

@Injectable({
    providedIn: 'root'
})
export class PlaceRepository {
    private places: Place[];

    constructor() {
        this.places = [];
    }

    setPlaces(places: Place[]): void {
        this.places = places;
    }

    create(x: number, y: number): void {
        const place: Place = new Place();
        place.id = this.getLowestAvailableID();
        place.create(place.id , x, y);
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

    remove(id: number): void {
        const index = this.places.indexOf(this.getByID(id));
        if (index !== -1) {
            this.places.splice(index, 1);
        }
    }

    private getLowestAvailableID(): number {
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
