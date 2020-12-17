import { MinimizedNetBuilder } from './../../app/core/builders/MinimizedNetBuilder';
import { SignalRepository } from './../../app/core/repositories/SignalRepository';
import { TokenRepository } from './../../app/core/repositories/TokenRepository';
import { ArcRepository } from './../../app/core/repositories/ArcRepository';
import { TransitionRepository } from './../../app/core/repositories/TransitionRepository';
import { PlaceRepository } from './../../app/core/repositories/PlaceRepository';
import { NetRepository } from './../../app/core/repositories/NetRepository';
import { mock, instance } from 'ts-mockito';
import { MinimizedNet } from 'src/app/core/models/MinimizedNet';

describe('NetRepository', () => {
    let uut: NetRepository;

    let placeRepositoryMock: PlaceRepository;
    let placeRepositoryInstance: PlaceRepository;

    let transitionRepositoryMock: TransitionRepository;
    let transitionRepositoryInstance: TransitionRepository;

    let arcRepositoryMock: ArcRepository;
    let arcRepositoryInstance: ArcRepository;

    let tokenRepositoryMock: TokenRepository;
    let tokenRepositoryInstance: TokenRepository;

    let signalRepositoryMock: SignalRepository;
    let signalRepositoryInstance: SignalRepository;

    let minimizedNetBuilderMock: MinimizedNetBuilder;
    let minimizedNetBuilderInstance: MinimizedNetBuilder;

    beforeEach(async () => {
        placeRepositoryMock = mock<PlaceRepository>();
        placeRepositoryInstance = instance(placeRepositoryMock);

        transitionRepositoryMock = mock<TransitionRepository>();
        transitionRepositoryInstance = instance(transitionRepositoryMock);

        arcRepositoryMock = mock<ArcRepository>();
        arcRepositoryInstance = instance(arcRepositoryMock);

        tokenRepositoryMock = mock<TokenRepository>();
        tokenRepositoryInstance = instance(tokenRepositoryMock);

        signalRepositoryMock = mock<SignalRepository>();
        signalRepositoryInstance = instance(signalRepositoryMock);

        minimizedNetBuilderMock = mock<MinimizedNetBuilder>();
        minimizedNetBuilderInstance = instance(minimizedNetBuilderMock);

        uut = new NetRepository(
            placeRepositoryInstance,
            transitionRepositoryInstance,
            arcRepositoryInstance,
            tokenRepositoryInstance,
            signalRepositoryInstance);
    });

    it('should create place  in specified location', () => {
        spyOn(placeRepositoryInstance, 'create').and.stub();
        uut.createPlace(10, 10);
        expect(placeRepositoryInstance.create).toHaveBeenCalledWith(10, 10);
    });

    it('should create transition in specified location', () => {
        spyOn(transitionRepositoryInstance, 'create').and.stub();
        uut.createTransition(10, 10);
        expect(transitionRepositoryInstance.create).toHaveBeenCalledWith(10, 10);
    });

    it('should create token in specified place', () => {
        spyOn(placeRepositoryInstance, 'create').and.stub();
        spyOn(tokenRepositoryInstance, 'create').and.stub();
        uut.createPlace(10, 10);
        uut.createToken(1);
        expect(placeRepositoryInstance.create).toHaveBeenCalledWith(10, 10);
        expect(tokenRepositoryInstance.create).toHaveBeenCalledWith(1, '', false);
    });

    it('should create arc between place and transition', () => {
        spyOn(placeRepositoryInstance, 'create').and.stub();
        spyOn(transitionRepositoryInstance, 'create').and.stub();
        spyOn(arcRepositoryInstance, 'create').and.stub();
        uut.createPlace(10, 10);
        uut.createTransition(10, 10);
        uut.createArc('place1-transition1');
        expect(placeRepositoryInstance.create).toHaveBeenCalledWith(10, 10);
        expect(transitionRepositoryInstance.create).toHaveBeenCalledWith(10, 10);
    });

    it('should add signal to repository', () => {
        spyOn(signalRepositoryInstance, 'addSignal').and.stub();
        uut.addSignal();
        expect(signalRepositoryInstance.addSignal).toHaveBeenCalledTimes(1);
    });

    it('should remove signal to repository', () => {
        spyOn(signalRepositoryInstance, 'removeSignal').and.stub();
        uut.removeSignal();
        expect(signalRepositoryInstance.removeSignal).toHaveBeenCalledTimes(1);
    });

    it('should update selected signals', () => {
        spyOn(signalRepositoryInstance, 'updateSelectedSignals').and.stub();
        uut.updateSelectedSignals([1, 3]);
        expect(signalRepositoryInstance.updateSelectedSignals).toHaveBeenCalledWith([1, 3], []);
    });

    it('should remove all elements', () => {
        uut.removeAllElements();

        expect(uut.netMatrix).toEqual([]);
        expect(uut.isMatrixBuild).toEqual(false);
        expect(uut.isNetMinimized).toEqual(false);
        expect(uut.netMatrix).toEqual([]);
        expect(uut.mainMinimizedMatrix).toEqual(new MinimizedNet([], [], []));
    });
});
