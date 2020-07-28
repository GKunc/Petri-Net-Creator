import { Injectable } from '@angular/core';
import { Transition } from './../models/Transition';
import { INetElement } from './../models/INetElement';

@Injectable({
    providedIn: 'root'
})
export class TransitionRepository {
    transtions: Transition[];
    current_id: number;

    constructor() {
        this.transtions = [];
        this.current_id = 1;
    }

    create(): void {
        let transition: Transition = new Transition(this.current_id);
        transition.create();
        this.current_id++;
        this.transtions.push(transition);
    }

    resetIDs(): void {
        this.transtions = [];
        this.current_id = 1;
    }

    getAll(): Transition[] {
        return this.transtions;
    }

    getByID(id: number): Transition {
        return this.transtions.find(transition => transition.getID() === id);
    }
}