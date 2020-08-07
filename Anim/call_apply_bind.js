function Product(name, value) {
    this.name = name;
    this.value = value;
}

function Vendor(name, value) {
    Product.call(this, name, value);
}

new Vendor('nishant', '5').value


function greet() {
    console.log(this.name);
}

var obj = {name: 'nishant'}

greet.apply(obj);



var module = {
    name: 'nishant',
    getName: function () {
        return this.name;
    }
}

module.getName();