class Character {
    constructor(name, type, health, strength) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.strength = strength;
    }
  
    attack() {
      console.log(`${this.name} attacks with strength ${this.strength}`);
    }
  }
  
  class Warrior extends Character {
    constructor(name) {
      super(name, 'warrior', 100, 10);
    }
  }
  
  class Mage extends Character {
    constructor(name) {
      super(name, 'mage', 80, 8);
    }
  }

  class CharacterFactory {
    createCharacters(name, type) {
        switch(type) {
            case 'warrior':
                return new Warrior(name);
            case 'mage':
                return new Mage(name);
            default:
                throw new Error('not there');
        }
    }
  }

  const factory = new CharacterFactory();
  const warrior = factory.createCharacters('Nishant', 'warrior');
  const mage = factory.createCharacters('Urvashi', 'mage');