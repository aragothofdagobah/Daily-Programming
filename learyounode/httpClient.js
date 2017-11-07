//require http module to make get request
const http = require('http');

//get url from cl arguments
const url = process.argv[2];

//use module to make a GET request and log the response data
http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (err,data) => {
        if(err){console.log(err)}
        else{
            console.log(data);
        }
    })
});