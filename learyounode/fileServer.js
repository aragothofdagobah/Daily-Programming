const http = require('http');
const fs   = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const fileContent = fs.createReadStream(file);

const server = http.createServer((req,res) => {
    fileContent.pipe(res);
});

server.listen(port);