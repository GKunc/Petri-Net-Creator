import * as $ from 'jquery';
import { TRANSITION_HEIGHT, TRANSITION_WIDTH } from './../../app/shared/constants';

export class TransitionHelper {

    static getAll(): HTMLCollection {
        return document.getElementsByClassName('transition');
    }

    static setPointerCursor(): void {
        Array.from(this.getAll()).forEach((transition) => {
            transition.setAttribute('style', 'cursor: pointer');
        });
    }

    static setDisabledCursor(): void {
        Array.from(this.getAll()).forEach((transition) => {
            $(transition).off('dblclick');
            transition.setAttribute('style', 'cursor: not-allowed');
        });
    }

    static createTransitionWithLabel(id: number, x_position: number, y_position: number): void {
        const transition = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const cursors = document.getElementById('cursors');

        transition.setAttribute('id', 'transition-' + id);
        transition.setAttribute('class', 'net-element transition');
        transition.setAttribute('x', x_position.toString());
        transition.setAttribute('y', y_position.toString());
        transition.setAttribute('width', TRANSITION_WIDTH.toString());
        transition.setAttribute('height', TRANSITION_HEIGHT.toString());
        transition.setAttribute('stroke', 'black');
        transition.setAttribute('stroke-width', '2');
        transition.setAttribute('fill', 'white');
        transition.setAttribute('style', 'cursor: pointer');

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('id', 'label-transition-' + id);
        text.setAttribute('x', (x_position + 35).toString());
        text.setAttribute('y', (y_position + 10).toString());
        text.setAttribute('fill', 'black');
        text.setAttribute('dy', '.3em');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '20px');
        text.setAttribute('style', 'cursor: pointer');
        text.innerHTML = 't' + id;

        const board = document.getElementById('svg-board');
        board.insertBefore(transition, cursors);
        board.insertBefore(text, cursors);
        transition.addEventListener('mousedown', (e) => {
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
        const domID = 'transition-' + id;
        const domElement = document.getElementById(domID);
        return [Number(domElement.getAttribute('x')), Number(domElement.getAttribute('y'))];
    }
}
