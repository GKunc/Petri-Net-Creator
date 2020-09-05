import * as $ from 'jquery';

export class ArcHelper {
    static getAll(): HTMLCollectionOf<Element> {
        return document.getElementsByClassName('arc');
    }

    static attachArcToEndElement(startElement: Element, endElement: Element, arrow: Element): void {
        let [x1, y1] = ArcHelper.getCoorinatesOfElement(startElement.getAttribute('id'));
        let [x2, y2] = ArcHelper.getCoorinatesOfElement(endElement.getAttribute('id'));
        [x1, y1, x2, y2] = ArcHelper.connectToNearestEnd(startElement.getAttribute('id'), x1, y1, x2, y2);

        arrow.setAttribute('id', arrow.getAttribute('id') + endElement.getAttribute('id'));
        arrow.setAttribute('x2', x2.toString());
        arrow.setAttribute('y2', y2.toString());
    }

    static moveArrowWithCursor(ID: string, xPosition: number, yPosition: number): void {
        const arrow = document.getElementById(ID + ':');
        $(arrow).attr('x2', xPosition.toString());
        $(arrow).attr('y2', yPosition.toString());
    }

    static moveArrowWithElement(id: string): void {
        ArcHelper.getConnectedArrowsIDs(id).forEach(arrowID => {
            const [startID, endID] = this.getArrowStartAndEnd(arrowID);
            if (startID === null || endID === null) {
                return;
            }
            const [x1, y1] = this.getCoorinatesOfElement(startID);
            const [x2, y2] = this.getCoorinatesOfElement(endID);
            this.setArrowCoordinates(arrowID, this.connectToNearestEnd(startID, x1, y1, x2, y2));
        });
    }

    static setArrowCoordinates(arrowID: string, [x1, y1, x2, y2]: number[]): void {
        $(document.getElementById(arrowID)).attr('x1', x1);
        $(document.getElementById(arrowID)).attr('y1', y1);
        $(document.getElementById(arrowID)).attr('x2', x2);
        $(document.getElementById(arrowID)).attr('y2', y2);
    }

    static getConnectedArrowsIDs(id: string): string[] {
        const connectedElementsIDs = [];
        Array.from(this.getAll()).forEach(arrow => {
            const arrowID: string = arrow.getAttribute('id');
            const [startID, endID] = this.getArrowStartAndEnd(arrowID);
            if (startID === id || endID === id) {
                connectedElementsIDs.push(arrowID);
            }
        });
        return connectedElementsIDs;
    }

    static getArrowStartAndEnd(arrowID: string): [string, string] {
        return [arrowID.split(':')[0], arrowID.split(':')[1]];
    }

    static getCoorinatesOfElement(id: string): [number, number] {
        const netElement: Element = document.getElementById(id);
        if (netElement === null) {
            return;
        }
        if (netElement.getAttribute('id').includes('place')) {
            return this.getPlacePosition(netElement);
        } else {
            return this.getTransitionPosition(netElement);
        }
    }

    static getPlacePosition(place: Element): [number, number] {
        return [Number(place.getAttribute('cx')), Number(place.getAttribute('cy')) ];
    }

    static getTransitionPosition(transition: Element): [number, number] {
        return [Number(transition.getAttribute('x')), Number(transition.getAttribute('y')) ];
    }

    static  connectToNearestEnd(
        startID: string,
        startX: number, startY: number,
        endX: number, endY: number
    ): [number, number, number, number] {
        if (startID.includes('place')) {
            return this.adjustArrowPosition('place', startX, startY, endX, endY);
        } else if (startID.includes('transition')) {
            return this.adjustArrowPosition('transition', startX, startY, endX, endY);
        }
    }


