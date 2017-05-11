//Ceaser Cypher


//init Vars
var code = process.argv[2];
var shift = parseInt(process.argv[3]);
var bool = (process.argv[4] == 1) ? true : false;
var tempArr = [];
var output;

//EncryptDecrypte function
function cipher() {
  for(i = 0; i < code.length; i++){
    var temp = code.charAt(i);
    tempArr.push(convertChar(temp, shift, bool));
  }
  output = tempArr.join('');
}


//Function to a single char to it cipher
function convertChar(char, num, add) {
  var val = (char.charCodeAt(0));
  if(add){
    val = val + num;
  }
  else {
    val = val - num;
  }
  return String.fromCharCode(val);
}


//Call cipher to change output
cipher(code,shift, bool);

//log output
console.log(output);
