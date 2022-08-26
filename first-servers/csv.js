const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
  res.setHeader("Content-Type", "text/csv");

  // Content-Disposition header tells browser how to display data
  // Signals browser that CSV file is an attachment and should be downloaded. File name provided after filename-
  res.setHeader("Content-Disposition", "attachment;filename-oceanpals.csv");
  
  res.writeHead(200);
  
  // CSV format where \n terminates row and each column separated by a comma.
  res.end(`id,name,email\n1,Sammy Shark, shark@ocean.com`);
};

const server = http.createServer(requestListener); 
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
