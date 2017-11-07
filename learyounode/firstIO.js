//requiring fs to read file
const fs = require('fs');

//assigning file variable to argument
const file = process.argv[2];

//assign varible to a file buffer and convert it to a string
const fileBuffer = fs.readFileSync(file).toString();

//assign newLines to number of number of newLines by splitting at every \n and taking the length of the array
const newLines = (fileBuffer.split('\n').length - 1);

//logging the output
console.log(newLines);