class PubSub {
    constructor() {
        this.events = {};
    }
    subsribe(ev, fn) {
        this.events[ev] = this.events[ev] || [];
        this.events[ev].push(fn);
    }
    unsubscribe(ev, fn) {
        if(this.events[ev]) {
            this.events[ev] = this.events[ev].filter(e => e !== fn);
        }
    }
    publish(ev, fn) {
        if(this.events[ev]) {
            this.events[ev].forEach(i => i(fn));
        }
    }
}

export default PubSub;

