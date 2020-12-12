import { MinimizedNet } from 'src/app/core/models/MinimizedNet';

describe('MinimizedNet', () => {
    let uut: MinimizedNet;

    it('should check if correct data are set in constructor (empty arrays)', () => {
        uut = new MinimizedNet([], [], []);

        expect(uut.net).toEqual([]);
        expect(uut.originalPlaces).toEqual([]);
        expect(uut.originalTransitions).toEqual([]);
    });

    it('should check if correct data are set in constructor', () => {
        const net = [[0, 1, -1], [0, 0, 1], [1, -1, -1]];
        const originalTransitions = [1, 3, 4, 5];
        const originalPlaces = [1, 3, 4];
        uut = new MinimizedNet(net, originalTransitions, originalPlaces);

        expect(uut.net).toEqual(net);
        expect(uut.originalPlaces).toEqual(originalPlaces);
        expect(uut.originalTransitions).toEqual(originalTransitions);
    });

    it('should check if correct data are set in constructor with not unique values', () => {
        const net = [[0, 1, -1], [0, 0, 1], [1, -1, -1]];
        const originalTransitions = [1, 3, 3, 5];
        const originalPlaces = [1, 3, 4, 4];
        uut = new MinimizedNet(net, originalTransitions, originalPlaces);

        expect(uut.net).toEqual(net);
        expect(uut.originalPlaces).toEqual(originalPlaces);
        expect(uut.originalTransitions).toEqual(originalTransitions);
    });
});
