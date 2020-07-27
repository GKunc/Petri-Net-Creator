import { INetElement } from './INetElement';

export class Arc implements INetElement {
    id: string;
    color: string = "black";

    constructor(start_id: number, end_id: number) {
        this.id = start_id + '-' + end_id;
    }

    getID(): string {
        return this.id;
    }

    create(start_x: number, start_y: number, end_x: number, end_y: number): void {
        let arc = document.createElementNS("http://www.w3.org/2000/svg", "line");

        arc.setAttribute("id", "arc-" + this.id);
        arc.setAttribute("class", "net-element arc");
        arc.setAttribute("x1", start_x.toString());
        arc.setAttribute("y1", start_y.toString());
        arc.setAttribute("x2", end_x.toString());
        arc.setAttribute("y2", end_y.toString());
        arc.setAttribute("stroke", "black");
        arc.setAttribute("marker-end", "url(#arrow)");
        document.getElementById("svg-board").append(arc);
    }

    private getElementCoordinates(): [number, number] {

        return [10, 10];
    }

    move(): void {
        throw new Error("Method not implemented.");
    }

    select(): void {
        throw new Error("Method not implemented.");
    }

    unselect(): void {
        throw new Error("Method not implemented.");
    }
}