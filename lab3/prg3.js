import { createReadStream } from "fs";
import http from "http";
import { fileURLToPath } from "url";

const bottlePath = fileURLToPath(new URL("./bottle.html", import.meta.url));

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/bottle" || req.url === "/bottle.html") {
    const stream = createReadStream(bottlePath, { encoding: "utf-8" });
    res.setHeader("content-type", "text/html");

    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(3000, () => console.log("prg3 is running "));
