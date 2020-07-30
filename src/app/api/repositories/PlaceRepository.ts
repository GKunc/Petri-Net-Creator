import { Injectable } from '@angular/core';
import { Place } from './../models/Place';

@Injectable({
    providedIn: 'root'
})
export class PlaceRepository {
    places: Place[];
    current_id: number;

    constructor() {
        this.places = [];
        this.current_id = 1;
    }

    create(): void {
        let place: Place = new Place(this.current_id);
        place.create();
        this.current_id++;
        this.places.push(place);
    }

    removeAll(): void {
        this.places = [];
        this.current_id = 1;
    }

    getAll(): Place[] {
        return this.places;
    }

    getByID(id: number): Place {
        return this.places.find(place => place.getID() === id);
    }
    
    deleteElementByID(id: number): void {
        let index = this.places.indexOf(this.getByID(id));
        if (index !== -1) {
            this.places.splice(index, 1);
        }
    }
}