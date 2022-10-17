import Character from './character';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman', attack = 25, defens = 25) {
    super(name, type, attack, defens);
  }
}
