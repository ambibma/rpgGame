export { Entity, Mobile };

class Entity {
  constructor(level=1, name='Something', health=1){
    this.level = level;
    this.name = name;
    this.health = health;
  }
}

class Mobile extends Entity {
  constructor(level=1, name='Biff', health=100) {
    super(level, name, health);
    this.inventory = [];
  }
}
//health: 100
//inventory: ['stick']
//action: [movement, attack, takeDamage, death, flea,]
//name: 'Jared'


//testEnemy = new Entity('bob', 100)