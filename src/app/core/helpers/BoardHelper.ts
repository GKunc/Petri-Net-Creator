import { TokenHelper } from './TokenHelper';
import { TransitionHelper } from './TransitionHelper';
import { ArcHelper } from './ArcHelper';
import { PlaceHelper } from './PlaceHelper';
import * as $ from 'jquery';

export class BoardHelper {
    static selectedElements: string[] = [];

    static getAll(): HTMLCollection {
        return document.getElementsByClassName('net-element');
    }

    static getPositionOfElement(netElement: Element): [number, number] {
        if (netElement.classList.contains('place') || netElement.classList.contains('token')) {
            return [Number(netElement.getAttribute('cx')), Number(netElement.getAttribute('cy'))];
        }
        else if (netElement.classList.contains('transition') || netElement.classList.contains('label')) {
            return [Number(netElement.getAttribute('x')), Number(netElement.getAttribute('y'))];
        } else if (netElement.classList.contains('arc')) {
            return [-1, -1];
        }
    }

    static getBoard(): HTMLElement {
        return document.getElementById('svg-board');
    }

    static getCursorSvgElement(): HTMLElement {
        return document.getElementById('cursors');
    }

    static addArrowHeadMarker(): void {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');

        marker.setAttribute('id', 'arrow');
        marker.setAttribute('viewBox', '0 0 10 10');
        marker.setAttribute('refX', '1');
        marker.setAttribute('refY', '5');
        marker.setAttribute('markerWidth', '10');
        marker.setAttribute('markerHeight', '10');
        marker.setAttribute('orient', 'auto');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
        path.setAttribute('fill', 'black;');

        marker.appendChild(path);
        defs.appendChild(marker);
        this.getBoard().insertBefore(defs, this.getCursorSvgElement());
    }

    static moveElementEvent(): void {
        Array.from(this.getAll()).forEach((netElement) => {
            $(netElement).off('mousedown');
            $(netElement).on('mousedown', () => {
                const elementID = netElement.getAttribute('id');
                const label = document.getElementById('label-' + elementID);
                netElement.classList.add('active');
                $(this.getBoard()).off('mousemove');
                $(this.getBoard()).on('mousemove', (event) => {
                    if (netElement.classList.contains('place')) {
                        PlaceHelper.movePlaceWithLabel(netElement, label, event.pageX, event.pageY);
                        const token = document.getElementById('token-' + elementID);
                        if (token !== null && token !== undefined) {
                            TokenHelper.moveToken(token, event.pageX, event.pageY);
                        }
                    }
                    else if (netElement.classList.contains('transition')) {
                        TransitionHelper.moveTransitionWithLabel(netElement, label, event.pageX, event.pageY);
                    }
                    ArcHelper.moveArrowWithElement(elementID);
                });

                $(this.getBoard()).off('mouseup');
                $(this.getBoard()).on('mouseup', () => {
                    $(this.getBoard()).off('mousemove');
                    netElement.classList.remove('active');
                });
            });
        });
    }
}
