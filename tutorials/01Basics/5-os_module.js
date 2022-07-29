/*jshint esversion: 6*/

/**
 * 1. os module is demoed in this sample
 * 2. Note the template string based print ``, which is similar to format command
 * 3. Introduction to async file reading also is given 
 */

const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const user = os.userInfo();

const currentOS = {
    name:os.type(),
    relaes:os.release(),
    user: user,
};

//Template string ES6 ECMAScript 6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(currentOS);


