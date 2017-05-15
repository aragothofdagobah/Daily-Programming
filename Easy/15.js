//right justify text file
//standard is 80 spaces
//this is not done well with node will come back to it later
const fs = require('fs');
const readline = require('readline');
//creates readline object from fs readStream
const rl = readline.createInterface({
  input: fs.createReadStream('credintials.txt')
});

//init variables
const spaces = 80;

rl
