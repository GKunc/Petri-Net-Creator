import { MinimizedNet } from './../models/MinimizedNet';
export class MinimizedNetBuilder {
    netMatrix: number[][];

    constructor(netMatrix: number[][]) {
        this.netMatrix = netMatrix;
    }

    createMainMatrix(): MinimizedNet {
        console.log('MAIN TRANSITIONS: ' + this.findStartAndEndOfSubnets().start, this.findStartAndEndOfSubnets().end);
        return this.convertNetMatrixToMainMinimizedMatrix();
    }

    createSubnetMatrices(): MinimizedNet[] {
        const {start, end} = this.findStartAndEndOfSubnets();
        const subnetsMatrixes = [];
        const places = this.findPlacesStart(start);
        for (let i = 0; i < places.length; i++) {
            subnetsMatrixes.push(this.createSubnet(this.findTransitionStart(places[i]), places[i], end));
        }
        return subnetsMatrixes;
    }

    private createSubnet(startPlace: number, startTransition: number, end: number): MinimizedNet {
        const subnetFinal = [];
        const rowsInSubnet = this.findNextValue(startTransition, [], end);
        console.log('SUB TRANSITIONS: ' + rowsInSubnet);

        const subnet = this.subnetMatrix(rowsInSubnet);
        const columns = this.columnsToDelete(startPlace, rowsInSubnet);

        for (let i = 0; i < subnet.length; i++) {
            const rowFinal = [];
            for (let j = 0; j < subnet[0].length; j++) {
                if (!columns.includes(j)) {
                    rowFinal.push(subnet[i][j]);
                }
            }
            subnetFinal.push(rowFinal);
        }

        return new MinimizedNet(subnetFinal, rowsInSubnet);
    }

    private columnsToDelete(start: number, rows: number[]): number[] {
        const columnsToDelete = [];

        for (let i = 0; i < this.netMatrix[0].length; i++) {
            if (this.netMatrix[start][i] === 0) {
                columnsToDelete.push(i);
            }
        }

        rows.forEach(row => {
            for (let i = 1; i < this.netMatrix[0].length; i++) {
                if (this.netMatrix[row][i] !== 0 && columnsToDelete.includes(i)) {
                    // delete when some column has value other than 0
                    columnsToDelete.splice(columnsToDelete.indexOf(i), 1);
                }
            }
        });

        return columnsToDelete;
    }

    private subnetMatrix(rows: number[]): number[][] {
        const result = [];
        for (let i = 0; i < this.netMatrix.length; i++) {
            if (rows.includes(i)) {
                result.push(this.netMatrix[i]);
            }
        }
        return result;
    }

    private findNextValue(currentColumn: number, rows: number[], end: number): number[] {
        if (currentColumn === this.netMatrix[0].length) {
            return rows;
        }

        for (let i = 0; i < end; i++) {
            if (this.netMatrix[i][currentColumn] === -1) {
                for (let j = 1; j < this.netMatrix[0].length - 1; j++) {
                    if (this.netMatrix[i][j] === 1) {
                        rows.push(i);
                        this.findNextValue(j, rows, end);
                    }
                }
            }
        }
        return rows;
    }

    private findTransitionStart(column: number): number {
        for (let i = 0; i < this.netMatrix.length; i++) {
            if (this.netMatrix[i][column] === -1) {
                return i;
            }
        }
    }

    private findPlacesStart(row: number): number[] {
        const placesStarts = [];
        for (let i = 0; i < this.netMatrix[0].length; i++) {
            if (this.netMatrix[row][i] === 1) {
                placesStarts.push(i);
            }
        }
        return placesStarts;
    }

    private findStartAndEndOfSubnets(): {start: number, end: number} {
        let start = -1;
        let end = -1;
        for (let i = 0; i < this.netMatrix.length; i++) {
            let countOnes = 0;
            let countNegativeOnes = 0;
            for (let j = 0; j < this.netMatrix[0].length; j++) {
                if (this.netMatrix[i][j] === 1) {
                    countOnes += 1;
                }
                if (this.netMatrix[i][j] === -1) {
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

    private convertNetMatrixToMainMinimizedMatrix(): MinimizedNet {
        const minimizedNetInitial = this.createInitialMainMatrix();
        const minimizedNetFinal: number[][] = [];

        const startRow = this.findRowOfDoubles(minimizedNetInitial, 1);
        const endRow = this.findRowOfDoubles(minimizedNetInitial, -1);

        const indexesOfOnes = this.findIndexesOfValues(minimizedNetInitial, 1);
        const indexesOfZeros = this.removeExtraZeroIndexes(minimizedNetInitial, endRow, this.findIndexesOfValues(minimizedNetInitial, 0));

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
        const {start, end} = this.findStartAndEndOfSubnets();

        return new MinimizedNet(minimizedNetFinal, [start, end]);
    }

    private createInitialMainMatrix(): number[][] {
        const minimizedNetInitial = [];
        const {start, end} = this.findStartAndEndOfSubnets();
        for (let i = 0; i <= start; i++) {
            minimizedNetInitial.push(this.netMatrix[i]);
        }

        for (let i = end; i < this.netMatrix.length; i++) {
            minimizedNetInitial.push(this.netMatrix[i]);
        }
        return minimizedNetInitial;
    }

    private findRowOfDoubles(netMatrix: number[][], value: number): number {
        let row = -1;
        for (let i = 0; i < netMatrix.length; i++) {
            let countValues = 0;
            for (let j = 0; j < netMatrix[0].length; j++) {
                if (netMatrix[i][j] === value) {
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

    private findIndexesOfValues(minimizedNetInitial: number[][], value: number): number[] {
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

    private removeExtraZeroIndexes(minimizedNetInitial: number[][], endRow: number, indexesOfZeros: number[]): number[] {
        for (let i = 0; i < minimizedNetInitial[endRow].length; i++) {
            if (minimizedNetInitial[endRow][i] === 1 && indexesOfZeros.includes(i)) {
                indexesOfZeros.splice(indexesOfZeros.indexOf(i), 1);
                alert('here');
            }
        }
        return indexesOfZeros;
    }
}
