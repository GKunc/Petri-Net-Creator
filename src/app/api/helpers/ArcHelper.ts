import { Injectable } from '@angular/core';

export interface IArcHelper {
    getCoorinatesOfElement(id: string): [number, number];
    connectToNearestEnd(start_id: string, start_x: number, start_y: number, end_x: number, end_y: number): [number, number, number, number];
}

@Injectable({
    providedIn: 'root'
})
export class ArcHelper implements IArcHelper {

    getCoorinatesOfElement(id: string): [number, number] {
        let x: number, y: number;
        let element: Element = document.getElementById(id);
        if(element.getAttribute("id").includes("place")) {
            x = parseInt(element.getAttribute('cx'));
            y = parseInt(element.getAttribute('cy'));
        } else {
            x = parseInt(element.getAttribute('x'));
            y = parseInt(element.getAttribute('y'));
        }
        return [x, y];
    }

    connectToNearestEnd(
        start_id: string, start_x: number, start_y: number,
        end_x: number, end_y: number
    ): [number, number, number, number] {

            if(start_id.includes('place')) {
                [start_x, start_y, end_x, end_y] = 
                    this.adjustArrowPosition('place', start_x, start_y, end_x, end_y);
            } else if(start_id.includes('transition')) {
                [start_x, start_y, end_x, end_y] = 
                this.adjustArrowPosition('transition', start_x, start_y, end_x, end_y);
            }

        return [start_x, start_y, end_x, end_y];
    }


    private adjustArrowPosition(
        start_id: string, start_x: number, start_y: number,
        end_x: number, end_y: number
    ): [number, number, number, number] {

        if(start_x - end_x > -80 && start_x - end_x < 100) {
            if(start_y - end_y < 0) {
                if(start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceTop(start_x, start_y, end_x, end_y);
                } else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionTop(start_x, start_y, end_x, end_y);
                }
            } 
            else {
                if(start_id === 'place') {
                    [start_x, start_y, end_x, end_y] = 
                        this.adjustPlaceBottom(start_x, start_y, end_x, end_y);
                } else {
                    [start_x, start_y, end_x, end_y] = 
                        this.adjustTransitionBottom(start_x, start_y, end_x, end_y);
                }
            }
        } 
        else if(start_y - end_y > -80 && start_y - end_y < 100) {
            if(start_x - end_x < 0) {
                if(start_id === 'place') {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceLeft(start_x, start_y, end_x, end_y);
                } else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionLeft(start_x, start_y, end_x, end_y);
                }
            } 
            else {
                if(start_id === 'place') {
                        [start_x, start_y, end_x, end_y] =
                        this.adjustPlaceRight(start_x, start_y, end_x, end_y);
                }else {
                    [start_x, start_y, end_x, end_y] =
                        this.adjustTransitionRight(start_x, start_y, end_x, end_y);
                }
            }
        }

        else if(start_x - end_x < -80) {
            if(start_y - end_y < 100) {
                
                [start_x, start_y, end_x, end_y] = 
                    this.adjustPlaceTopLeft(start_x, start_y, end_x, end_y);
            }
            else {
                [start_x, start_y, end_x, end_y] = 
                    this.adjustPlaceBottomLeft(start_x, start_y, end_x, end_y);
            }
        }

        else if(start_x - end_x > 100) {
            if(start_y - end_y < 100) {
                [start_x, start_y, end_x, end_y] =
                    this.adjustPlaceTopRight(start_x, start_y, end_x, end_y);
            }
            else {
                [start_x, start_y, end_x, end_y] = 
                    this.adjustPlaceBottomRight(start_x, start_y, end_x, end_y);
            }
        } else {
            alert('Unhandled position')
        }

        return [start_x, start_y, end_x, end_y];
    }

    ///////////////////////
    // Place Adjustments //
    ///////////////////////
    private adjustPlaceTop(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x, start_y += 30, end_x += 35, end_y -= 3];
    }

    private adjustPlaceTopLeft(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x += 21.2, start_y += 21.2, end_x, end_y -= 3];
    }

    private adjustPlaceTopRight(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x -= 21.2, start_y += 21.2, end_x += 70, end_y -= 3];
    }

    private adjustPlaceBottom(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x, start_y -= 30, end_x += 35, end_y += 25];
    }

    private adjustPlaceBottomLeft(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x += 21.2, start_y -= 21.2, end_x, end_y += 23];
    }

    private adjustPlaceBottomRight(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x -= 21.2, start_y -= 21.2, end_x += 70, end_y += 25];
    }

    private adjustPlaceLeft(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x += 30, start_y, end_x -= 8, end_y += 12];
    }

    private adjustPlaceRight(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x -= 30, start_y, end_x += 75, end_y += 10];
    }

    ////////////////////////////
    // Transition Adjustments //
    ////////////////////////////
    private adjustTransitionTop(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x + 35, start_y + 20, end_x, end_y - 39];
    }

    private adjustTransitionBottom(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x + 35, start_y, end_x, end_y + 39];
    }

    private adjustTransitionLeft(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x + 70, start_y + 10, end_x - 39, end_y];
    }

    private adjustTransitionRight(start_x, start_y, end_x, end_y): [number, number, number, number] {
        return [start_x, start_y + 10, end_x + 39, end_y];
    }
}