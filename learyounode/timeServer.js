const net = require('net');

const port = process.argv[2];
const date = new Date();
const dateString = getDate();


const server = net.createServer(socket => {
    socket.end(dateString);
});

server.listen(port);



function getDate() {
    const year = date.getFullYear();
    const month = date.getMonth().toString().length < 2 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const day = date.getDate().toString().length < 2 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours().toString().length < 2 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes().toString().length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${year}-${month}-${day} ${hours}:${minutes}\n`;
}