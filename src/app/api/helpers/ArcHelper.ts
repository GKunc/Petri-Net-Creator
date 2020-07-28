import { TransitionHelper } from './TransitionHelper';
import { PlaceHelper } from './PlaceHelper';
import { INetElement } from '../models/INetElement';
import { Transition } from '../models/Transition';
import { Place } from '../models/Place';

export class ArcHelper {
    static connect(): void {
    }

    static getCurrentPositionOfElemnet(id: number, type: string): [number, number] {
        if(type === 'place') {
            return PlaceHelper.getPlacePositionByID(id);
        } else if(type === 'transition') {
            return TransitionHelper.getPlaceTransitionByID(id);
        }
    }
}