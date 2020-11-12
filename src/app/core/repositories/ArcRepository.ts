import { Injectable } from '@angular/core';
import { Arc } from './../models/Arc';

@Injectable({
    providedIn: 'root'
})
export class ArcRepository {

    constructor() {}

    create(ID: string): void {
        const arc = new Arc();
        arc.create(ID);
    }
}
