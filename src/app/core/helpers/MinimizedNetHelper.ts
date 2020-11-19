import { PlaceRepository } from './../repositories/PlaceRepository';
import { TransitionRepository } from './../repositories/TransitionRepository';
import { MinimizedNet } from './../models/MinimizedNet';
import { SUBNET_COLOR } from './../../app/shared/constants';
import { TokenHelper } from './TokenHelper';
import { PlaceHelper } from './PlaceHelper';
import { TransitionHelper } from './TransitionHelper';
import { ArcHelper } from './ArcHelper';
import { Inject } from '@angular/core';
export class MinimizedNetHelper {
    transitionRepository: TransitionRepository;
    placeRepository: PlaceRepository;

    constructor(@Inject(TransitionRepository) transitionRepository: TransitionRepository,
                @Inject(PlaceRepository) placeRepository: PlaceRepository) {
        this.transitionRepository = transitionRepository;
        this.placeRepository = placeRepository;
    }

    public displayMainNet(mainMatrix: MinimizedNet, startPosition: number, endPosition: number): void {
        const changeYPosition = endPosition - startPosition;
        this.drawTransitions(mainMatrix.net, mainMatrix.originalTransitions, startPosition, changeYPosition);
        this.drawPlaces(mainMatrix.net, mainMatrix.originalPlaces, startPosition, changeYPosition);
        this.createArcBetweenElementsInMainNet(mainMatrix.net, mainMatrix.originalTransitions, mainMatrix.originalPlaces);
        TokenHelper.createToken(0);
    }

    public displaySubnets(netMattrix: MinimizedNet, subnetMatrices: MinimizedNet[]): { minYPosition: number, maxYPosition: number } {
        let position = 0;
        let minYPosition = 10000;
        let maxYPosition = 0;

        let startXPosition = this.getPositionOfRightMostElementInMain(
            netMattrix.net, netMattrix.originalPlaces, netMattrix.originalTransitions) + 50;

        const startYPosition = this.getPositionOfHighestElementInMain(
            netMattrix.net, netMattrix.originalPlaces, netMattrix.originalTransitions);
        for (let i = 0; i < subnetMatrices.length; i++) {
            if (i !== 0) {
                startXPosition += 70;
            }

            const subnet = subnetMatrices[i].net;
            const originalTransitionsIDs = subnetMatrices[i].originalTransitions;
            const originalPlacesIDs = subnetMatrices[i].originalPlaces;

            originalTransitionsIDs.forEach(transitionID => {
                const transition = this.transitionRepository.getByID(transitionID);
                position = transition.yPosition;
                if (position < minYPosition) {
                    minYPosition = position;
                }
                if (position > maxYPosition) {
                    maxYPosition = position;
                }
                TransitionHelper.createTransitionWithLabel(
                    transition.getID(),
                    startXPosition + transition.xPosition,
                    transition.yPosition);
            });

            originalPlacesIDs.forEach(placeID => {
                const place = this.placeRepository.getByID(placeID);
                position = place.yPosition;
                if (position < minYPosition) {
                    minYPosition = position;
                }
                if (position > maxYPosition) {
                    maxYPosition = position;
                }
                PlaceHelper.createPlaceWtihLabel(
                    place.getID(),
                    startXPosition + place.xPosition,
                    place.yPosition);
            });

            this.createArcBetweenElementsInSubnetNet(subnet, i, originalTransitionsIDs, originalPlacesIDs);
        }

        return { minYPosition, maxYPosition };
    }

    createBordersForSubnets(subnets: MinimizedNet[]): void {
        let subnetID = 0;
        subnets.forEach(subnet => {
            let minX = 1000;
            let minY = 1000;
            let maxX = 0;
            let maxY = 0;
            for (let i = 0; i < subnet.originalTransitions.length; i++) {
                const transition = document.getElementById(`transition-${subnet.originalTransitions[i]}`);
                const xPosition = Number(transition.getAttribute('x'));
                if (xPosition < minX) {
                    minX = xPosition;
                }
                if (xPosition > maxX) {
                    maxX = xPosition;
                }
                const yPosition = Number(transition.getAttribute('y'));
                if (yPosition < minY) {
                    minY = yPosition;
                }
                if (yPosition > maxY) {
                    maxY = yPosition;
                }
            }
            for (let i = 0; i < subnet.originalPlaces.length; i++) {
                const place = document.getElementById(`place-${subnet.originalPlaces[i]}`);
                const xPosition = Number(place.getAttribute('cx'));
                if (xPosition < minX) {
                    minX = xPosition;
                }
                if (xPosition > maxX) {
                    maxX = xPosition;
                }
                const yPosition = Number(place.getAttribute('cy'));
                if (yPosition < minY) {
                    minY = yPosition;
                }
                if (yPosition > maxY) {
                    maxY = yPosition;
                }
            }
            console.log('minX, maxX');
            console.log(minX, maxX);
            console.log('minY, maxy');
            console.log(minY, maxY);
            this.createBorderAndLabelForSubnet(
                subnetID,
                minX - 50, minY - 50,
                maxX - minX + 130, maxY - minY + 100);
            subnetID++;
        });
    }

