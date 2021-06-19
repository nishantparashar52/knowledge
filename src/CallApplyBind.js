// call apply bind

let name1 = {
    firstName: 'nisahnt',
    lastName: 'parashar'
};

const fullName = function(place, place2) {
    console.log(this.firstName+ ',' + this.lastName + ', ' + place, ', second'+ place2);
}
fullName.call(name1, 'delhi', 'chandigarh');
fullName.apply(name1, ['delhi', 'mohali']);

const bindFullName = fullName.bind(name1, 'delhi', 'new Delhi bind');
console.log(bindFullName());


// polyfill mybind

Function.prototype.myBind = function (...args) {
    let context = this,
    params = args.slice(1);
    return function () {
        context.apply(args[0], params);
    }
}
const polyfillBind = fullName.myBind(name1, 'delhi', 'aslong');
console.log(polyfillBind('uttrakhand'));
