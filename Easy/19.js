//Print out number of all chars[a-zA-z0-9]
const fs = require('fs');

//init vars
var file = process.argv[2];
var reg = new RegExp("[a-zA-Z0-9]", "g");

//open file
fs.readFile(file,'utf-8', function(err, content){
  if(err){
    console.log(err);
  }
  else {
    console.log(content.match(reg || []).length);
  }
});
