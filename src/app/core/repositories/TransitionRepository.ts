import { Injectable } from '@angular/core';
import { Transition } from './../models/Transition';

@Injectable({
    providedIn: 'root'
})
export class TransitionRepository {
    private transitions: Transition[];

    constructor() {
        this.transitions = [];
    }

    setTransitions(transitions: Transition[]): void {
        this.transitions = transitions;
    }

    create(x: number, y: number): void {
        const transition: Transition = new Transition();
        transition.create(this.getLowestAvailableID(), x, y);
        this.transitions.push(transition);
    }

    addSignals(id: number, signals: number[]): void {
        this.getByID(id).addSignals(signals);
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

    remove(id: number): void {
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
