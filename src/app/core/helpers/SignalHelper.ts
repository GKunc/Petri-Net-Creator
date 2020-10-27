import { BoardHelper } from './BoardHelper';
import * as $ from 'jquery';

export class SignalHelper {

    static createLabel(signalIDs: number[], xPosition: number, yPosition: number): Element {
        const signalLabel = (document.getElementById('label-signal-cursor') as Element);
        if (signalLabel !== null) {
          document.getElementById('svg-board').removeChild(signalLabel);
        }
        const cursors = document.getElementById('cursors');
        const board = document.getElementById('svg-board');
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'label');
        text.setAttribute('id', 'label-signal-cursor');
        text.setAttribute('x', (xPosition + 80).toString());
        text.setAttribute('y', (yPosition - 20).toString());
        text.setAttribute('fill', 'black');
        text.setAttribute('dy', '.3em');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '14px');
        text.setAttribute('style', 'cursor: pointer; font-weight: bold;');
        signalIDs.forEach(id => {
            if (signalIDs.findIndex(element => element === id) !== signalIDs.length - 1) {
                text.innerHTML += 'x' + id + ' &and; ';
            } else {
                text.innerHTML += 'x' + id;
            }
        });
        board.insertBefore(text, cursors);
        return text;
    }

    static moveLabelWithCursor(label: Element): void {
        $(BoardHelper.getBoard()).on('mousemove', (event) => {
            $(label).attr('x', event.pageX - 235);
            $(label).attr('y', event.pageY - 35);
        });
    }

    static createLabelForTransition(transitionNumber: number, signalIDs: number[], xPosition: number, yPosition: number): void {
        const cursors = document.getElementById('cursors');
        const board = document.getElementById('svg-board');
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'label');
        text.setAttribute('id', 'label-signal-' + transitionNumber);
        text.setAttribute('x', (xPosition + 80).toString());
        text.setAttribute('y', (yPosition - 20).toString());
        text.setAttribute('fill', 'black');
        text.setAttribute('dy', '.3em');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '14px');
        text.setAttribute('style', 'cursor: pointer; font-weight: bold;');
        signalIDs.forEach(id => {
            if (signalIDs.findIndex(element => element === id) !== signalIDs.length - 1) {
                text.innerHTML += 'x' + id + ' &and; ';
            } else {
                text.innerHTML += 'x' + id;
            }
        });
        board.insertBefore(text, cursors);
    }
}
