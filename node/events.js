

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLoaded', arg => {
    console.log('message loaded', arg);
});

emitter.emit('messageLoaded', {name: 'nishant'});