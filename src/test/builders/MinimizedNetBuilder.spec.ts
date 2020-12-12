import { MinimizedNet } from 'src/app/core/models/MinimizedNet';
import { MinimizedNetBuilder } from './../../app/core/builders/MinimizedNetBuilder';

describe('MinimizedNetBuilder', () => {
    let uut: MinimizedNetBuilder;

    beforeEach(async () => {
        const netMatrix = [
            [-1, 1, 0, 1, 0, 0],
            [0, -1, 1, 0, 0, 0],
            [0, 0, 0, -1, 1, 0],
            [0, 0, -1, 0, -1, 1]
            ];

        uut = new MinimizedNetBuilder(netMatrix);
    });

    it('should create main matrix', () => {
        const expectedMainMatrix = [[ -1, 1, 1, 0 ], [ 0, -1, -1, 1 ]];
        const expectedOriginalTransitions = [0, 3];
        const expectedOriginalPlaces = [0, 5];
        const resultMainMatrix = uut.createMainMatrix();
        expect(resultMainMatrix).toEqual(new MinimizedNet(expectedMainMatrix, expectedOriginalTransitions, expectedOriginalPlaces));
    });


    it('should create subnet matrices', () => {
        const expectedSubnetMatrix1 = [[ -1, 1]];
        const expectedOriginalTransitions1 = [1];
        const expectedOriginalPlaces1 = [1, 2];
        const expectedMatrix1 = new MinimizedNet(expectedSubnetMatrix1, expectedOriginalTransitions1, expectedOriginalPlaces1);

        const expectedSubnetMatrix2 = [[ -1, 1]];
        const expectedOriginalTransitions2 = [2];
        const expectedOriginalPlaces2 = [3, 4];
        const expectedMatrix2 = new MinimizedNet(expectedSubnetMatrix2, expectedOriginalTransitions2, expectedOriginalPlaces2);

        const resultSubnetMatrices = uut.createSubnetMatrices();

        expect(resultSubnetMatrices[0]).toEqual(expectedMatrix1);
        expect(resultSubnetMatrices[1]).toEqual(expectedMatrix2);
    });
});
