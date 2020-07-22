import { transition_width, transition_height } from './../../app/shared/constants';
import { INetElement } from './INetElement';
export class Transition implements INetElement {
    id: number;
    x_position: number;
    y_position: number;
    is_selected: boolean;
    color: string = "white";

    constructor(id: number, x_position: number, y_position: number) {
        this.id = id;
        this.x_position = x_position;
        this.y_position = y_position;
        this.is_selected = false;
    }

    draw(): void {
        let transition = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    
        transition.setAttribute("id", "transition-" + this.id);
        transition.setAttribute("class", "net-element transition");
        transition.setAttribute("x", this.x_position.toString());
        transition.setAttribute("y", this.y_position.toString());
        transition.setAttribute("width", transition_width.toString());
        transition.setAttribute("height", transition_height.toString());
    
        document.getElementById("svg-board").append(transition);
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