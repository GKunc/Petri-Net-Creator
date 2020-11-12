import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MinimizedNetBuilder {
    createMainMatrix(netMatrix: number[][]): number[][] {
        alert('Create Main Matrix');
        return [[1, 2, 3],
                [2, 3, 4],
                [3, 4, 5]];
    }

    createSubnetMatrices(netMatrix: number[][]): number[][][] {
        alert('Create Main Matrix');
        return [];

    }
}
