/*jshint esversion: 6*/

const http = require('http');

const server = http.createServer((req,res)=>{
    
    if (req.url === '/'){
        res.end('Welcome to my home page!');
    }
    if (req.url === '/about'){
        res.end("Here is my short story!");
    }
    res.end(`<h1>Oops!<h1/><p>We cant find it!</><a href="/">`);
});

server.listen(5000);