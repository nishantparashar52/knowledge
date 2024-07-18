class EventEmitter1{
    constructor(){
        this.callbacks = {}
    }

    subsribe(event, cb){
        if(!this.callbacks[event]) this.callbacks[event] = [];
        this.callbacks[event].push(cb);
        return () => {
            this.callbacks[event] = this.callbacks[event].filter(c => c !== cb)
        }
    }

    emit(event, data){
        let cbs = this.callbacks[event]
        if(cbs){
            cbs.forEach(cb => cb(data))
        }
    }
}

const i = new EventEmitter1();
const me = i.subsribe('message2', ev => console.log(`hello ${ev}`))
const me2 = i.subsribe('message2', ev => console.log(`hello ${ev}`))
i.emit('message2', 'Nishant');
me()

    