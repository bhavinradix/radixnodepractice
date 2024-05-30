// First import http module.
const http = require('http');

// Create the node server.
const server = http.createServer((req, res) => {

    res.writeHead(200,{
        "Content-Type": "text/html"
    });

    res.end("<h1>Ladies and Gentlemen this is your server speaking</h1>");
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running at : http://localhost:${PORT}`);
});