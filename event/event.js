var event = require('events')
var eventEmits = new event.EventEmitter();

function eventHandler() {
    console.log('eventHandler called');
}

eventEmits.on('event', eventHandler);

eventEmits.emit('event');