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

    selectedElements: [];

    constructor(
        @Inject(PlaceRepository) placeRepository: PlaceRepository, 
        @Inject(TransitionRepository) transitionRepository: TransitionRepository,
        @Inject(ArcRepository) arcRepository: ArcRepository) {
            this.placeRepository = placeRepository;
            this.transitionRepository = transitionRepository;
            this.arcRepository = arcRepository;

            this.selectedElements = [];
    }

    createPlace(x: number, y: number) {
        this.placeRepository.create(x, y);

    }

    createTransition(x: number, y: number) {
        this.transitionRepository.create(x, y);
    }

    createArc() {
        this.arcRepository.create();
    }

    removeAllElements(): void {
        this.placeRepository.removeAll();
        this.transitionRepository.removeAll();
    }
}