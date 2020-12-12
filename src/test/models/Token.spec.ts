import { Token } from './../../app/core/models/Token';

describe('Token', () => {
    let uut: Token;

    beforeEach(async () => {
        uut = new Token();
        uut.setID(2);
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
