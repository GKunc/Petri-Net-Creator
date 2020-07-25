import { place_radius, place_fill_color } from './../../app/shared/constants';
import { BoardHelper } from './BoardHelper';

export class PlaceHelper {
    
    static createPlaceWtihLabel(id: number, x_position: number, y_position: number): void {
        let place = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        place.setAttribute("id", "place-" + id);
        place.setAttribute("class", "net-element place");
        place.setAttribute("cx", x_position.toString());
        place.setAttribute("cy", y_position.toString());
        place.setAttribute("r", place_radius.toString());
        place.setAttribute("stroke", "black");
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
        text.innerHTML = 'p' + id;

        BoardHelper.getBoard().append(place);
        BoardHelper.getBoard().append(text);
        BoardHelper.removeSelectionOfLabel(place);
    }

    static movePlaceWithLabel(place: HTMLElement, label: HTMLElement, x_position: number, y_position: number): void {
        place.setAttribute('cx', (x_position - 200).toString());
        place.setAttribute('cy', (y_position - 15).toString());

        label.setAttribute('x', (x_position - 200).toString());
        label.setAttribute('y', (y_position - 15).toString());
    }
}