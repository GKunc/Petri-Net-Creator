import { ArcHelper } from './../helpers/ArcHelper';
import { Injectable } from '@angular/core';
import { Arc } from './../models/Arc';
import { INetElement } from './../models/INetElement';

@Injectable({
    providedIn: 'root'
})
export class ArcRepository {
    constructor() {}
    
    create(start_element: INetElement, end_element: INetElement): void {
        let netElement: Arc = new Arc(start_element.getID() as number, end_element.getID() as number);
        let [start_x, start_y] = ArcHelper.getCurrentPositionOfElemnet(start_element);
        let [end_x, end_y] = ArcHelper.getCurrentPositionOfElemnet(end_element);
        netElement.create(start_x, start_y, end_x, end_y);
    }
}