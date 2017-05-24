//Alphabetic Substition Cipher

//init vars
var alph =   "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var cipher = "ZEBRASCDFGHIJKLMNOPQTUVWXY".split('')
var input = process.argv[2].split('');

for(var x = 0; x < input.length; x++){
  var char = input[x];
  var tmp = alph.indexOf(char);
  input[x] = cipher[tmp];
}

var output = input.join('');

console.log(output);
