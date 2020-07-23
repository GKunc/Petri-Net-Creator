import { transition_width, transition_height } from './../../constants';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const transition_id_prefix = 'transition-';

export class Transition implements INetElement {
    id: number;
    x_position: number;
    y_position: number;
    is_selected: boolean;
    color: string = "white";

    constructor(id: number, x_position: number, y_position: number) {
        this.id = id;
        this.x_position = x_position;
        this.y_position = y_position;
        this.is_selected = false;
    }

    create(): void {
        let transition = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        let board = document.getElementById("svg-board");

        transition.setAttribute("id", "transition-" + this.id);
        transition.setAttribute("class", "net-element transition");
        transition.setAttribute("x", this.x_position.toString());
        transition.setAttribute("y", this.y_position.toString());
        transition.setAttribute("width", transition_width.toString());
        transition.setAttribute("height", transition_height.toString());
        transition.setAttribute("style", "cursor: pointer");

        board.append(transition);

        this.attachListeners();

    }

    selectedElementEvents() {
        let transition = document.getElementById(this.getDomID());
        let board = document.getElementById('svg-board');

        transition.addEventListener('dblclick', () => {
            $(document).off('keypress');
            $(document).on('keypress', (event) => {
                this.delete(event);
            });

            if(transition.classList.contains('selected')) {
                this.unselect(transition);
            } else {
                this.select(transition);
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
        console.log('delete')
        let transition = document.getElementById(this.getDomID());
        let board = document.getElementById('svg-board');
        if((event.which === 8 || event.which === 100) && this.is_selected) {
            board.removeChild(transition);
        }
    }

    move(): void {
        let transition = document.getElementById(this.getDomID());
        let board = document.getElementById('svg-board');
        
        $(transition).off('mousedown');
        transition.addEventListener('mousedown', () => {
            transition.classList.add('active');
            $(board).on('mousemove', (event) => {
                transition.setAttribute('x', (event.pageX - 235).toString());
                transition.setAttribute('y', (event.pageY - 35).toString());
            });

            $(board).on('mouseup', () => {
                $(board).off('mousemove');
                transition.classList.remove('active');
            });
        });    
    }

    private attachListeners(): void {
        this.selectedElementEvents();
        this.move();
        // this.connect();
    }

    private getDomID(): string {
        return transition_id_prefix + this.id;
    }

}