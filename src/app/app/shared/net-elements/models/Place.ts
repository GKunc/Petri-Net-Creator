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
        let place = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        place.setAttribute("id", "place-" + this.id);
        place.setAttribute("class", "net-element place");
        place.setAttribute("cx", this.x_position.toString());
        place.setAttribute("cy", this.y_position.toString());
        place.setAttribute("r", place_radius.toString());
        place.setAttribute("stroke", "black");
        place.setAttribute("fill", this.color);
        place.setAttribute("style", "cursor: pointer");

        document.getElementById("svg-board").append(place);

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

    // probably should move to upper class and use this method
    delete(event): void {
        let place = document.getElementById(this.getDomID());
        let board = document.getElementById('svg-board');

        if((event.which === 8 || event.which === 100) && this.is_selected) {
            board.removeChild(place);
        }
    }
    
    move(): void {
        let place = document.getElementById(this.getDomID());
        let board = document.getElementById('svg-board');
        
        $(place).off('mousedown');
        $(place).on('mousedown', () => {
            place.classList.add('active');
            $(board).on('mousemove', (event) => {
                place.setAttribute('cx', (event.pageX - 200).toString());
                place.setAttribute('cy', (event.pageY - 15).toString());
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
        // this.connect();
    }

    private getDomID(): string {
        return place_id_prefix + this.id;
    }
}