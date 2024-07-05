let animal = {
    name: 'nishant',
    eat() {
        console.log(`this is ${this.name}`)
    }
}

let rabbit = {
    name: 'Rabbit',
    __proto__: animal,
    eat() {
        console.log(super.eat());
    }
}

let longEar = {
    name: 'long ear',
    __proto__: rabbit,
    eat() {
        console.log(super.eat())
    }
}

rabbit.eat();

longEar.eat();

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit1 = new Rabbit();

// 
// Rabbit.prototype.eats = false;

 delete rabbit1.eats;

alert( rabbit1.eats ); // true