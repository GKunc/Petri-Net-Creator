import { TransitionHelper } from '../helpers/TransitionHelper';
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

    getID(): number {
        return this.id;
    }
    
    create(): void {
        TransitionHelper.createTransitionWithLabel(this.id, this.x_position, this.y_position);
        this.attachListeners();
    }

    selectedElementEvents() {
        let transition = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());

        $(transition).off('dblclick');
        $(transition).on('dblclick', () => {
            if(transition.classList.contains('selected')) {
                this.unselect(transition, label);
            } else {
                this.select(transition, label);
            }
        });      
    }

    select(transition: HTMLElement, label: HTMLElement): void {
        transition.classList.add('selected');
        label.classList.add('selected');
        transition.setAttribute('stroke', 'red');
        this.is_selected = true;
    }

    unselect(transition: HTMLElement, label: HTMLElement): void {
        transition.classList.remove('selected');
        label.classList.remove('selected');
        transition.setAttribute('stroke', 'black');
        this.is_selected = false;
    }

    move(): void {
        let transition = document.getElementById(this.getDomID());
        let label = document.getElementById('label-' + this.getDomID());
        let board = document.getElementById('svg-board');
        
        $(transition).off('mousedown');
        transition.addEventListener('mousedown', () => {
            transition.classList.add('active');
            $(board).on('mousemove', (event) => {
                TransitionHelper.moveTransitionWithLabel(transition, label, event.pageX, event.pageY);
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