const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
  // setHeader method adds HTTP header to response
  // Content-Type indicates format of data: application/json is the Content-Type
  res.setHeader("Content-Type", "application/json");
  
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`); 
};

const server = http.createServer(requestListener); 
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
