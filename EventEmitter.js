class EventEmitter1{
    constructor(){
        this.callbacks = {}
    }

    subsribe(event, cb){
        if(!this.callbacks[event]) this.callbacks[event] = [];
        this.callbacks[event].push(cb);
        return () => {
            this.callbacks[event] = this.callbacks[event] && this.callbacks[event].filter(ev => cb !== ev)
        }
    }

    emit(event, data){
        let cbs = this.callbacks[event]
        if(cbs){
            cbs.forEach(cb => {
                cb.call(null, data)
            })
        }
    }
}

const i = new EventEmitter1();
const me = i.subsribe('message1', ev => console.log(`hello ${ev}`))
i.emit('message1', 'Nishant');

    