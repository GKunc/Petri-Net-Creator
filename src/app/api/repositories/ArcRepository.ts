import { Injectable } from '@angular/core';
import { Arc } from './../models/Arc';
import { INetElement } from './../models/INetElement';

@Injectable({
    providedIn: 'root'
})
export class ArcRepository {
    constructor() {}
    
    create(start_id: number, end_id: number): void {
        let netElement: INetElement = new Arc(start_id, end_id);
        netElement.create();
    }
}