const http = require('http');
const PORT = 8000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("HomePage");
    } 
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("AboutPage");
    } 
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("ContactPage");
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is Started on http://localhost:${PORT}`);
});
