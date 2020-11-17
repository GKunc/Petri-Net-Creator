import { MinimizedNet } from './../models/MinimizedNet';
import { MinimizedNetBuilder } from './../builders/MinimizedNetBuilder';
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
    minimizedNetBuilder: MinimizedNetBuilder;

    netMatrix: number[][];

    mainMinimizedMatrix: MinimizedNet;
    subnetMinimizedMatrices: MinimizedNet[];

    isNetMinimized: boolean;

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

            this.isNetMinimized = false;
    }

    buildNetMatrix(): void {
        for (let i = 0; i < this.transitionRepository.getAll().length; i++) {
            this.netMatrix[i] = [];
            for (let j = 0; j < this.placeRepository.getAll().length; j++) {
                this.netMatrix[i][j] = 0;
            }
        }
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

    createToken(id: number, prefix: string = ''): void {
        this.tokenRepository.create(id, prefix);
    }

    removeToken(id: number, prefix: string = ''): void {
        this.tokenRepository.remove(id, prefix);
    }

    removeAllElements(): void {
        this.placeRepository.removeAll();
        this.transitionRepository.removeAll();
        this.tokenRepository.removeAll();
        this.signalRepository.removeAll();
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

    createSignal(transitionNumber: number): void {
        SignalHelper.createLabelForTransition(transitionNumber,
          this.signalRepository.selectedInputSignals);
        this.transitionRepository.addSignals(transitionNumber, this.signalRepository.selectedInputSignals);
    }

    minimizeNet(): void {
        // rememver position of each element
        this.savePositionOfElements();

        this.isNetMinimized = true;
        this.buildNetMatrix();
        this.minimizedNetBuilder = new MinimizedNetBuilder(this.netMatrix);
        this.mainMinimizedMatrix = this.minimizedNetBuilder.createMainMatrix();
        this.subnetMinimizedMatrices = this.minimizedNetBuilder.createSubnetMatrices();
        this.printMatrixes();
    }

    savePositionOfElements(): void {
        this.transitionRepository.getAll().forEach(transition => {
            const transitionDOM = document.getElementById(`transition-${transition.getID()}`);
            transition.updateCoordinates(Number(transitionDOM.getAttribute('x')), Number(transitionDOM.getAttribute('y')));
        });

        this.placeRepository.getAll().forEach(place => {
            const placeDOM = document.getElementById(`place-${place.getID()}`);
            place.updateCoordinates(Number(placeDOM.getAttribute('cx')), Number(placeDOM.getAttribute('cy')));
        });
    }

    addSignalsToMinimizedNet(): void {
        for (let i = 0; i < this.mainMinimizedMatrix.net.length; i++) {
            const transitionID  = this.mainMinimizedMatrix.originalTransitions[i];
            SignalHelper.createLabelForTransition(transitionID,
                this.transitionRepository.getByID(transitionID).signals);
        }

        for (let i = 0; i < this.subnetMinimizedMatrices.length; i++) {
            for (let j = 0; j < this.subnetMinimizedMatrices[0].net.length; j++) {
                const transitionID = this.subnetMinimizedMatrices[i].originalTransitions[j];
                SignalHelper.createLabelForTransition(
                    transitionID, this.transitionRepository.getByID(transitionID).signals, i);
            }
        }
    }

    addSignalsToUnminimizedNet(): void {
        for (let i = 0; i < this.netMatrix.length; i++) {
            SignalHelper.createLabelForTransition(i,
                this.transitionRepository.getByID(i).signals);
        }
    }

    private printMatrixes(): void {
        console.log('Net matrix:');
        console.log(this.netMatrix);
        console.log('Main minimized matrix:');
        console.log(this.mainMinimizedMatrix);
        console.log('Subnets minimized matrix:');
        console.log(this.subnetMinimizedMatrices);
    }
}
