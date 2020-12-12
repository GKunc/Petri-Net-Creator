import { Place } from './../../app/core/models/Place';

describe('Place', () => {
    let uut: Place;

    beforeEach(async () => {
        uut = new Place();
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

});
