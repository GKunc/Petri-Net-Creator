import { SignalHelper } from './../helpers/SignalHelper';
import { SignalRepository } from './SignalRepository';
import { ArcHelper } from './../helpers/ArcHelper';
import { TokenRepository } from './TokenRepository';
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
    tokenRepository: TokenRepository;
    signalRepository: SignalRepository;

    netMatrix: number[][];

    constructor(
        @Inject(PlaceRepository) placeRepository: PlaceRepository,
        @Inject(TransitionRepository) transitionRepository: TransitionRepository,
        @Inject(ArcRepository) arcRepository: ArcRepository,
        @Inject(TokenRepository) tokenRepository: TokenRepository,
        @Inject(SignalRepository) signalRepository: SignalRepository) {
            this.placeRepository = placeRepository;
            this.transitionRepository = transitionRepository;
            this.arcRepository = arcRepository;
            this.tokenRepository = tokenRepository;
            this.signalRepository = signalRepository;

            this.netMatrix = [];
    }

    initNet(): void {
        for (let i = 0; i < this.transitionRepository.getAll().length; i++) {
            this.netMatrix[i] = [];
            for (let j = 0; j < this.placeRepository.getAll().length; j++) {
                this.netMatrix[i][j] = 0;
            }
        }
        console.log(this.netMatrix);
        this.updateNetWithConnections();
    }

    updateNetWithConnections(): void {
        Array.from(ArcHelper.getAll()).forEach(arc => {
            const [startID, endID] = ArcHelper.getArrowStartAndEnd(arc.getAttribute('id'));
            if (startID.split('-')[0] === 'transition') {
                this.netMatrix[Number(startID.split('-')[1])][Number(endID.split('-')[1])] = 1;
            }
            else if (endID.split('-')[0] === 'transition') {
                this.netMatrix[Number(endID.split('-')[1])][Number(startID.split('-')[1])] = -1;
            }
        });
    }

    createPlace(x: number, y: number): void {
        this.placeRepository.create(x, y);

    }

    createTransition(x: number, y: number): void {
        this.transitionRepository.create(x, y);
    }

    createArc(ID: string): void {
        this.arcRepository.create(ID);
    }

    createToken(id: number): void {
        this.tokenRepository.create(id);
    }

    removeToken(id: number): void {
        this.tokenRepository.remove(id);
    }

    removeAllElements(): void {
        this.placeRepository.removeAll();
        this.transitionRepository.removeAll();
        this.tokenRepository.removeAll();
    }

    addSignal(): void {
        this.signalRepository.addSignal();
    }

    removeSignal(): void {
        this.signalRepository.removeSignal();
    }

    updateSelectedSignals(signals: number[]): void {
        this.signalRepository.updateSelectedSignals(signals);
    }

    createSignal(transitionNumber: number, xPosition: number, yPosition: number): void {
        console.log(this.signalRepository.selectedInputSignals);
        SignalHelper.createLabelForTransition(transitionNumber,
          this.signalRepository.selectedInputSignals, xPosition, yPosition);
        this.transitionRepository.addSignals(transitionNumber, this.signalRepository.selectedInputSignals);
      }
}
