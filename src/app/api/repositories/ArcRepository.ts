import { ArcHelper } from './../helpers/ArcHelper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardHelper } from './../helpers/BoardHelper';
import { Injectable, Inject } from '@angular/core';
import { Arc } from './../models/Arc';

@Injectable({
    providedIn: 'root'
})
export class ArcRepository {

    constructor(private snackBar: MatSnackBar) {}
    
    create(): void {
        let selectedElements: Element[] = BoardHelper.getSelectedElementsWithoutLabels();
        let isValid = this.validateConnection(selectedElements);
        if(isValid) {
            let arc = new Arc(); // id of start and end element
            arc.create();
            BoardHelper.removeSelection();
        }
    }

    private connectToNearestEndOfPlace() {

    }

    private connectToNearestEndOfTransition() {

    }

    validateConnection(selectedElements: Element[]): boolean {
        if(!this.validateNumberOfElements(selectedElements) ||
            !this.validateObjectsType(selectedElements) ||
            !this.validateIfElementIsArc(selectedElements)) {
            return false;
        }
        return true;
    }

    private validateNumberOfElements(selectedElements: Element[]): boolean {
        if(selectedElements.length !== 2) {
            this.snackBar.open(
                "Bad number of elements selected. Please select exactly 2 elements!", 
                "Got it!", 
                { panelClass: ['error'] }
            );
            return false;
        } 
        return true;
    }

    private validateObjectsType(selectedElements: Element[]): boolean {
        if(selectedElements[0].getAttribute('class') === selectedElements[1].getAttribute('class')) {
            this.snackBar.open(
                "Cannot connect two elements of same type!", 
                "Got it!", 
                { panelClass: ['error'] }
            );
            return false;
        } 
        return true;
    }

    private validateIfElementIsArc(selectedElements: Element[]): boolean {
        if(selectedElements[0].getAttribute('class').includes('arc') || selectedElements[1].getAttribute('class').includes('arc')) {
            this.snackBar.open(
                "Cannot connect two elements of same type!", 
                "Got it!", 
                { panelClass: ['error'] }
            );
            return false;
        } 
        return true;
    }
}