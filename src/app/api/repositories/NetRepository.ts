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
    current_transition_id: number;

    constructor(
        @Inject(PlaceRepository) placeRepository: PlaceRepository, 
        @Inject(TransitionRepository) transitionRepository: TransitionRepository,
        @Inject(ArcRepository) arcRepository: ArcRepository) {
            this.placeRepository = placeRepository;
            this.transitionRepository = transitionRepository;
            this.arcRepository = arcRepository;

            this.current_place_id = 1;
            this.current_transition_id = 1;
    }

    createPlace() {
        this.placeRepository.create(this.current_place_id);
        this.current_place_id++;
    }

    createTransition() {
        this.transitionRepository.create(this.current_transition_id);
        this.current_transition_id++;
    }

    createArc() {
        this.arcRepository.create(1, 2);
    }
}