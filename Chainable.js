class Chainable {
    constructor() {
        this.val = 0;
    }
    firstMethod() {
        console.log('first method');
        return this;
    }
    add(a) {
        this.val = this.val + a;
        return this;
    }
    subtract(a) {
        this.val = this.val - a;
        return this;
    }
    multiply(a) {
        this.val = this.val * a;
        return this;
    }
}

var a1 = new Chainable();
a1.firstMethod()
.add(1,3)
.multiply(2,4)
.subtract(10,2)