const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile('data.txt', (err, data) => {
    //     res.end(data.toString());
    // })

    //readable stream
    const rstream = fs.createReadStream('data.txt');
    // rstream.on('data', (chunk) => {
    //     res.write(chunk);
    // })
    // rstream.on('end', () =>{
    //     res.end();
    // })
    // rstream.on('error',(err) =>{
    //     console.error(err);
    //     res.end('file not found');
    // })

    rstream.pipe(res);
})
server.listen(8080);