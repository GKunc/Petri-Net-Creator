import { INetElement } from './INetElement';
export class Arc implements INetElement {
    start_id: number;
    end_id: number;
    color: string = "black";

    constructor(start_id: number, end_id: number) {
        this.start_id = start_id;
        this.end_id = end_id;
    }

    draw(): void {
        let arc = document.createElementNS("http://www.w3.org/2000/svg", "line");
        let id = this.start_id + '-' + this.end_id;

        // zmienic to !!!
        const x1 = 0;
        const x2 = 100;
        const y1 = 0;
        const y2 = 100;
        //
        arc.setAttribute("id", "arc-" + id);
        arc.setAttribute("class", "net-element arc");
        arc.setAttribute("x1", x1.toString());
        arc.setAttribute("y1", y1.toString());
        arc.setAttribute("x2", x2.toString());
        arc.setAttribute("y2", y2.toString());
        arc.setAttribute("stroke", "black");
        arc.setAttribute("marker-end", "url(#arrow)");
        document.getElementById("svg-board").append(arc);
    }

    private getElementCoordinates(): [number, number] {

        return [10, 10];
    }

    delete(): void {
        throw new Error("Method not implemented.");
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