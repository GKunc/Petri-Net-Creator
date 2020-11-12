import { TransitionRepository } from './../../app/core/repositories/TransitionRepository';
import { Transition } from './../../app/core/models/Transition';


export function createFakeTransitions(numberOfTransitions: number): Transition[] {
  const transitions = [];
  for (let i = 1; i <= numberOfTransitions; i++) {
    const transition = new Transition();
    transition.id = i;
    transitions.push(transition);
  }

  return transitions;
}

describe('TransitionRepository', () => {
  let uut: TransitionRepository;
  beforeEach(async () => {
    uut = new TransitionRepository();
  });

  it('should return all tokens', () => {
    // Arrange
    uut.setTransitions(createFakeTransitions(3));

    // Act
    const transitions = uut.getAll();

    // Assert
    expect(transitions.length).toBe(3);
  });

  it('should return found', () => {
    // Arrange
    uut.setTransitions(createFakeTransitions(3));

    // Act
    const transition = uut.getByID(2);

    // Assert
    expect(uut.getAll().length).toBe(3);
    expect(transition.getID()).toBe(2);
  });

  it('should return undefined when token does not exist', () => {
    // Arrange
    uut.setTransitions(createFakeTransitions(3));

    // Act
    const transition = uut.getByID(5);

    // Assert
    expect(uut.getAll().length).toBe(3);
    expect(transition).toBe(undefined);
  });

  it('should remove token', () => {
    // Arrange
    uut.setTransitions(createFakeTransitions(3));

    // Act
    uut.remove(1);

    // Assert
    expect(uut.getAll().length).toBe(2);
  });

  it('should remove all tokens', () => {
    // Arrange
    uut.setTransitions(createFakeTransitions(3));

    // Act
    uut.removeAll();

    // Assert
    expect(uut.getAll().length).toBe(0);
  });

});
