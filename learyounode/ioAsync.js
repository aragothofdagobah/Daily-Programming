//requiring fs to read file
const fs = require('fs');

//assigning file variable to argument
const file = process.argv[2];


//Read File Stream in plain text
fs.readFile(file, 'utf8', (err, data) => {
    //split data every new line character
    data = data.split('\n');

    //log number of items in data array
    console.log(data.length - 1);
});