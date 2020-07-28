import { BoardHelper } from './../helpers/BoardHelper';
import { PlaceHelper } from '../helpers/PlaceHelper';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const place_id_prefix = 'place-';

export class Place implements INetElement {
    id: number;
    color: string = 'white';

    constructor(id: number) {
        this.id = id;
    }   

    getID(): number {
        return this.id;
    }

    create(): void {
        PlaceHelper.createPlaceWtihLabel(this.id, 100, 100);
        this.attachListeners();
    }

    selectedElementEvents() {
        let place = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());
        $(place).off('dblclick');
        $(place).on('dblclick', () => {
            if(place.classList.contains('selected')) {
                this.unselect(place, label);
            } else {
                this.select(place, label);
            }
        });      
    }

    select(place: HTMLElement, label: HTMLElement): void {
        place.classList.add('selected');
        label.classList.add('selected');
        place.setAttribute('stroke', 'red');
        BoardHelper.selectedElements.push(place.getAttribute('id'));
    }

    unselect(place: HTMLElement, label: HTMLElement): void {
        place.classList.remove('selected');
        label.classList.remove('selected');
        place.setAttribute('stroke', 'black');
        BoardHelper.removeSelectedElementFromListByID(place.getAttribute('id'));
    }
    
    move(): void {
        let place = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());
        let board = document.getElementById('svg-board');
        
        $(place).off('mousedown');
        $(place).on('mousedown', () => {
            place.classList.add('active');

            $(board).off('mousemove');
            $(board).on('mousemove', (event) => {
                PlaceHelper.movePlaceWithLabel(place, label, event.pageX, event.pageY);
            });

            $(board).off('mouseup');
            $(board).on('mouseup', () => {
                $(board).off('mousemove');
                place.classList.remove('active');
            });
        });
    }

    // probably should move to upper class and use this method
    connect(): void {
        throw new Error("Method not implemented.");
    }

    private attachListeners(): void {
        this.selectedElementEvents();
        this.move();
    }

    private getDomID(): string {
        return place_id_prefix + this.id;
    }
}