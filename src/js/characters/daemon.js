import Character from './character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', attack = 10, defens = 40) {
    super(name, type, attack, defens);
  }
}
