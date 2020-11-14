import { MinimizedNet } from './../models/MinimizedNet';
import { SUBNET_COLOR } from './../../app/shared/constants';
import { TokenHelper } from './TokenHelper';
import { PlaceHelper } from './PlaceHelper';
import { TransitionHelper } from './TransitionHelper';
import { ArcHelper } from './ArcHelper';
export class MinimizedNetHelper {

    public static displayMainNet(mainMatrix: MinimizedNet): void {
        this.drawTransitions(mainMatrix.net);
        this.drawPlaces(mainMatrix.net);
        this.createArcBetweenElementsInMainNet(mainMatrix.net);
        TokenHelper.createToken(0);
    }

    public static displaySubnets(subnetMatrices: MinimizedNet[]): void {
        for (let i = 0; i < subnetMatrices.length; i++) {
            let index = i;
            let transitionX = 100;
            let placeX = 100;
            if (150 + (200 * (i + 1)) > 550) {
                index = 0;
                transitionX = 500;
                placeX = 500;
            }

            const transitionY = 150 + (200 * (index + 1));
            const placeY = 50 + 100 * (2 * index + 2);

            const subnet = subnetMatrices[i].net;

            for (let id = 0; id < subnet.length; id++) {
                TransitionHelper.createTransitionWithLabel(id, transitionX, transitionY, `subnet-${i}-`);
                transitionX += 100 * id;
            }

            for (let id = 0; id < subnet[0].length; id++) {
                PlaceHelper.createPlaceWtihLabel(id, placeX, placeY, `subnet-${i}-`, SUBNET_COLOR[i]);
                placeX += 100 * (id + 1);
            }
            this.createArcBetweenElementsInSubnetNet(subnet, i);
        }

    }

    static drawTransitions(netMatrix: number[][]): void {
        for (let i = 0; i < netMatrix.length; i++) {
            TransitionHelper.createTransitionWithLabel(i, 150 + 100 * i, 150);
        }
    }

    static drawPlaces(netMatrix: number[][]): void {
        const subnetPlaces = this.findIndexesOfValues(netMatrix, 1);
        let subnetID = 0;

        for (let i = 0; i < netMatrix[0].length; i++) {
            if (subnetPlaces.includes(i)) {
                PlaceHelper.createPlaceWtihLabel(i, 100 + 100 * i, 50, `subnet-${subnetID}-start-`, SUBNET_COLOR[subnetID]);
                subnetID++;
            } else {
                PlaceHelper.createPlaceWtihLabel(i, 100 + 100 * i, 50);
            }
        }
    }

    static createArcBetweenElementsInMainNet(netMatrix: number[][]): void {
        const subnetPlaces = this.findIndexesOfValues(netMatrix, 1);

        for (let i = 0; i < netMatrix.length; i++) {
            let subnetID = 0;
            for (let j = 0; j < netMatrix[0].length; j++) {
                if (netMatrix[i][j] === 1) {
                // strzalka od tranzycji do miejsca
                    if (subnetPlaces.includes(j)) {
                        ArcHelper.createArc(`transition-${i}`, `subnet-${subnetID}-start-place-${j}`);
                        subnetID++;
                    } else {
                        ArcHelper.createArc(`transition-${i}`, `place-${j}`);
                    }
                } else if (netMatrix[i][j] === -1) {
                // strzalka od miejsca do tranzycji
                    if (subnetPlaces.includes(j)) {
                        ArcHelper.createArc(`subnet-${subnetID}-start-place-${j}`, `transition-${i}`);
                        subnetID++;
                    } else {
                        ArcHelper.createArc(`place-${j}`, `transition-${i}`);
                    }
                }
            }
        }
    }

    static createArcBetweenElementsInSubnetNet(netMatrix: number[][], numberOfSubnet: number): void {
        for (let i = 0; i < netMatrix.length; i++) {
            for (let j = 0; j < netMatrix[0].length; j++) {
                if (netMatrix[i][j] === 1) {
                // strzalka od tranzycji do miejsca
                    ArcHelper.createArc(`subnet-${numberOfSubnet}-transition-${i}`, `subnet-${numberOfSubnet}-place-${j}`);
                } else if (netMatrix[i][j] === -1) {
                // strzalka od miejsca do tranzycji
                    ArcHelper.createArc(`subnet-${numberOfSubnet}-place-${j}`, `subnet-${numberOfSubnet}-transition-${i}`);
                }
            }
        }
    }

    private static findIndexesOfValues(minimizedNetInitial: number[][], value: number): number[] {
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

    private static findRowOfDoubles(minimizedNetFirst: number[][], value: number): number {
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
}
