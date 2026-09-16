import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("GET Request");
  }
  else if (req.url === "/" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      console.log("Received Product:", product);
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "product added", product }));
    });
  }
  else if (req.url.startsWith("/products/") && req.method === "PUT") {
    const productId = req.url.split("/").pop();
    console.log("Updating Product with ID:", productId);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const products = JSON.parse(body);
      products.id = productId;
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "product updated", products }));
    });
  
    res.statusCode = 200;
    res.end("PUT Request");
  }

  else if (req.url === "/" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE Request");
  }
  
  else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

server.listen(5000, () => console.log("prg6 is running"));
