import https from 'https'

const server = https.createServer((req, res) => {

    //req method -> GET, POST, PUT, DELETE, PATCH
    console.log('Method:', req.method);
    console.log('URL:', req.url);

    // Browser can send only GET request to the server 
    // POST/PUT/PATCH/DELETE -> can be checked by api tester
    // API Tester:- postman, echo api , thunder client 
    
    if (re.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Welcome to my server</h1>");
    }

});

server.listen(5000, () => console.log("prg5 is running"));