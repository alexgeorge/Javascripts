/*jshint esversion: 6*/

/**
 * 1. Shows sync reading and writing. 
 * 2. Drawback of the sync:- 
 * 3. This task is blocking and the
 * node will be blocked with this module
 *
 */

 const {readFileSync, writeFileSync} = require('fs');

 console.log('start');
 const first = readFileSync('./01Basics/content/first.txt','utf8');
 const second = readFileSync('./01Basics/content/second.txt','utf8');
 
 writeFileSync('./01Basics/content/outputfile.txt', `result file: ${first}, ${second}`);
 
 console.log(first,second);
 console.log('done with the task');
 console.log('starting next one!');
 