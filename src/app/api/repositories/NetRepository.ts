import { Place } from './../models/Place';
import { INetElement } from './../models/INetElement';
import { ArcRepository } from './ArcRepository';
import { TransitionRepository } from './TransitionRepository';
import { PlaceRepository } from './PlaceRepository';
import { Injectable, Inject } from '@angular/core';
import { Transition } from '../models/Transition';

@Injectable({
    providedIn: 'root'
})
export class NetRepository {
    placeRepository: PlaceRepository;
    transitionRepository: TransitionRepository;
    arcRepository: ArcRepository;

    current_place_id: number;

    constructor(
        @Inject(PlaceRepository) placeRepository: PlaceRepository, 
        @Inject(TransitionRepository) transitionRepository: TransitionRepository,
        @Inject(ArcRepository) arcRepository: ArcRepository) {
            this.placeRepository = placeRepository;
            this.transitionRepository = transitionRepository;
            this.arcRepository = arcRepository;
    }

    createPlace() {
        this.placeRepository.create();
    }

    createTransition() {
        this.transitionRepository.create();
    }

    createArc() {
        let start_element: INetElement = new Place(1, 500, 500);
        let end_element: INetElement = new Transition(1, 300, 400);
        this.arcRepository.create(start_element, end_element);
    }

    resetIDs(): void {
        this.placeRepository.resetIDs();
        this.transitionRepository.resetIDs();
    }
}