    static adjustArrowPosition(
        startID: string, startX: number, startY: number,
        endX: number, endY: number
    ): [number, number, number, number] {

        if (startX - endX > -80 && startX - endX < 100) {
            if (startY - endY < 0) {
                if (startID === 'place') {
                    [startX, startY, endX, endY] =
                        this.adjustPlaceTop(startX, startY, endX, endY);
                } else {
                    [startX, startY, endX, endY] =
                        this.adjustTransitionTop(startX, startY, endX, endY);
                }
            }
            else {
                if (startID === 'place') {
                    [startX, startY, endX, endY] =
                        this.adjustPlaceBottom(startX, startY, endX, endY);
                } else {
                    [startX, startY, endX, endY] =
                        this.adjustTransitionBottom(startX, startY, endX, endY);
                }
            }
        }
        else if (startY - endY > -80 && startY - endY < 100) {
            if (startX - endX < 0) {
                if (startID === 'place') {
                    [startX, startY, endX, endY] =
                        this.adjustPlaceLeft(startX, startY, endX, endY);
                } else {
                    [startX, startY, endX, endY] =
                        this.adjustTransitionLeft(startX, startY, endX, endY);
                }
            }
            else {
                if (startID === 'place') {
                        [startX, startY, endX, endY] =
                        this.adjustPlaceRight(startX, startY, endX, endY);
                }else {
                    [startX, startY, endX, endY] =
                        this.adjustTransitionRight(startX, startY, endX, endY);
                }
            }
        }

        else if (startX - endX <= -80) {
            if (startY - endY < 50) {
                if (startID === 'place') {
                    [startX, startY, endX, endY] =
                        this.adjustPlaceTopLeft(startX, startY, endX, endY);
                } else {
                    [startX, startY, endX, endY] =
                        this.adjustTransitionTopLeft(startX, startY, endX, endY);
                }
            }
            else {
                if (startID === 'place') {
                    [startX, startY, endX, endY] =
                        this.adjustPlaceBottomLeft(startX, startY, endX, endY);
                } else {
                    [startX, startY, endX, endY] =
                        this.adjustTransitionBottomLeft(startX, startY, endX, endY);
                }
            }
        }

        else if (startX - endX >= 100) {
            if (startY - endY < 50) {
                if (startID === 'place') {
                    [startX, startY, endX, endY] =
                        this.adjustPlaceTopRight(startX, startY, endX, endY);
                } else {
                    [startX, startY, endX, endY] =
                        this.adjustTransitionTopRight(startX, startY, endX, endY);
                }

            }
            else {
                if (startID === 'place') {
                    [startX, startY, endX, endY] =
                        this.adjustPlaceBottomRight(startX, startY, endX, endY);
                } else {
                    [startX, startY, endX, endY] =
                        this.adjustTransitionBottomRight(startX, startY, endX, endY);
                }
            }
        }

        return [startX, startY, endX, endY];
    }

    ///////////////////////
    // Place Adjustments //
    ///////////////////////
    static adjustPlaceTop(startX, startY, endX, endY): [number, number, number, number] {
        return [startX, startY + 25, endX + 35, endY - 3];
    }

    static adjustPlaceTopLeft(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 25, startY, endX + 25, endY - 3];
    }

    static adjustPlaceTopRight(startX, startY, endX, endY): [number, number, number, number] {
        return [startX - 25, startY, endX + 45, endY - 3];
    }

    static adjustPlaceBottom(startX, startY, endX, endY): [number, number, number, number] {
        return [startX, startY - 25, endX + 35, endY + 25];
    }

    static adjustPlaceBottomLeft(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 25, startY, endX + 25, endY + 23];
    }

    static adjustPlaceBottomRight(startX, startY, endX, endY): [number, number, number, number] {
        return [startX - 25, startY, endX + 45, endY + 25];
    }

    static adjustPlaceLeft(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 25, startY, endX - 8, endY + 12];
    }

    static adjustPlaceRight(startX, startY, endX, endY): [number, number, number, number] {
        return [startX - 25, startY, endX + 75, endY + 10];
    }

    ////////////////////////////
    // Transition Adjustments //
    ////////////////////////////
    static adjustTransitionTop(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 35, startY + 20, endX, endY - 30];
    }

    static adjustTransitionTopLeft(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 35, startY + 20, endX - 20, endY - 20];
    }

    static adjustTransitionTopRight(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 35, startY + 20, endX + 20, endY - 20];
    }

    static adjustTransitionBottom(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 35, startY, endX, endY + 30];
    }

    static adjustTransitionBottomLeft(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 35, startY, endX - 20, endY + 20];
    }

    static adjustTransitionBottomRight(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 35, startY, endX + 20, endY + 20];
    }

    static adjustTransitionLeft(startX, startY, endX, endY): [number, number, number, number] {
        return [startX + 70, startY + 10, endX - 30, endY];
    }

    static adjustTransitionRight(startX, startY, endX, endY): [number, number, number, number] {
        return [startX, startY + 10, endX + 30, endY];
    }
}
