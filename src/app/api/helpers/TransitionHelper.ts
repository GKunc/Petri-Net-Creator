import { transition_width, transition_height } from './../../app/shared/constants';
import * as $ from 'jquery';

export class TransitionHelper {

    static getAll(): HTMLCollection {
        return document.getElementsByClassName('transition');
    }

    static setPointerCursor(): void {
        Array.from(this.getAll()).forEach((transition) => {
            transition.setAttribute("style", "cursor: pointer");
        });
    }

    static setDisabledCursor(): void {
        Array.from(this.getAll()).forEach((transition) => {
            $(transition).off('dblclick');
            transition.setAttribute("style", "cursor: not-allowed");
        });
    }

    static createTransitionWithLabel(id: number, x_position: number, y_position: number): void {
        let transition = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        transition.setAttribute("id", "transition-" + id);
        transition.setAttribute("class", "net-element transition");
        transition.setAttribute("x", x_position.toString());
        transition.setAttribute("y", y_position.toString());
        transition.setAttribute("width", transition_width.toString());
        transition.setAttribute("height", transition_height.toString());
        transition.setAttribute("stroke", 'black');
        transition.setAttribute("stroke-width", '2');
        transition.setAttribute("fill", 'white');
        transition.setAttribute("style", "cursor: pointer");
        
        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("id", "label-transition-" + id);
        text.setAttribute("x", (x_position + 35).toString());
        text.setAttribute("y", (y_position + 10).toString());
        text.setAttribute("fill", "black");
        text.setAttribute("dy", ".3em");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "20px");
        text.setAttribute("style", "cursor: pointer");
        text.innerHTML = 't' + id;

        let board = document.getElementById('svg-board');
        board.append(transition);
        board.append(text);
        transition.addEventListener('mousedown', function(e){
            if (e.detail > 1){
                e.preventDefault();
            }
        });    
    }

    static moveTransitionWithLabel(transition: Element, label: HTMLElement, x_position: number, y_position: number): void {
        transition.setAttribute('x', (x_position - 235).toString());
        transition.setAttribute('y', (y_position - 35).toString());

        label.setAttribute('x', (x_position - 200).toString());
        label.setAttribute('y', (y_position - 25).toString());
    }

    static getPlaceTransitionByID(id: number): [number, number] {
        let domID = "transition-" + id;
        let domElement = document.getElementById(domID);
        return [parseInt(domElement.getAttribute('x')), parseInt(domElement.getAttribute('y'))];
    }
}