    private createBorderAndLabelForSubnet(id: number, startX: number, startY: number, width: number, height: number): void {
        const border = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        border.setAttribute('id', `border-subnet-${id}`);
        border.setAttribute('class', 'border');
        border.setAttribute('x', startX.toString());
        border.setAttribute('y', startY.toString());
        border.setAttribute('width', width.toString());
        border.setAttribute('height', height.toString());
        border.setAttribute('stroke', 'black');
        border.setAttribute('stroke-width', '2');
        border.setAttribute('fill', 'white');
        border.setAttribute('style', 'cursor: pointer');

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'label');
        text.setAttribute('id', `label-subnet-${id}`);
        text.setAttribute('x', (startX + 35).toString());
        text.setAttribute('y', (startY + 10).toString());
        text.setAttribute('fill', 'black');
        text.setAttribute('dy', '.3em');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '14px');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('style', 'cursor: pointer');
        text.innerHTML = 'subnet ' + id;

        const board = document.getElementById('svg-board');
        const firstElementID = document.getElementsByClassName('net-element')[0].getAttribute('id');
        const firstElement = document.getElementById(firstElementID);
        board.insertBefore(border, firstElement);
        board.insertBefore(text, firstElement);
    }

    drawTransitions(netMatrix: number[][], originalIDs: number[] = [], startPosition: number, changeYPosition: number): void {
        for (let i = 0; i < netMatrix.length; i++) {
            if (originalIDs.length !== 0) {
                const transition = this.transitionRepository.getByID(originalIDs[i]);
                let yPosition = transition.yPosition;
                if (yPosition > startPosition) {
                    yPosition -= changeYPosition;
                }
                TransitionHelper.createTransitionWithLabel(transition.getID(), transition.xPosition, yPosition);
            } else {
                TransitionHelper.createTransitionWithLabel(i, 150 + 100 * i, 150);
            }
        }
    }

    drawPlaces(netMatrix: number[][], originalIDs: number[] = [], startPosition: number, changeYPosition: number): void {
        const subnetPlaces = this.findIndexesOfValues(netMatrix, 1);

        let subnetID = 0;
        let positionCounter = 0;

        for (let i = 0; i < subnetPlaces[0]; i++) {
            const place = this.placeRepository.getByID(originalIDs[i]);
            PlaceHelper.createPlaceWtihLabel(place.getID(), place.xPosition, place.yPosition);
            positionCounter++;
        }

        for (let i = 0; i < subnetPlaces.length; i++) {
            const place = this.placeRepository.getByID(subnetPlaces[i]);
            PlaceHelper.createPlaceWtihLabel(
                subnetID, place.xPosition, place.yPosition, `subnet-${subnetID}-start-`, 'white', `s${subnetID}`, false);
            subnetID++;
            positionCounter++;
        }

        for (let i = subnetPlaces[0]; i < originalIDs.length; i++) {
            const place = this.placeRepository.getByID(originalIDs[i]);
            let yPosition = place.yPosition;
            if (yPosition > startPosition) {
                yPosition -= changeYPosition;
            }
            PlaceHelper.createPlaceWtihLabel(place.getID(), place.xPosition, yPosition);
            positionCounter++;
        }

    }

    createArcBetweenElementsInMainNet(netMatrix: number[][], originalTransitions: number[], originalPlaces: number[]): void {
        const subnetPlaces = this.findIndexesOfValues(netMatrix, 1);
        for (let i = 0; i < netMatrix.length; i++) {
            let subnetIDStart = 0;
            let subnetIDEnd = 0;
            for (let j = 0; j < netMatrix[0].length; j++) {
                if (netMatrix[i][j] === 1) {
                // strzalka od tranzycji do miejsca
                    if (subnetPlaces.includes(j)) {
                        ArcHelper.createArc(`transition-${originalTransitions[i]}`, `subnet-${subnetIDEnd}-start-place`);
                        subnetIDEnd++;
                    } else {
                        let index = j;
                        if (j >= originalPlaces.length - 1) {
                            index = j - subnetPlaces.length;
                        }
                        ArcHelper.createArc(`transition-${originalTransitions[i]}`, `place-${originalPlaces[index]}`);
                    }
                } else if (netMatrix[i][j] === -1) {
                // strzalka od miejsca do tranzycji
                    if (subnetPlaces.includes(j)) {
                        ArcHelper.createArc(`subnet-${subnetIDStart}-start-place`, `transition-${originalTransitions[i]}`);
                        subnetIDStart++;
                    } else {
                        let index = j;
                        if (j >= originalPlaces.length - 1) {
                            index = j - subnetPlaces.length;
                        }
                        ArcHelper.createArc(`place-${originalPlaces[index]}`, `transition-${originalTransitions[i]}`);
                    }
                }
            }
        }
    }

    createArcBetweenElementsInSubnetNet(netMatrix: number[][], numberOfSubnet: number,
                                        originalTransitions: number[], originalPlaces: number[]): void {
        for (let i = 0; i < netMatrix.length; i++) {
            for (let j = 0; j < netMatrix[0].length; j++) {
                if (netMatrix[i][j] === 1) {
                // strzalka od tranzycji do miejsca
                ArcHelper.createArc(`transition-${originalTransitions[i]}`, `place-${originalPlaces[j]}`);
                } else if (netMatrix[i][j] === -1) {
                // strzalka od miejsca do tranzycji
                ArcHelper.createArc(`place-${originalPlaces[j]}`, `transition-${originalTransitions[i]}`);
                }
            }
        }
    }

    findIndexesOfValues(minimizedNetInitial: number[][], value: number): number[] {
        const indexes = [];
        let row = this.findRowOfDoubles(minimizedNetInitial, value);
        if (value === 0) {
            row = this.findRowOfDoubles(minimizedNetInitial, 1);
        }

        for (let i = 1; i < minimizedNetInitial[row].length - 1; i++) {
            if (minimizedNetInitial[row][i] === value) {
                indexes.push(i);
            }
        }

        return indexes;
    }

    findRowOfDoubles(minimizedNetFirst: number[][], value: number): number {
        let row = -1;
        for (let i = 0; i < minimizedNetFirst.length; i++) {
            let countValues = 0;
            for (let j = 0; j < minimizedNetFirst[0].length; j++) {
                if (minimizedNetFirst[i][j] === value) {
                    countValues += 1;
                }
                if (countValues >= 2) {
                    row = i;
                    break;
                }
            }
        }
        return row;
    }

    getPositionOfRightMostElement(): number  {
        let xPosition = 0;
        let xMax = 0;
        Array.from(document.getElementsByClassName('net-element')).forEach(element => {
            if (element.classList.contains('place')) {
                xPosition = Number(element.getAttribute('cx'));
            } else if (element.classList.contains('transition')) {
                xPosition = Number(element.getAttribute('x'));
            }
            if (xPosition > xMax) {
                xMax = xPosition;
            }
        });
        return xMax;
    }

    getPositionOfRightMostElementInMain(netMatrix: number[][], originalPlacesIDs: number[], originalTransitionsIDs: number[]): number {
        let xPosition = 0;
        let xMax = 0;
        for (let i = 0; i < netMatrix.length; i++) {
            const transition = this.transitionRepository.getByID(originalTransitionsIDs[i]);
            xPosition = transition.xPosition;
            if (xPosition > xMax) {
                xMax = xPosition;
            }
        }

        const subnetPlaces = this.findIndexesOfValues(netMatrix, 1);
        let subnetID = 0;
        let positionCounter = 0;
        for (let i = 0; i < subnetPlaces[0]; i++) {
            const place = this.placeRepository.getByID(originalPlacesIDs[i]);
            xPosition = place.xPosition;
            if (xPosition > xMax) {
                xMax = xPosition;
            }
            positionCounter++;
        }
        for (let i = 0; i < subnetPlaces.length; i++) {
            const place = this.placeRepository.getByID(subnetPlaces[i]);
            xPosition = place.xPosition;
            if (xPosition > xMax) {
                xMax = xPosition;
            }
            subnetID++;
            positionCounter++;
        }
        for (let i = subnetPlaces[0]; i < originalPlacesIDs.length; i++) {
            const place = this.placeRepository.getByID(originalPlacesIDs[i]);
            xPosition = place.xPosition;
            if (xPosition > xMax) {
                xMax = xPosition;
            }
            positionCounter++;
        }
        return xMax;
    }

    getPositionOfHighestElementInMain(netMatrix: number[][], originalPlacesIDs: number[], originalTransitionsIDs: number[]): number {
        let yPosition = 0;
        let yMax = 0;
        for (let i = 0; i < netMatrix.length; i++) {
            const transition = this.transitionRepository.getByID(originalTransitionsIDs[i]);
            yPosition = transition.yPosition;
            if (yPosition > yMax) {
                yMax = yPosition;
            }
        }

        const subnetPlaces = this.findIndexesOfValues(netMatrix, 1);
        let subnetID = 0;
        let positionCounter = 0;
        for (let i = 0; i < subnetPlaces[0]; i++) {
            const place = this.placeRepository.getByID(originalPlacesIDs[i]);
            yPosition = place.yPosition;
            if (yPosition > yMax) {
                yMax = yPosition;
            }
            positionCounter++;
        }
        for (let i = 0; i < subnetPlaces.length; i++) {
            const place = this.placeRepository.getByID(subnetPlaces[i]);
            yPosition = place.yPosition;
            if (yPosition > yMax) {
                yMax = yPosition;
            }
            subnetID++;
            positionCounter++;
        }
        for (let i = subnetPlaces[0]; i < originalPlacesIDs.length; i++) {
            const place = this.placeRepository.getByID(originalPlacesIDs[i]);
            yPosition = place.yPosition;
            if (yPosition > yMax) {
                yMax = yPosition;
            }
            positionCounter++;
        }
        return yMax;
    }
}
