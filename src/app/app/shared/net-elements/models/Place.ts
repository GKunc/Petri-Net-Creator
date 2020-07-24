import { HtmlElements } from './../helpers/html-elements';
import { place_radius } from './../../constants';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const place_id_prefix = 'place-';

export class Place implements INetElement {
    id: number;
    x_position: number;
    y_position: number;
    color: string = 'white';
    is_selected: boolean;

    constructor(id: number, x_position: number, y_position: number) {
        this.id = id;
        this.x_position = x_position;
        this.y_position = y_position;
        this.is_selected = false;
    }   

    create(): void {
        HtmlElements.createPlaceWtihLabel(this.id, this.x_position, this.y_position);

        this.attachListeners();
    }

    selectedElementEvents() {
        let place = document.getElementById(this.getDomID());
        $(place).off('dblclick');
        $(place).on('dblclick', () => {
            if(place.classList.contains('selected')) {
                this.unselect(place);
            } else {
                this.select(place);
            }
        });      
    }

    select(place: HTMLElement): void {
        place.classList.add('selected');
        place.setAttribute('stroke', 'red');
        this.is_selected = true;
    }

    unselect(place: HTMLElement): void {
        place.classList.remove('selected');
        place.setAttribute('stroke', 'black');
        this.is_selected = false;
    }
    
    move(): void {
        let place = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());
        let board = document.getElementById('svg-board');
        
        $(place).off('mousedown');
        $(place).on('mousedown', () => {
            place.classList.add('active');
            $(board).on('mousemove', (event) => {
                HtmlElements.movePlaceWithLabel(place, label, event.pageX, event.pageY);
            });

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