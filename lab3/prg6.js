import http from "http";
import {
  getAllProducts,
  addProduct,
  deleteProduct,
  getProductById,
  updateProduct,
} from "./products.js";

const getProductIdFromUrl = (url) => {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
};

const isProductDetailRoute = (url) =>
  url.startsWith("/api/v1/products/") || url.startsWith("/products/");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getAllProducts();
    res.setHeader("content-type", "application/json");
    res.end(
      JSON.stringify({
        count: data.length,
        data,
      }),
    );
  } else if (url === "/api/v1/products" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const product = JSON.parse(body);
      const item = addProduct(product);
      res.statusCode = 201;
      res.end(JSON.stringify({ msg: "product added", data: item }));
    });
  } else if (isProductDetailRoute(url) && req.method === "PUT") {
    const productID = getProductIdFromUrl(url);
    console.log("Update Product id:", productID);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const product = JSON.parse(body);
      product.id = productID;
      const updatedPrd = updateProduct(productID, product);
      if (!updatedPrd)
        res.end(JSON.stringify({ msg: `id ${productID} not found` }));
      else {
        res.statusCode = 200;
        res.end(JSON.stringify({ msg: "product updated", updatedPrd }));
      }
    });
  } else if (isProductDetailRoute(url) && req.method === "DELETE") {
    const pid = getProductIdFromUrl(url);
    res.statusCode = 200;
    if (deleteProduct(pid)) {
      res.end(JSON.stringify({ msg: "item deleted" }));
    } else {
      res.end(JSON.stringify({ msg: `product with id ${pid} not found` }));
    }
  } else if (isProductDetailRoute(url) && req.method === "GET") {
    const pid = getProductIdFromUrl(url);
    res.statusCode = 200;
    const product = getProductById(pid);

    if (product) {
      res.end(JSON.stringify({ data: product }));
    } else {
      res.end(JSON.stringify({ msg: `product with id ${pid} not found` }));
    }
  } else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

server.listen(5000, () => console.log("prg6 is running"));
