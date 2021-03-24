import Magician from '../js/Magician';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('Ivan', 'Magician')).toEqual(expectedObject);
});
