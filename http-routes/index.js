const http = require('http');
const server = http.createServer(function(req, res) {
    if (req.url === '/') {

        res.end('hello worldsdf')
    } else if (req.url=== '/about') {
        res.end('hello about page')
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('404 Not Found')
    }
});

server.listen(4000);