//Is it a valid phone number?


//init Variables
var number = process.argv[2];

//excludes any string containing '\' character
if(number.includes('\\')){
  console.log(false);
  return false;
}
//replace all extra characters with spaces
number = number.replace(/[.\s-()]/g , '');
number = parseInt(number).toString().length;

//log output
console.log((number == 10) || (number == 7));
