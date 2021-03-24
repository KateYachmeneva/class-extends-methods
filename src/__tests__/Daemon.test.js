import Daemon from '../js/Daemon';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Ivan', 'Daemon')).toEqual(expectedObject);
});

test('method levelUp shoud level up 1 and upgrade attack and defence by 1.2', () => {
  const expectDaemon = new Daemon('Ivan', 'Daemon');
  expectDaemon.levelUp();
  const expectedObject = {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };

  expect(expectDaemon).toEqual(expectedObject);
});
test('throw error during method levelUp? if health = 0', () => {
  const expectDaemon = new Daemon('Ivan', 'Daemon');
  expectDaemon.health = 0;
  expect(() => expectDaemon.levelUp()).toThrowError();
});
test('method damage(points) shoud upgrade health correctly', () => {
  const expectDaemon = new Daemon('Ivan', 'Daemon');
  expectDaemon.damage(20);
  const expectedObject = {
    name: 'Ivan',
    type: 'Daemon',
    health: 88,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(expectDaemon).toEqual(expectedObject);
});
