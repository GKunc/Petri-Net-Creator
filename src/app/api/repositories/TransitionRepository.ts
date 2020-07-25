import { Injectable } from '@angular/core';
import { Transition } from './../models/Transition';
import { INetElement } from './../models/INetElement';

@Injectable({
    providedIn: 'root'
})
export class TransitionRepository {

    constructor() {}

    create(id: number): void {
        let netElement: INetElement = new Transition(id, 100, 100);
        netElement.create();
    }
}