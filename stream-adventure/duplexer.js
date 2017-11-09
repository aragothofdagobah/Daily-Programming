const { spawn } = require('child_process').spawn;
const duplexer  = require('duplexer2');

module.exports = function (cmd,args) {
    const ps = spawn(cmd, args);
    return duplexer({objectMode: true}, ps.stdin, ps.stdout);
};