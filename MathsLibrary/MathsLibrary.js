function Maths(initial) {
    let result = initial;
    this.getResult = function() {
        return result;
    }
    this.setResult = function(a) {
        result = a;
    }
}

Maths.prototype.add = function(...data) {
    const result = data.reduce((acc, curr) => acc + curr, this.getResult());
    this.setResult(result);
    return this;
}
Maths.prototype.subtract = function(...data) {
    const result = data.reduce((acc, curr) => acc - curr, this.getResult());
    this.setResult(result);
    return this;
}
Maths.prototype.multiply = function(data) {
    const result = this.getResult() * data;
    this.setResult(result);
    return this;
}
Maths.prototype.divide = function(data) {
    const result = this.getResult() / data;
    this.setResult(result);
    return this;
}
Maths.prototype.square = function() {
    const result = this.getResult() ** 2;
    this.getResult(result);
    return this;
}
let math = new Maths(10);
math.add(1,2,3,4,5)
.subtract(2,3)
.multiply(5)
.divide(2)

console.log(math.getResult())