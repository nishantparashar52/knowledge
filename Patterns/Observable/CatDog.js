import Subject from "./Subject";
import Observer from "./Observer";

class Dog {
    constructor() {

    }
    bark() {
        console.log('dog barks')
    }
}


class Cat {
    constructor() {

    }
    meow() {
        console.log('cat barks')
    }
}

let animal = new Observer();
let d = new Dog();

let c = new Cat();
animal.add(c.meow);

animal.notify();