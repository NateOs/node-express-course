const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync("./index.html", "utf8");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("about page");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("page not found");
    res.end();
  }
});

server.listen(5000);


