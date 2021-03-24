export default class Character {
  constructor(name, type) {
    const validType = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validType.includes(type)) {
      throw new Error('Введите один из доступных типов');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать минимум 2 символа и максимум 10 символов');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Вы не можете повысить левел умершего');
     }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
