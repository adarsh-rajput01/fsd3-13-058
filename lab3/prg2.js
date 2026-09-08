import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Client</h1>");
  res.write("<h2>Adarsh</h2>");
  res.write(
    "<p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>"
  );
  res.end();
});

server.listen(4444, () => console.log("prg3 is running "));