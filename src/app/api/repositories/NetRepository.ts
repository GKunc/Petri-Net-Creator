import { TokenRepository } from './TokenRepository';
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
    tokenRepository: TokenRepository;

    selectedElements: [];

    constructor(
        @Inject(PlaceRepository) placeRepository: PlaceRepository,
        @Inject(TransitionRepository) transitionRepository: TransitionRepository,
        @Inject(ArcRepository) arcRepository: ArcRepository,
        @Inject(TokenRepository) tokenRepository: TokenRepository) {
            this.placeRepository = placeRepository;
            this.transitionRepository = transitionRepository;
            this.arcRepository = arcRepository;
            this.tokenRepository = tokenRepository;

            this.selectedElements = [];
    }

    createPlace(x: number, y: number): void {
        this.placeRepository.create(x, y);

    }

    createTransition(x: number, y: number): void {
        this.transitionRepository.create(x, y);
    }

    createNewArc(ID: string): void {
        this.arcRepository.createNew(ID);
    }

    createArc(): void {
        this.arcRepository.create();
    }

    createToken(id: number, x: number, y: number): void {
        this.tokenRepository.create(id, x, y);
    }

    removeAllElements(): void {
        this.placeRepository.removeAll();
        this.transitionRepository.removeAll();
    }
}
