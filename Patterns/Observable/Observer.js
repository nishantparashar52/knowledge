export default class Observer {
    constructor() {
        this.observers = [];
    }
    add(observer) {
        this.observers.push(observer);
    }
    remove(observer) {
        let index = this.observers.findIndex(observer);
        this.observers.splice(index, 1);
    }
    notify(message) {
        this.observers.forEach(observer => observer.update(message))
    }
}