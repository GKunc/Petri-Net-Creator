import { Injectable } from '@angular/core';
import { Transition } from './../models/Transition';
import { INetElement } from './../models/INetElement';

@Injectable({
    providedIn: 'root'
})
export class TransitionRepository {
    transitions: Transition[];
    currentID: number;

    constructor() {
        this.transitions = [];
        this.currentID = 0;
    }

    create(x: number, y: number): void {
        const transition: Transition = new Transition(this.currentID);
        transition.create(x, y);
        this.currentID++;
        this.transitions.push(transition);
    }

    removeAll(): void {
        this.transitions = [];
        this.currentID = 0;
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
}