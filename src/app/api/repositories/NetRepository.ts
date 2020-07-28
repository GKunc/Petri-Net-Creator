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

    createPlace() {
        this.placeRepository.create();

    }

    createTransition() {
        this.transitionRepository.create();
    }

    createArc() {
        this.arcRepository.create();
    }

    resetIDs(): void {
        this.placeRepository.resetIDs();
        this.transitionRepository.resetIDs();
    }
}