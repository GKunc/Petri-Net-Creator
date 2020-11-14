import { PlaceHelper } from './PlaceHelper';
import { TransitionHelper } from './TransitionHelper';
import { TokenHelper } from './TokenHelper';
import { Place } from './../models/Place';
import { Transition } from './../models/Transition';
import { ArcHelper } from './ArcHelper';
export class NetHelper {
    subnetColors = ['yellow', 'blue', 'red', 'pink', 'grey'];

    public static displayNet(netMatrix: number[][], places: Place[], transitions: Transition[]): void {
        this.drawTransitions(transitions);
        this.drawPlaces(places);
        this.createArcBetweenElementsInNet(netMatrix);
        TokenHelper.createToken(0);
    }

    private static drawTransitions(transitions: Transition[]): void {
        transitions.forEach(transition => {
            TransitionHelper.createTransitionWithLabel(transition.getID(), transition.xPosition, transition.yPosition);
        });
    }

    private static drawPlaces(places: Place[]): void {
        places.forEach(place => {
            PlaceHelper.createPlaceWtihLabel(place.getID(), place.xPosition, place.yPosition);
        });
    }

    private static createArcBetweenElementsInNet(netMatrix: number[][]): void {
        for (let i = 0; i < netMatrix.length; i++) {
            for (let j = 0; j < netMatrix[0].length; j++) {
                if (netMatrix[i][j] === 1) {
                    ArcHelper.createArc(`transition-${i}`, `place-${j}`);
                } else if (netMatrix[i][j] === -1) {
                    ArcHelper.createArc(`place-${j}`, `transition-${i}`);
                }
            }
        }
    }
}
