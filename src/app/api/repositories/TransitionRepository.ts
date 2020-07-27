import { Injectable } from '@angular/core';
import { Transition } from './../models/Transition';
import { INetElement } from './../models/INetElement';

@Injectable({
    providedIn: 'root'
})
export class TransitionRepository {
    current_id: number;

    constructor() {
        this.current_id = 1;
    }

    create(): void {
        let netElement: Transition = new Transition(this.current_id, 100, 100);
        netElement.create();
        this.current_id++;
    }

    resetIDs(): void {
        this.current_id = 1;
    }
}