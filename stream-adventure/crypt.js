const crypto = require('crypto');
const password = process.argv[2];
const stream = crypto.createDecipher('aes256', password);

process.stdin.pipe(stream);

stream.pipe(process.stdout);