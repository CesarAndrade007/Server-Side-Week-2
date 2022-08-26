const http = require("http");

// fs module added to read html file.
const fs = require('fs').promises;


const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
  
  // fs.ReadFile() method used to load file
  // argument is __dirname + "/index.html"
    // __dirname is the absolute path where node.js code is being run
    // /index.html is appended to load HTML file
  fs.readFile(__dirname + "/index.html")
    .then(contents => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    })
    .catch(err => {
      res.writeHead(500);
      res.end(err);
      return;
    });

};

const server = http.createServer(requestListener); 
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
