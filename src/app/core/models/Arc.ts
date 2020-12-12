import { INetElement } from './INetElement';

export class Arc implements INetElement {
    private id: string;
    color = 'black';

    constructor() {
        this.id = '';
    }

    getID(): string {
        return this.id;
    }

    create(ID: string): void {
        this.id = ID + ':';
        const startElement = document.getElementById(ID);
        let xPosition;
        let yPosition;
        if (ID.includes('place')) {
            xPosition = startElement.getAttribute('cx');
            yPosition = startElement.getAttribute('cy');
        }
        else if (ID.includes('transition')) {
            xPosition = Number(startElement.getAttribute('x')) + 35;
            yPosition = Number(startElement.getAttribute('y')) + 10;
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
        document.getElementById('svg-board').insertBefore(arc, startElement);
    }
}
