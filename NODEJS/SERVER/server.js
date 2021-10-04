const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write("<h2>Hello</h2>");
  res.end();
});
const port = 8080;
const hostname = "127.0.0.1";
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port} `);
});
