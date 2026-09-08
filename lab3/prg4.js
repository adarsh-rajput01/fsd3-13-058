import { createReadStream } from "fs";
import http from "http";
import { fileURLToPath } from "url";

const matkaPath = fileURLToPath(new URL("./matka.html", import.meta.url));

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/matka" || req.url === "/matka.html") {
    const stream = createReadStream(matkaPath, { encoding: "utf-8" });
    res.setHeader("content-type", "text/html");

    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(4000, () => console.log("prg4 is running "));
