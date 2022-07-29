/*jshint esversion: 6*/

/**
 * 1. Shows async reading and writing
 * 2. using callback to act on completion of the read
 * 3. Three levels of nesting callbacks are there in this code (messy code)
 * 4. Async read is not blocking
 */

 const {writeFile, readFile} = require('fs');
 console.log('start');

 let fFile = './01Basics/content/first.txt';
 let sFile = './01Basics/content/second.txt';
 let outFile = './01Basics/content/outputfile.txt';
 
 readFile(fFile, 'utf8', (err, result) => {
     if (err){
         console.log(err);
         return;
     }
     console.log('First file read completed');
     console.log(result);
     const first = result;
     readFile(sFile,'utf8',(err, result)=> {
         if (err){
             console.log(err);
             return;
         }
         console.log('Second file read completed');
         const second = result;
         console.log(result);
         writeFile(outFile, `Here is the output: ${first}, ${second}`, (err, result) =>{
             if (err){
                 console.log(err);
                 return;
             }
             console.log(first, second);
         });
     });
 });

 console.log('starting next task!');
 