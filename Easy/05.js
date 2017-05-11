//Check Username and Password
const fs = require('fs');
const readline = require('readline');
//creates readline object from fs readStream
const rl = readline.createInterface({
  input: fs.createReadStream('credintials.txt')
});

//init Variables
var usernameEntry = process.argv[2];
var passwordEntry = process.argv[3];
var username;
var password;
var count = 0;

//Listens for line event and assigns password based on line number
rl.on('line', function(line){
  if(count == 0){
    username = line;
  }
  if(count == 1){
    password = line
  }
  count++;
});

//Listens for close even then Checks and return credintials
rl.on('close', function(){
  if(usernameEntry == username && passwordEntry == password){
    console.log("You opened the program congrats!!");
  }
  else {
    console.log("Incorrect username or password");
  }
});
