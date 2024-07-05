import Observer from './Observer';
import Subject from './Subject';
Observer.prototype.setMeasurement = function(t,h,p) {
    this.t = t;
    this.h = h;
    this.p = p;
}
Observer.prototype.receiveMessage = function(message) {
    console.log(message);
    this.notify(message);
}

class Temperature extends Subject {
    update(t, h, p) {
        console.log(t);
    }
}


class Humidity extends Subject {
    update(t, h, p) {
        console.log(h);
    }
}

class Pressure extends Subject {
    update(t, h, p) {
        console.log(p);
    }
}

let weatherData = new Observer();
let t = new Temperature();
let h = new Humidity();
let p = new Pressure();

weatherData.add(t);
weatherData.add(h);
weatherData.add(p);
weatherData.setMeasurement(10, 20, 30);

