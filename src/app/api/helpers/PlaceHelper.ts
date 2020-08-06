import { place_radius, place_fill_color } from './../../app/shared/constants';
import * as $ from 'jquery';

export class PlaceHelper {
    
    static getAll(): HTMLCollection {
        return document.getElementsByClassName('place');
    }

    static setDisabledCursor(): void {
        Array.from(this.getAll()).forEach((place) => {
            $(place).off('dblclick');
            place.setAttribute("style", "cursor: not-allowed");
        });
    }

    static setPointerCursor(): void {
        Array.from(this.getAll()).forEach((place) => {
            place.setAttribute("style", "cursor: pointer");
          });
    }

    static createPlaceWtihLabel(id: number, x_position: number, y_position: number): void {
        let place = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let cursors = document.getElementById('cursors');
        
        place.setAttribute("id", "place-" + id);
        place.setAttribute("class", "net-element place");
        place.setAttribute("cx", x_position.toString());
        place.setAttribute("cy", y_position.toString());
        place.setAttribute("r", place_radius.toString());
        place.setAttribute("stroke", "black");
        place.setAttribute("stroke-width", '2');
        place.setAttribute("fill", place_fill_color);
        place.setAttribute("style", "cursor: pointer");
        
        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("id", "label-place-" + id);
        text.setAttribute("x", x_position.toString());
        text.setAttribute("y", y_position.toString());
        text.setAttribute("fill", "black");
        text.setAttribute("dy", ".3em");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "20px");
        text.setAttribute("style", "cursor: pointer");

        text.innerHTML = 'p' + id;

        let board = document.getElementById('svg-board');
        board.insertBefore(place, cursors);
        board.insertBefore(text, cursors);
        place.addEventListener('mousedown', function(e){
            if (e.detail > 1){
                e.preventDefault();
            }
        });
   }

    static movePlaceWithLabel(place: Element, label: HTMLElement, x_position: number, y_position: number): void {
        const x = (x_position - 200);
        const y = (y_position - 15);
        place.setAttribute('cx', x.toString());
        place.setAttribute('cy', y.toString());

        label.setAttribute('x', x.toString());
        label.setAttribute('y', y.toString());
    }

    static getPlacePositionByID(id: number): [number, number] {
        let domID = "place-" + id;
        let domElement = document.getElementById(domID);
        return [parseInt(domElement.getAttribute('cx')), parseInt(domElement.getAttribute('cy'))];
    }
}