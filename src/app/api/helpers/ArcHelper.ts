import * as $ from 'jquery';

export class ArcHelper {
    static moveArrow(): void {

    }

    static moveArrowWithCursor(ID: string, xPosition: number, yPosition: number): void {
        const arrow = document.getElementById(ID + ':');
        $(arrow).attr('x2', xPosition.toString());
        $(arrow).attr('y2', yPosition.toString());
    }

    static moveArrowWithElement(id: string): void {
        ArcHelper.getConnectedArrowsIDs(id).forEach(arrowID => {
            const startID = arrowID.split(':')[0];
            const endID = arrowID.split(':')[1];

            let [x1, y1] = this.getCoorinatesOfElement(startID);
            let [x2, y2] = this.getCoorinatesOfElement(endID);
            [x1, y1, x2, y2] = this.connectToNearestEnd(startID, x1, y1, x2, y2);

            $(document.getElementById(arrowID)).attr('x1', x1);
            $(document.getElementById(arrowID)).attr('y1', y1);
            $(document.getElementById(arrowID)).attr('x2', x2);
            $(document.getElementById(arrowID)).attr('y2', y2);
        });
    }

    static getConnectedArrowsIDs(id: string): string[] {
        const allArrows = Array.from(document.getElementsByClassName('arc'));
        const connectedElementsIDs = [];
        allArrows.forEach(arrow => {
            const arrowID: string = arrow.getAttribute('id');
            const startID = arrowID.split(':')[0];
            const endID = arrowID.split(':')[1];
            if (startID === id || endID === id) {
                connectedElementsIDs.push(arrowID);
            }
        });
        return connectedElementsIDs;
    }

    static getCoorinatesOfElement(id: string): [number, number] {
        let x: number;
        let y: number;
        const element: Element = document.getElementById(id);
        if (element.getAttribute('id').includes('place')) {
            x = Number(element.getAttribute('cx'));
            y = Number(element.getAttribute('cy'));
        } else {
            x = Number(element.getAttribute('x'));
            y = Number(element.getAttribute('y'));
        }
        return [x, y];
    }

    static  connectToNearestEnd(
        startID: string, startX: number, startY: number,
        endX: number, endY: number
    ): [number, number, number, number] {

            if (startID.includes('place')) {
                [startX, startY, endX, endY] =
                    this.adjustArrowPosition('place', startX, startY, endX, endY);
            } else if (startID.includes('transition')) {
                [startX, startY, endX, endY] =
                this.adjustArrowPosition('transition', startX, startY, endX, endY);
            }

            return [startX, startY, endX, endY];
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
