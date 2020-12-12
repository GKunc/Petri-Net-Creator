import { TokenRepository } from '../../app/core/repositories/TokenRepository';
import { Token } from '../../app/core/models/Token';


export function createFakeTokens(numberOfTokens: number): Token[] {
  const tokens = [];
  for (let i = 1; i <= numberOfTokens; i++) {
    const token = new Token();
    token.setID(i);
    tokens.push(token);
  }

  return tokens;
}

describe('TokenRepository', () => {
  let uut: TokenRepository;
  beforeEach(async () => {
    uut = new TokenRepository();
  });

  it('should return all tokens', () => {
    // Arrange
    uut.setElements(createFakeTokens(3));

    // Act
    const tokens = uut.getAll();

    // Assert
    expect(tokens.length).toBe(3);
  });

  it('should return found', () => {
    // Arrange
    uut.setElements(createFakeTokens(3));

    // Act
    const token = uut.getByID(2);

    // Assert
    expect(uut.getAll().length).toBe(3);
    expect(token.getID()).toBe(2);
  });

  it('should return undefined when token does not exist', () => {
    // Arrange
    uut.setElements(createFakeTokens(3));

    // Act
    const token = uut.getByID(5);

    // Assert
    expect(uut.getAll().length).toBe(3);
    expect(token).toBe(undefined);
  });

  it('should remove token', () => {
    // Arrange
    uut.setElements(createFakeTokens(3));

    // Act
    uut.remove(1);

    // Assert
    expect(uut.getAll().length).toBe(2);
  });

  it('should remove all tokens', () => {
    // Arrange
    uut.setElements(createFakeTokens(3));

    // Act
    uut.removeAll();

    // Assert
    expect(uut.getAll().length).toBe(0);
  });

});
