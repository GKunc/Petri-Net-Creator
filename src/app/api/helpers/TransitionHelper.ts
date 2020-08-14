import * as $ from 'jquery';
import { TRANSITION_HEIGHT, TRANSITION_WIDTH } from './../../app/shared/constants';

export class TransitionHelper {

    static getAll(): HTMLCollection {
        return document.getElementsByClassName('transition');
    }

    static setPointerCursor(): void {
        Array.from(this.getAll()).forEach((transition) => {
            $(transition).off('click');
            transition.setAttribute('style', 'cursor: pointer');
        });
    }

    static setDisabledCursor(): void {
        Array.from(this.getAll()).forEach((transition) => {
            $(transition).off('click');
            transition.setAttribute('style', 'cursor: not-allowed');
        });
    }

    static createTransitionWithLabel(id: number, xPosition: number, yPosition: number): void {
        const transition = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const cursors = document.getElementById('cursors');

        transition.setAttribute('id', 'transition-' + id);
        transition.setAttribute('class', 'net-element transition');
        transition.setAttribute('x', xPosition.toString());
        transition.setAttribute('y', yPosition.toString());
        transition.setAttribute('width', TRANSITION_WIDTH.toString());
        transition.setAttribute('height', TRANSITION_HEIGHT.toString());
        transition.setAttribute('stroke', 'black');
        transition.setAttribute('stroke-width', '2');
        transition.setAttribute('fill', 'white');
        transition.setAttribute('style', 'cursor: pointer');

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('id', 'label-transition-' + id);
        text.setAttribute('x', (xPosition + 35).toString());
        text.setAttribute('y', (yPosition + 10).toString());
        text.setAttribute('fill', 'black');
        text.setAttribute('dy', '.3em');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '14px');
        text.setAttribute('style', 'cursor: pointer');
        text.innerHTML = 't' + id;

        const board = document.getElementById('svg-board');
        board.insertBefore(transition, cursors);
        board.insertBefore(text, cursors);
        $(transition).on('mousedown', (e) => {
            if (e.detail > 1){
                e.preventDefault();
            }
        });
    }

    static moveTransitionWithLabel(transition: Element, label: HTMLElement, xPosition: number, yPosition: number): void {
        transition.setAttribute('x', (xPosition - 235).toString());
        transition.setAttribute('y', (yPosition - 35).toString());

        label.setAttribute('x', (xPosition - 200).toString());
        label.setAttribute('y', (yPosition - 25).toString());
    }

    static getPlaceTransitionByID(id: number): [number, number] {
        const domID = 'transition-' + id;
        const domElement = document.getElementById(domID);
        return [Number(domElement.getAttribute('x')), Number(domElement.getAttribute('y'))];
    }
}
