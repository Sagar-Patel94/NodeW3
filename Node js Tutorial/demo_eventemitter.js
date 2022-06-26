var event = require('events');
console.log(event, "events");

var eventEmitter = new event.EventEmitter();
console.log(eventEmitter, "eventEmitter");

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');