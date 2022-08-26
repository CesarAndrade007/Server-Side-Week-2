// http module created -- contains function to create server
const http = require("http");

/*
localhost is a special private address for computers to identify themselves
port is a number that servers use as a gateway to IP address.
Port 8000 and 8080 are typically used as default ports in development
*/
const host = 'localhost';
const port = 8000;

// Request listener function is meant to handle incoming HTTP requests and return HTTP response.
const requestListener = function(req, res) {
  res.writeHead(200); // sets HTTP status code response
  res.end("My first server!"); // writes HTTP response back to client
};

/* 
  Request listener function has two arguments: request object and response object. 
      Request object captures all data of HTTP coming in
      Response object returns HTTP response for server
*/

// create server object with http module createServer() function. Server accepts HTTP requests and passes them on to requestListener() function
const server = http.createServer(requestListener); 

// Bind server to a network address with server.listen() method
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});