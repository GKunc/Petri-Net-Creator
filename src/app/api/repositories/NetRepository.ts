import { ArcRepository } from './ArcRepository';
import { TransitionRepository } from './TransitionRepository';
import { PlaceRepository } from './PlaceRepository';
import { Injectable, Inject } from '@angular/core';

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
        this.arcRepository.create(1, 2);
    }

    resetIDs(): void {
        this.placeRepository.resetIDs();
        this.transitionRepository.resetIDs();
    }
}