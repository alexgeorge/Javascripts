/*jshint esversion: 6*/

/**
 * 1. Demonstrate path module which can be used to find file paths
 */

 const path = require('path');

 console.log(path.sep);
 
 const filePath = path.join('/content','subfolder','test.txt');
 console.log(filePath);
 
 const base = path.basename(filePath);
 console.log(base);
 
 const abs = path.resolve(__dirname,'content','subfolder','test.txt');
 console.log(abs);