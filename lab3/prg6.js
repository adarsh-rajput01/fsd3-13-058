import http from "http";
import { getAllProducts } from "./products.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getAllProducts();
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        count: data.length,
        data,
      }),
    );
  } else if (req.url === "/api/v1/products" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const product = JSON.parse(body || "{}");
      console.log("Received Product:", product);
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "product added", product }));
    });
  } else if (req.url.startsWith("/api/v1/products/") && req.method === "PUT") {
    const productId = req.url.split("/").pop();
    console.log("Updating Product with ID:", productId);

    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const product = JSON.parse(body || "{}");
      product.id = productId;
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "product updated", product }));
    });
  } else if (req.url === "/api/v1/products" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE Request");
  } else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

server.listen(5000, () => console.log("prg6 is running"));
