import http from "http";

const server = http.createServer((req, res) => {
  //req method -> GET, POST, PUT, DELETE, PATCH
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  // Browser can send only GET request to the server
  // POST/PUT/PATCH/DELETE -> can be checked by api tester
  // API Tester:- postman, echo api , thunder client

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to my server</h1>");
  }
  else if (req.url === "/products") {
    const products = [
      { id: 1, name: "bottle"},
      { id: 2, name: "laptop"},
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  }
  else {
    res.end();  
  }
});

server.listen(5000, () => console.log("prg5 is running"));
