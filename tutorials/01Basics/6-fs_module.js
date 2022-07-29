/*jshint esversion: 6*/

/**
 * 1. major modules like os and fs are demoed in this sample
 * 2. Note the template string based print ``, which is similar to format command
 * 3. Introduction to async file reading also is given 
 */

 const os = require('os');
 const fs = require('fs');
 
 var totalMemory = os.totalmem();
 var freeMemory = os.freemem();
 
 console.log("Total: " + totalMemory + " Free mem:" +freeMemory);
 
 //Template string ES6 ECMAScript 6
 
 console.log(`Total Memory: ${totalMemory}`);
 console.log(`Total Memory: ${freeMemory}`);
 
 //sync read cur dir 
 const files = fs.readdirSync('./');
 console.log(files);
 
 //async method - preferred
 fs.readdir('d:/Alex/',function(err,files){
     if (err) console.log(err);
     else console.log(files);
 });
 