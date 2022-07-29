/*jshint esversion: 6*/

/*
This code:- logger module
1. Events and event-handlers
2. This module is exporting the Logger class
3. The 'events' module is used which exposes the EventEmitter class
4. Logger class inherits from the EventEmitter base class
5. This module is used in the  
*/

var url = "http://alexlogger.io/log";

//Since it is a class use Uppercase start
const EventEmitter = require('events');

class Logger extends EventEmitter { 
    log(message) {
        //send http request
        console.log(message);
        //Raise an event named messageLogged with an object as event argument
        this.emit("messageLogged", { id: 1, url: 'http://'});    
    }

    trigger(message){
        console.log(message);
        this.emit('logging', {id: 10, data: 100000023423, temperature: 45});
    }
}

//log function is exported so that others can use require('./logger') to get it
module.exports = Logger;