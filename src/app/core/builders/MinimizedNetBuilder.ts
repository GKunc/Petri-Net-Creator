import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MinimizedNetBuilder {
    createMainMatrix(netMatrix: number[][]): number[][] {
        return this.convertNetMatrixToMainMinimizedMatrix(netMatrix);
    }

    createSubnetMatrices(netMatrix: number[][]): number[][][] {
        // alert('Create Main Matrix');
        return [];

    }

    private findStartAndEndOfSubnets(netMatrix: number[][]): {start: number, end: number} {
        let start = -1;
        let end = -1;
        for (let i = 0; i < netMatrix.length; i++) {
            let countOnes = 0;
            let countNegativeOnes = 0;
            for (let j = 0; j < netMatrix[0].length; j++) {
                if (netMatrix[i][j] === 1) {
                    countOnes += 1;
                }
                if (netMatrix[i][j] === -1) {
                    countNegativeOnes += 1;
                }

                if (countOnes >= 2 && start === -1) {
                    start = i;
                }
                if (countNegativeOnes >= 2) {
                    end = i;
                }
            }
        }

        return {start, end};
    }

    private convertNetMatrixToMainMinimizedMatrix(netMatrix: number[][]): number[][] {
        const minimizedNetInitial = this.createInitialMainMatrix(netMatrix);
        const minimizedNetFinal = [];

        const startRow = this.findRowOfDoubles(minimizedNetInitial, 1);
        const endRow = this.findRowOfDoubles(minimizedNetInitial, -1);

        const indexesOfOnes = this.findIndexesOfDoubles(minimizedNetInitial, 1);
        const indexesOfZeros = this.findIndexesOfDoubles(minimizedNetInitial, 0);

        for (let i = 0; i < minimizedNetInitial[endRow].length; i++) {
            if (minimizedNetInitial[endRow][i] === 1 && indexesOfZeros.includes(i)) {
                indexesOfZeros.splice(indexesOfZeros.indexOf(i), 1);
            }
        }

        for (let i = 0; i < minimizedNetInitial.length; i++) {
            const row = [];
            for (let j = 0; j < minimizedNetInitial[0].length; j++) {
                if (indexesOfOnes.includes(j)) {
                    if (i === startRow) {
                        row.push(1);
                    } else if (i === endRow) {
                        row.push(-1);
                    } else {
                        row.push(0);
                    }
                }
                else if (indexesOfZeros.includes(j)) {
                    continue;
                }
                else {
                    row.push(minimizedNetInitial[i][j]);
                }
            }
            minimizedNetFinal.push(row);
        }
        return minimizedNetFinal;
    }

    private createInitialMainMatrix(netMatrix: number[][]): number[][] {
        const minimizedNetInitial = [];
        const {start, end} = this.findStartAndEndOfSubnets(netMatrix);

        for (let i = 0; i <= start; i++) {
            minimizedNetInitial.push(netMatrix[i]);
        }

        for (let i = end; i < netMatrix.length; i++) {
            minimizedNetInitial.push(netMatrix[i]);
        }
        return minimizedNetInitial;
    }

    private findRowOfDoubles(minimizedNetFirst: number[][], value: number): number {
        let row = -1;
        for (let i = 0; i < minimizedNetFirst.length; i++) {
            let countOnes = 0;
            for (let j = 0; j < minimizedNetFirst[0].length; j++) {
                if (minimizedNetFirst[i][j] === value) {
                    countOnes += 1;
                }
                if (countOnes >= 2) {
                    row = i;
                    break;
                }
            }
        }
        return row;
    }

    private findIndexesOfDoubles(minimizedNetFirst: number[][], value: number): number[] {
        const indexes = [];
        let row = this.findRowOfDoubles(minimizedNetFirst, value);
        if (value === 0) {
            row = this.findRowOfDoubles(minimizedNetFirst, 1);
        }
        for (let i = 1; i < minimizedNetFirst[row].length - 1; i++) {
            if (minimizedNetFirst[row][i] === value) {
                indexes.push(i);
            }
        }
        return indexes;
    }
}
