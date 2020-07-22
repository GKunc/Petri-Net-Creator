import { place_radius } from './../../app/shared/constants';
import { INetElement } from './INetElement';

export class Place implements INetElement {
    id: number;
    x_position: number;
    y_position: number;
    color: string = "white";

    constructor(id: number, x_position: number, y_position: number) {
        this.id = id;
        this.x_position = x_position;
        this.y_position = y_position;
    }

    draw(): void {
        let place = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        place.setAttribute("id", "place-" + this.id);
        place.setAttribute("class", "net-element place");
        place.setAttribute("cx", this.x_position.toString());
        place.setAttribute("cy", this.y_position.toString());
        place.setAttribute("r", place_radius.toString());
        place.setAttribute("stroke", "black");
        place.setAttribute("fill", this.color);

        document.getElementById("svg-board").append(place);
    }

    delete(): void {
        throw new Error("Method not implemented.");
    }
    move(): void {
        throw new Error("Method not implemented.");
    }
    connect(): void {
        throw new Error("Method not implemented.");
    }
    select(): void {
        throw new Error("Method not implemented.");
    }
    unselect(): void {
        throw new Error("Method not implemented.");
    }

}