import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Arc } from './../models/Arc';

@Injectable({
    providedIn: 'root'
})
export class ArcRepository {

    constructor(private snackBar: MatSnackBar) {}

    create(ID: string): void {
        const arc = new Arc(); // id of start and end element
        arc.create(ID);
    }
}
