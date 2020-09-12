// 1st way using new keyword and set in prototype
function Child() {}
Child.prototype = {
    name: 'nishant'
}

function Parent(){}
var proto = new Child();
proto.barName = 'ankit';
Parent.prototype = proto;

var instance = new Parent();
instance.barName; // ankit
instance.name; // nishant

// 2nd way using Object.create
function Child() {}
foo.prototype = {
    name: 'nishant'
}

function Parent(){}
var proto = Object.create(Child.prototype);
proto.barName = 'ankit';
Parent.prototype = proto;
var instance = new Parent();
instance.barName; // ankit
instance.name; // nishant

// Object.create with setting value there only

var foo1 = Object.create(foo.prototype, {barName: {value: 'ankit'}});


// set prototype of
var foo1 = Object.setPrototypeOf({barName: 'ankit'}, foo.prototype);

// __proto__

var foo1 = {barName: 'ankit', __proto__: foo.prototype};
bar.prototype = foo1;
var instance = new bar();
