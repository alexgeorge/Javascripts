/*jshint esversion: 6*/

/*
1. Accepts user input from the prompt
2. Make sure to install propt-sync using <npm install prompt-sync>
*/

const prompt = require('prompt-sync')();

let fname = prompt("First Name: ");
let salary = prompt("Salary:");

console.log("First Name: ", fname, "Salary: ", salary);
