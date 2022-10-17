import Bowman from '../js/characters/bowman';
import Character from '../js/characters/character';

describe('Создание персонажа', () => {
  test('проверка характеристик', () => {
    try {
      const recived = new Bowman('Nik');
      const expected = {
        name: 'Nik',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка длины имени менее 2', () => {
    try {
      const recived = new Bowman('Q');
      const expected = {
        name: 'Q',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка длины имени более 10', () => {
    try {
      const recived = new Bowman('Qwertyasdfg');
      const expected = {
        name: 'Qwertyasdfg',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка типа поля name', () => {
    try {
      const recived = new Bowman(456);
      const expected = {
        name: 456,
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: установите строковое значение полю name').toContain(Error.message);
    }
  });

  test('проверка типа персонажа', () => {
    try {
      const recived = new Bowman('Tady', 'Boy');
      const expected = {
        name: 'Tady',
        type: 'Boy',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(recived).toEqual(expected);
    } catch (e) {
      expect('Ошибка: тип персонажа не соответствует заданному').toContain(e.message);
    }
  });
});

test('Проверяем levelUp', () => {
  const king = new Character('King', 'Swordsman', 15, 25, 15, 1);
  const expected = {
    name: 'King',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 18,
    defence: 30,
  };
  expect(king.levelUp()).toEqual(expected);
});

test('Проверяем levelUp', () => {
  try {
    const king = new Character('King', 'Swordsman', 15, 25, 0, 1);
    const expected = {
      name: 'King',
      type: 'Swordsman',
      health: 0,
      level: 2,
      attack: 18,
      defence: 30,
    };
    expect(king.levelUp()).toEqual(expected);
  } catch (e) {
    expect('Ошибка: нельзя повысить левел умершего').toContain(e.message);
  }
});

test('Проверяем damage', () => {
  const king = new Character('King', 'Swordsman', 15, 25, 100, 1);
  const expected = {
    name: 'King',
    type: 'Swordsman',
    health: 85,
    level: 1,
    attack: 15,
    defence: 25,
  };
  expect(king.damage(20)).toEqual(expected);
});

test('Проверяем damage', () => {
  try {
    const king = new Character('King', 'Swordsman', 15, 25, 0, 1);
    const expected = {
      name: 'King',
      type: 'Swordsman',
      health: 0,
      level: 2,
      attack: 18,
      defence: 30,
    };
    expect(king.damage(20)).toEqual(expected);
  } catch (e) {
    expect('Ошибка: нельзя убить умершего').toContain(e.message);
  }
});
