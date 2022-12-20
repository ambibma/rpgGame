export { Entity, Mobile };

class Entity {
  constructor(level=1, name='Something', health=1){
    this.level = level;
    this.name = name;
    this.health = health;
    this.location = null;
  }
  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
  }
  die() {
    // display message that something was destroyed
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
//action: [movement, attack, takeDamage, death, flea, pickpocket]
//name: 'Jared'


//testEnemy = new Entity('bob', 100)


/*
Location: City
  then building/area



*/