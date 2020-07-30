import { Injectable } from '@angular/core';
import { Transition } from './../models/Transition';
import { INetElement } from './../models/INetElement';

@Injectable({
    providedIn: 'root'
})
export class TransitionRepository {
    transitions: Transition[];
    current_id: number;

    constructor() {
        this.transitions = [];
        this.current_id = 1;
    }

    create(): void {
        let transition: Transition = new Transition(this.current_id);
        transition.create();
        this.current_id++;
        this.transitions.push(transition);
    }

    removeAll(): void {
        this.transitions = [];
        this.current_id = 1;
    }

    getAll(): Transition[] {
        return this.transitions;
    }

    getByID(id: number): Transition {
        return this.transitions.find(transition => transition.getID() === id);
    }

    deleteElementByID(id: number): void {
        let index = this.transitions.indexOf(this.getByID(id));
        if (index !== -1) {
            this.transitions.splice(index, 1);
        }
    }
}