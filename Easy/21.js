//input a number and output highest possible combination

//init vars
var input = process.argv[2];
//split and sorted in reverse alphabetic order
var output = input.split('').sort(function(a, b){
  return b-a;
}).join('');

console.log(output);
