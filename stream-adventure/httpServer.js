const http = require('http');
const through = require('through2');

const port = process.argv[2];


const server = http.createServer((req,res) => {
   if(req.method === 'POST'){
       req.pipe(through(write, end)).pipe(res);
   }
});

server.listen(port);


function write (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
}
function end (done) { done(); }
