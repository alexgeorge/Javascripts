
/*
1. Demonstrates invoking a server running locally which send the Hellowork to http://localhost:8080
2. Running this code <node 3-invokeNodeJS> will start the server
3. Close the server by clicking ctrl+c
*/

var http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!');
 }).listen(8080);
