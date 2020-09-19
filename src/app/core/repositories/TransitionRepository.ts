import { Injectable } from '@angular/core';
import { Transition } from './../models/Transition';
import { INetElement } from './../models/INetElement';

@Injectable({
    providedIn: 'root'
})
export class TransitionRepository {
    transitions: Transition[];

    constructor() {
        this.transitions = [];
    }

    create(x: number, y: number): void {
        const transition: Transition = new Transition(this.getLowestAvailableID());
        transition.create(x, y);
        this.transitions.push(transition);
    }

    removeAll(): void {
        this.transitions = [];
    }

    getAll(): Transition[] {
        return this.transitions;
    }

    getByID(id: number): Transition {
        return this.transitions.find(transition => transition.getID() === id);
    }

    deleteElementByID(id: number): void {
        const index = this.transitions.indexOf(this.getByID(id));
        if (index !== -1) {
            this.transitions.splice(index, 1);
        }
    }

    getLowestAvailableID(): number {
        let id = 0;
        let found = false;
        while (!found) {
            if (this.transitions.find(transition => transition.getID() === id)) {
                id++;
            } else {
                found = true;
            }
        }
        return id;
    }
}
