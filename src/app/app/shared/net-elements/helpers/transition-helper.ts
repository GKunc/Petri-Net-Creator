import { BoardHelper } from './board-helper';
import { transition_width, transition_height } from '../../constants';

export class TransitionHelper {

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

        BoardHelper.getBoard().append(transition);
        BoardHelper.getBoard().append(text);
        BoardHelper.removeSelectionOfLabel(transition);
    }

    static moveTransitionWithLabel(transition: HTMLElement, label: HTMLElement, x_position: number, y_position: number): void {
        transition.setAttribute('x', (x_position - 235).toString());
        transition.setAttribute('y', (y_position - 35).toString());

        label.setAttribute('x', (x_position - 200).toString());
        label.setAttribute('y', (y_position - 25).toString());
    }
}