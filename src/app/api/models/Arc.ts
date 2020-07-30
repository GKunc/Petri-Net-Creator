import { ArcHelper } from './../helpers/ArcHelper';
import { BoardHelper } from './../helpers/BoardHelper';
import { INetElement } from './INetElement';
import * as $ from 'jquery';

const arc_id_prefix = 'arc-';

export class Arc implements INetElement {
    id: string;
    color: string = "black";

    constructor() {
        this.id = 
            document.getElementById(BoardHelper.selectedElements[0]).getAttribute('id') + 
            '-' + 
            document.getElementById(BoardHelper.selectedElements[1]).getAttribute('id');
    }

    getID(): string {
        return this.id;
    }

    create(): void {
        let [start_x, start_y] = ArcHelper.getCoorinatesOfElement(BoardHelper.selectedElements[0]);
        let [end_x, end_y] = ArcHelper.getCoorinatesOfElement(BoardHelper.selectedElements[1]);
        
        [start_x, start_y, end_x, end_y] = 
        ArcHelper.connectToNearestEnd(
                                    BoardHelper.selectedElements[0], start_x, start_y,
                                     end_x, end_y);

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

        this.selectedElementEvents();
    }

    move(): void {
        throw new Error("Method not implemented.");
    }

    selectedElementEvents() {
        let arc = document.getElementById(this.getDomID());
        $(arc).off('dblclick');
        $(arc).on('dblclick', () => {
            if(arc.classList.contains('selected')) {
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
        return arc_id_prefix + this.id;
    }
}