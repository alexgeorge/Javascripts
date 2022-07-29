/*jshint esversion: 6*/

/**
 * 1. Modules install using npm and usage
 * 2. Installed lodash <npi install lodash>
 * 3. Then <npm init> This will create the package.json file which brings all the dependanecies
 * 4. Once installed that package can be used in our program
 */

 const _ = require('lodash');

 const items = [1, [2, [3, ] ]];
 const newItems = _.flattenDeep(items);
 console.log(newItems);
 