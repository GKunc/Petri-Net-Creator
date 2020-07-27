import { TransitionHelper } from './TransitionHelper';
import { PlaceHelper } from './PlaceHelper';
import { INetElement } from '../models/INetElement';
import { Transition } from '../models/Transition';
import { Place } from '../models/Place';

export class ArcHelper {
    static connect(): void {
        alert('connect')
    }

    static getCurrentPositionOfElemnet(netElement: INetElement): [number, number] {
        if(netElement instanceof Place) {
            return PlaceHelper.getPlacePositionByID(netElement.getID());
        } else if(netElement instanceof Transition) {
            return TransitionHelper.getPlaceTransitionByID(netElement.getID());
        }
    }
}