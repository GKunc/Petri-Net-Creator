import { place_radius, place_fill_color, transition_width, transition_height } from './../../constants';
export class HtmlElements {
    static getSelectedElements(): HTMLCollection {
        return document.getElementsByClassName('selected');
    }

    static getBoard(): HTMLElement {
        return document.getElementById('svg-board');
    }

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

        this.getBoard().append(place);
        this.getBoard().append(text);

        this.removeSelectionOfLabel(place);
    }

    static movePlaceWithLabel(place: HTMLElement, label: HTMLElement, x_position: number, y_position: number): void {
        place.setAttribute('cx', (x_position - 200).toString());
        place.setAttribute('cy', (y_position - 15).toString());

        label.setAttribute('x', (x_position - 200).toString());
        label.setAttribute('y', (y_position - 15).toString());
    }

    static createTransitionWithLabel(id: number, x_position: number, y_position: number): void {
        let transition = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        transition.setAttribute("id", "transition-" + id);
        transition.setAttribute("class", "net-element transition");
        transition.setAttribute("x", x_position.toString());
        transition.setAttribute("y", y_position.toString());
        transition.setAttribute("width", transition_width.toString());
        transition.setAttribute("height", transition_height.toString());
        transition.setAttribute("style", "cursor: pointer");
        
        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("id", "label-transition-" + id);
        text.setAttribute("x", (x_position + 35).toString());
        text.setAttribute("y", (y_position + 10).toString());
        text.setAttribute("fill", "white");
        text.setAttribute("dy", ".3em");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "20px");
        text.innerHTML = 't' + id;

        this.getBoard().append(transition);
        this.getBoard().append(text);

        this.removeSelectionOfLabel(transition);
    }

    static moveTransitionWithLabel(transition: HTMLElement, label: HTMLElement, x_position: number, y_position: number): void {
        transition.setAttribute('x', (x_position - 235).toString());
        transition.setAttribute('y', (y_position - 35).toString());

        label.setAttribute('x', (x_position - 200).toString());
        label.setAttribute('y', (y_position - 25).toString());
    }

    static removeSelectionOfLabel(element: SVGElement): void {
        element.addEventListener('mousedown', function(e){
            if (e.detail > 1){
                e.preventDefault();
            }
        });
    }
}