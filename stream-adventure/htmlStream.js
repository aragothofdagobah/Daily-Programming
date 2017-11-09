const trumpet = require('trumpet');
const through = require('through');

const write = function (buf){
    this.push(buf.toString().toUpperCase())
};

const tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);

const stream = tr.select('.loud').createStream();
stream.pipe(through(write)).pipe(stream);