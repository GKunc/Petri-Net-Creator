import { MinimizedNet } from './../models/MinimizedNet';
export class MinimizedNetBuilder {
    netMatrix: number[][];

    constructor(netMatrix: number[][]) {
        this.netMatrix = netMatrix;
    }

    createMainMatrix(): MinimizedNet {
        let minimizedNetInitial = this.createInitialMainMatrix();
        const minimizedNetFinal: number[][] = [];

        const startRow = this.findRowOfDoubles(minimizedNetInitial, 1);
        const endRow = this.findRowOfDoubles(minimizedNetInitial, -1);
        const indexesOfOnes = this.findIndexesOfValues(minimizedNetInitial, 1);
        const indexesOfNegativeOnes = this.findIndexesOfValues(minimizedNetInitial, -1);
        minimizedNetInitial = this.removeEmptyColumns(minimizedNetInitial);

        for (let i = 0; i < minimizedNetInitial.length; i++) {
            const row = [];
            for (let j = 0; j < minimizedNetInitial[0].length; j++) {
                if (i === startRow) {
                    if (indexesOfOnes.includes(j)) {
                        row.push(1);
                    } else if (indexesOfNegativeOnes.includes(j)) {
                        // console.log(j)
                        continue;
                    } else {
                        row.push(minimizedNetInitial[i][j]);
                    }
                } else if (i === endRow) {
                    if (indexesOfNegativeOnes.includes(j)) {
                        row.push(-1);
                    } else if (indexesOfOnes.includes(j)) {
                        continue;
                    } else {
                        row.push(minimizedNetInitial[i][j]);
                    }
                } else {
                    if (indexesOfNegativeOnes.includes(j)) {
                        continue;
                    } else {
                        row.push(minimizedNetInitial[i][j]);
                    }
                }
            }
            minimizedNetFinal.push(row);
        }
        
        const {start, end} = this.findStartAndEndOfSubnets();

        return new MinimizedNet(minimizedNetFinal, this.findOriginalTransitions(start, end), this.findOriginalPlaces(start, end));
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
        const {transitions, places} = this.findNextValue(startTransition, [], [], end);

        const subnet = this.subnetMatrix(transitions);
        const columns = this.columnsToDelete(startPlace, transitions);

        for (let i = 0; i < subnet.length; i++) {
            const rowFinal = [];
            for (let j = 0; j < subnet[0].length; j++) {
                if (!columns.includes(j)) {
                    rowFinal.push(subnet[i][j]);
                }
            }
            subnetFinal.push(rowFinal);
        }
        return new MinimizedNet(subnetFinal, transitions, places);
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

    private findNextValue(
        currentColumn: number, transitions: number[], places: number[], end: number): {transitions: number[], places: number[]} {
        if (currentColumn === this.netMatrix[0].length) {
            return {transitions, places};
        }

        if (!places.includes(currentColumn)) {
            places.push(currentColumn);
        }

        for (let i = 0; i < end; i++) {
            if (this.netMatrix[i][currentColumn] === -1) {
                for (let j = 1; j < this.netMatrix[0].length - 1; j++) {
                    if (this.netMatrix[i][j] === 1) {
                        if (!transitions.includes(i)) {
                        transitions.push(i);
                        }
                        this.findNextValue(j, transitions, places, end);
                    }
                }
            }
        }
        transitions.sort();
        places.sort();
        return {transitions, places};
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

    private findOriginalTransitions(start: number, end: number): number[] {
        const originalTransitions: number[] = [];

        for (let i = 0; i <= start; i++) {
            originalTransitions.push(i);
        }
        for (let i = end; i < this.netMatrix.length; i++) {
            originalTransitions.push(i);
        }
        return originalTransitions;
    }

    private findOriginalPlaces(start: number, end: number): number[] {
        const originalPlaces: number[] = [];
        for (let i = 0; i < start; i++) {
            for (let j = 0; j < this.netMatrix[0].length; j++) {
                if (this.netMatrix[i][j] !== 0 && !originalPlaces.includes(j)) {
                    originalPlaces.push(j);
                }
            }
        }

        for (let j = 0; j < this.netMatrix[0].length; j++) {
            if (this.netMatrix[start][j] === -1 && !originalPlaces.includes(j)) {
                originalPlaces.push(j);
            }
        }

        for (let i = end + 1; i < this.netMatrix.length; i++) {
            for (let j = 0; j < this.netMatrix[0].length; j++) {
                if (this.netMatrix[i][j] !== 0 && !originalPlaces.includes(j)) {
                    originalPlaces.push(j);
                }
            }
        }

        for (let j = 0; j < this.netMatrix[0].length; j++) {
            if (this.netMatrix[end][j] === 1 && !originalPlaces.includes(j)) {
                originalPlaces.push(j);
            }
        }

        return originalPlaces;
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

        for (let i = 1; i < minimizedNetInitial[row].length; i++) {
            if (minimizedNetInitial[row][i] === value) {
                indexes.push(i);
            }
        }

        return indexes;
    }

    private removeEmptyColumns(minimizedNetInitial: number[][]): number[][] {
        const minimizedNet = [];
        const emptyColumns = [];
        for (let i = 0; i < minimizedNetInitial[0].length; i++) {
            if (minimizedNetInitial[0][i] === 0) {
                emptyColumns.push(i);
            }
        }

        for (let i = 1; i < minimizedNetInitial.length; i++) {
            for (let j = 0; j < minimizedNetInitial[0].length; j++) {
                if (minimizedNetInitial[i][j] !== 0) {
                    emptyColumns.splice(emptyColumns.indexOf(j), 1);
                }
            }
        }

        for (let i = 0; i < minimizedNetInitial.length; i++) {
            const row = [];
            for (let j = 0; j < minimizedNetInitial[0].length; j++) {
                if (emptyColumns.includes(j)) {
                    continue;
                } else {
                    row.push(minimizedNetInitial[i][j]);
                }
            }
            minimizedNet.push(row);
        }

        return minimizedNet;
    }
}
