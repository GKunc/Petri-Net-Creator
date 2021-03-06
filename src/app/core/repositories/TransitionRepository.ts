import { IRepository } from './IRepository';
import { Injectable } from '@angular/core';
import { Transition } from './../models/Transition';

@Injectable({
    providedIn: 'root'
})
export class TransitionRepository implements IRepository<Transition> {
    private transitions: Transition[];

    constructor() {
        this.transitions = [];
    }

    setElements(elements: Transition[]): void {
        this.transitions = elements;
    }

    create(x: number, y: number): void {
        const transition: Transition = new Transition();
        transition.create(this.getLowestAvailableID(), x, y);
        this.transitions.push(transition);
    }

    addSignals(id: number, signals: number[], negativeSignals: number[] = []): void {
        this.getByID(id).addSignals(signals, negativeSignals);
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

    private getLowestAvailableID(): number {
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
