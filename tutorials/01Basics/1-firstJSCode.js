/*jshint esversion: 6*/

/*
Note:- most of the snippets work in node issue <node filename> to execute the module

1. Shows creation of a simple person object (not a class)
2. Shows the global function declarations
3. Note that imporing this module will lead to execution of First() 
function as it is declared global


*/

let a = "This is a test from Alexander!";

const person = {
    name: "alex",
    job: "s/w enginner",
    status: "job hunter",
    salary: 10000,
    GetSalary()
    {
        return this.salary;
    }
};


function First() {
    console.log('Inside First function');
    Second();
    console.log('Again inside the first function');
}

function Second() {
    var salary = person.GetSalary();
    console.log("Salary: ", salary);
    console.log('Inside second function');
}

First();
console.log("Inside global execution context");

 