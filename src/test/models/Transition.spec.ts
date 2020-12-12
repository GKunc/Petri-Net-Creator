import { Transition } from './../../app/core/models/Transition';

describe('Transition', () => {
    let uut: Transition;

    beforeEach(async () => {
        uut = new Transition();
        uut.setID(2);
    });

    it('should update coordinates', () => {
        uut.updateCoordinates(100, 50);
        expect(uut.getXPosition()).toEqual(100);
        expect(uut.getYPosition()).toEqual(50);
    });

    it('shoud return correct ID', () => {
        const id = uut.getID();
        expect(id).toEqual(2);
    });

    it('shoud set new ID', () => {
        uut.setID(12);
        const id = uut.getID();
        expect(id).toEqual(12);
    });

    it('shoud add signals to transition', () => {
        const newSignals = [1, 4, 2];
        uut.addSignals(newSignals);
        const signals = uut.getSignals();
        expect(signals).toEqual(newSignals);
    });

});
