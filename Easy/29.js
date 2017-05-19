//Is it a palindrome?

//init vars
var input = process.argv[2].toLowerCase();
var len = input.length/2;
if((len * 2) % 2 == 0){
  var inBeg = input.slice(0,len);
}
else{
  var inBeg = input.slice(0,len+1);
}
var inEnd = input.slice(len).split('').reverse().join('')

//log output
console.log(inBeg);
console.log(inEnd);
console.log(inBeg == inEnd);
