export { Entity, Mobile };

class Entity {
  constructor(name='Something', health=1){
    this.name = name;
    this.health = health;
  }
}

class Mobile extends Entity {
  constructor(name, health) {
    super(name, health);
    this.inventory = [];
  }
}
//health: 100
//inventory: ['stick']
//action: [movement, attack, takeDamage, death, flea,]
//name: 'Jared'


//testEnemy = new Entity('bob', 100)