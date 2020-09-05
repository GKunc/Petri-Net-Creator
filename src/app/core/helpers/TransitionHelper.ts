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

    static createTransition(id: number, xPosition: number, yPosition: number): Element {
        const transition = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
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
        return transition;
    }

    static createLabel(id: number, xPosition: number, yPosition: number): Element {
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('class', 'label');
        label.setAttribute('id', 'label-transition-' + id);
        label.setAttribute('x', (xPosition + 35).toString());
        label.setAttribute('y', (yPosition + 10).toString());
        label.setAttribute('fill', 'black');
        label.setAttribute('dy', '.3em');
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('font-size', '14px');
        label.setAttribute('style', 'cursor: pointer');
        label.innerHTML = 't' + id;
        return label;
    }

    static createTransitionWithLabel(id: number, xPosition: number, yPosition: number): void {
        const cursors = document.getElementById('cursors');
        const transition = this.createTransition(id, xPosition, yPosition);
        const label = this.createLabel(id, xPosition, yPosition);

        const board = document.getElementById('svg-board');
        board.insertBefore(transition, cursors);
        board.insertBefore(label, cursors);
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

    static runTransition(): void {
        const transition =  $('.transition');
        transition.off('dblclick');
        transition.on('dblclick', () => {
            alert('run');
        });
    }
}
