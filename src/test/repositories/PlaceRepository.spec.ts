import { PlaceRepository } from '../../app/core/repositories/PlaceRepository';
import { Place } from '../../app/core/models/Place';


export function createFakePlaces(numberOfPlaces: number): Place[] {
  const places = [];
  for (let i = 1; i <= numberOfPlaces; i++) {
    const place = new Place();
    place.setID(i);
    places.push(place);
  }

  return places;
}

describe('PlaceRepository', () => {
  let uut: PlaceRepository;

  beforeEach(async () => {
      uut = new PlaceRepository();
    });

  it('should return all places', () => {
    // Arrange
    uut.setElements(createFakePlaces(3));

    // Act
    const places = uut.getAll();

    // Assert
    expect(uut.getAll().length).toBe(3);
  });

  it('should remove all places', () => {
    // Arrange
    uut.setElements(createFakePlaces(3));

    // Act
    const places = uut.removeAll();

    // Assert
    expect(uut.getAll().length).toBe(0);
  });

  it('should get place by id', () => {
    // Arrange
    uut.setElements(createFakePlaces(3));

    // Act
    const foundPlace = uut.getByID(2);

    // Assert
    expect(uut.getAll().length).toBe(3);
    expect(foundPlace.getID()).toBe(2);
  });

  it('should delete place by id', () => {
    // Arrange
    uut.setElements(createFakePlaces(3));

    // Act
    uut.remove(2);
    const deletedPlace = uut.getByID(2);

    // Assert
    expect(uut.getAll().length).toBe(2);
    expect(deletedPlace).toBe(undefined);
  });

});
