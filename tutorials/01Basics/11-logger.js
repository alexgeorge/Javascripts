/*jshint esversion: 6*/

/**
 * 1. Logger is based on events sinalling
 * 2. Using the module 10-events_logger
 */

//Logger class is defined inside the logger module
const Logger = require('./10-events_logger');
const logger = new Logger();

//Register a listner. This call back will kick in when we
//emit the event
logger.on('messageLogged', (arg) => {
    console.log('logging event is triggered. data:', arg); 
});

logger.on('logging', (arg) => {
    console.log('Triggered another event from Logger. Data:', arg);
});

logger.log('Test message from Alex!');
logger.trigger("Another message triggered from logger!");

