const EventsEmmiter = require('events');
const event = new EventsEmmiter;

event.on('click', () => {
    console.log('event fired directly');
})
event.on('checkout', (sc, msg) => {
    console.log(`event fired and status code ${sc} and connection is ${msg}`);
})

event.emit('checkout', 200, 'ok')
event.emit('click');