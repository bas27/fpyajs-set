import Bowman from '../js/characters/bowman';
import Daemon from '../js/characters/daemon';
import Team from '../js/teamSet';

const daemon1 = new Daemon('Scot');
const bowman1 = new Bowman('Good');
const bowman2 = new Bowman('Ali');

const expected = new Set();

test('Проверка добавления персонажа в команду', () => {
  const team1 = new Team();
  expected.add(bowman1);
  expect(team1.add(bowman1)).toEqual(expected);
});

test('Проверка добавления дубликата персонажа в команду', () => {
  try {
    expected.add(bowman1);
    const team1 = new Team();
    team1.add(bowman1);
    expect(team1.add(bowman1)).toEqual(expected);
  } catch (Error) {
    expect('Ошибка: данный объект уже в команде').toContain(Error.message);
  }
});

test('Проверка добавления нескольких персонажей в команду', () => {
  const team1 = new Team();
  expected.add(bowman1).add(daemon1).add(bowman2).add(bowman1);
  expect(team1.addAll(bowman1, daemon1, bowman2, bowman1)).toEqual(expected);
});

test('Преобразование коллекции Set в массив', () => {
  const team1 = new Team();
  expected.add(bowman1).add(daemon1).add(bowman2).add(bowman1);
  team1.addAll(bowman1, daemon1, bowman2, bowman1);
  expect(team1.toArray()).toEqual([...expected]);
});
