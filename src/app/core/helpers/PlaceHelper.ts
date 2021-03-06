import { PLACE_RADIUS, PLACE_FILL_COLOR } from './../../app/shared/constants';
import * as $ from 'jquery';

export class PlaceHelper {

    static getAll(): HTMLCollection {
        return document.getElementsByClassName('place');
    }

    static setDisabledCursor(): void {
        Array.from(this.getAll()).forEach((place) => {
            $(place).off('click');
            place.setAttribute('style', 'cursor: not-allowed');
        });
    }

    static setPointerCursor(): void {
        Array.from(this.getAll()).forEach((place) => {
            $(place).off('click');
            place.setAttribute('style', 'cursor: pointer');
          });
    }

    static createPlace(id: number, xPosition: number, yPosition: number, prefix: string = '',
                       color: string = PLACE_FILL_COLOR, includeIDNumber: boolean = false): Element {
        const place = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        if (includeIDNumber) {
            place.setAttribute('id', `${prefix}place-${id}`);
        } else {
            place.setAttribute('id', `${prefix}place`);
        }
        place.setAttribute('class', 'net-element place');
        place.setAttribute('cx', xPosition.toString());
        place.setAttribute('cy', yPosition.toString());
        place.setAttribute('r', PLACE_RADIUS.toString());
        place.setAttribute('stroke', 'black');
        place.setAttribute('stroke-width', '2');
        place.setAttribute('fill', color);
        place.setAttribute('style', 'cursor: pointer');
        return place;
    }

    static createLabel(id: number, xPosition: number, yPosition: number, prefix: string = '', changeLabel: string = ''): Element {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'label');
        text.setAttribute('id', `${prefix}label-place-${id}`);
        text.setAttribute('x', xPosition.toString());
        text.setAttribute('y', (yPosition - 17).toString());
        text.setAttribute('fill', 'black');
        text.setAttribute('dy', '.3em');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '14px');
        text.setAttribute('style', 'cursor: pointer');
        if (changeLabel !== '') {
            text.innerHTML = changeLabel;
        } else {
            text.innerHTML = 'p' + id;
        }
        return text;
    }

    static createPlaceWtihLabel(
        id: number, xPosition: number, yPosition: number,
        prefix: string = '', color: string = PLACE_FILL_COLOR,
        changeLabel: string = '', includeIDNumber: boolean = true): void {
        const cursors = document.getElementById('cursors');
        const place = this.createPlace(id, xPosition, yPosition, prefix, color, includeIDNumber);
        const label = this.createLabel(id, xPosition, yPosition, prefix, changeLabel);
        const board = document.getElementById('svg-board');

        board.insertBefore(place, cursors);
        board.insertBefore(label, cursors);
        $(place).on('mousedown', (e) => {
            if (e.detail > 1){
                e.preventDefault();
            }
        });
    }

    static movePlaceWithLabel(place: Element, label: HTMLElement, xPosition: number, yPosition: number): void {
        const x = (xPosition - 200);
        const y = (yPosition - 15);
        place.setAttribute('cx', x.toString());
        place.setAttribute('cy', y.toString());

        label.setAttribute('x', x.toString());
        label.setAttribute('y', (y - 17).toString());
    }
}
