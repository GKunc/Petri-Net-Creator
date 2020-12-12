import { Injectable } from '@angular/core';
import { Arc } from './../models/Arc';

@Injectable({
    providedIn: 'root'
})
export class ArcRepository {
    arc: Arc[];

    constructor() {}

    create(ID: string): void {
        const arc = new Arc();
        arc.create(ID);
    }
}
