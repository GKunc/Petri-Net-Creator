import * as $ from 'jquery';
import { ArcHelper } from './../helpers/ArcHelper';
import { BoardHelper } from './../helpers/BoardHelper';
import { INetElement } from './INetElement';

const ARC_PREFIX = 'arc-';

export class Arc implements INetElement {
    id: string;
    color = 'black';

    constructor() {
        this.id = '';
            // document.getElementById(BoardHelper.selectedElements[0]).getAttribute('id') +
            // ':' +
            // document.getElementById(BoardHelper.selectedElements[1]).getAttribute('id');
    }

    getID(): string {
        return this.id;
    }

    createNew(ID: string): void {
        this.id = ID + ':';
        const startElement = document.getElementById(ID);
        let xPosition;
        let yPosition;
        console.log(ID);
        if (ID.includes('place')) {
            xPosition = startElement.getAttribute('cx');
            yPosition = Number(startElement.getAttribute('cy')) + 25;
        }
        else if (ID.includes('transition')) {
            xPosition = startElement.getAttribute('x');
            yPosition = startElement.getAttribute('y');
        }

        const arc = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const cursors = document.getElementById('cursors');

        arc.setAttribute('id', this.id);
        arc.setAttribute('class', 'net-element arc');
        arc.setAttribute('x1', xPosition);
        arc.setAttribute('y1', yPosition);
        arc.setAttribute('x2', xPosition);
        arc.setAttribute('y2', yPosition);
        arc.setAttribute('stroke', 'black');
        arc.setAttribute('stroke-width', '1');
        arc.setAttribute('marker-end', 'url(#arrow)');
        document.getElementById('svg-board').insertBefore(arc, cursors);
    }

    create(): void {
        let [startX, startY] = ArcHelper.getCoorinatesOfElement(BoardHelper.selectedElements[0]);
        let [endX, endY] = ArcHelper.getCoorinatesOfElement(BoardHelper.selectedElements[1]);

        [startX, startY, endX, endY] =
        ArcHelper.connectToNearestEnd(
                                    BoardHelper.selectedElements[0], startX, startY,
                                     endX, endY);

        const arc = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const cursors = document.getElementById('cursors');

        arc.setAttribute('id', this.id);
        arc.setAttribute('class', 'net-element arc');
        arc.setAttribute('x1', startX.toString());
        arc.setAttribute('y1', startY.toString());
        arc.setAttribute('x2', endX.toString());
        arc.setAttribute('y2', endY.toString());
        arc.setAttribute('stroke', 'black');
        arc.setAttribute('stroke-width', '1');
        arc.setAttribute('marker-end', 'url(#arrow)');
        document.getElementById('svg-board').insertBefore(arc, cursors);

        this.selectedElementEvents();
    }

    selectedElementEvents(): void {
        const arc = document.getElementById(this.getDomID());
        $(arc).off('dblclick');
        $(arc).on('dblclick', () => {
            if (arc.classList.contains('selected')) {
                this.unselect(arc);
            } else {
                this.select(arc);
            }
        });
    }

    select(arc: HTMLElement): void {
        arc.classList.add('selected');
        arc.setAttribute('stroke', 'red');
        BoardHelper.selectedElements.push(arc.getAttribute('id'));
    }

    unselect(arc: HTMLElement): void {
        arc.classList.remove('selected');
        arc.setAttribute('stroke', 'black');
        BoardHelper.removeSelectedElementFromListByID(arc.getAttribute('id'));
    }

    private getDomID(): string {
        return ARC_PREFIX + this.id;
    }
}
