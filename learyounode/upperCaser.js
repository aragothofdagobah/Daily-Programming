const http = require('http');
const fs   = require('fs');

const port = process.argv[2];


const server = http.createServer((req,res) => {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString().toUpperCase();
        // at this point, `body` has the entire request body stored in it as a string
        res.write(body);
        res.end();
    });
});

server.listen(port);