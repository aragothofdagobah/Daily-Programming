const http = require("http");
const url = require("url");
const port = process.argv[2];


const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json"});
    let link = url.parse(req.url, true);
    if(req.method === "GET" && link.pathname === "/api/parsetime") {
        let date = new Date(link.query.iso);
        let json = JSON.stringify({
            "hour" : date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        });

        res.end(json);
    }

    if(req.method === "GET" && link.pathname === "/api/unixtime") {
        const date = new Date(link.query.iso);
        const json = JSON.stringify({
            "unixtime": date.getTime()
        });
        res.end(json);
    }

    res.end("Enter Correct Query");
});

server.listen(+port);