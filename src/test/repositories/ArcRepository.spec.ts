import { ArcRepository } from './../../app/core/repositories/ArcRepository';

describe('ArcRepository', () => {
  let uut: ArcRepository;

  beforeEach(async () => {
    uut = new ArcRepository();
  });

  // it('should create arc with specified id', () => {
    // const arcSpy = new Arc();
    // spyOn(arcSpy, 'create').and.callFake( () => 1);
    // uut.create('1');
    // expect(arcSpy.create).toHaveBeenCalled();
  // });
});
