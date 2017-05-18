//Print out all permutations of a string

//functions to determine factorial
function factorial(n) {
  if(n === 0){
    return 1;
  }
  return n*(factorial(n-1));
}

//init varirables
var input = process.argv[2];
var length = factorial(input.length);
var tempArr = input.split('');
var div =  1;

tempArr.forEach(function(letter){
  var temp = (input.match(new RegExp(letter, "g")) || []).length;
  input = input.replace(new RegExp(letter, "g"), '');
  if(temp>1){
    div = div*temp;
  }
});

console.log(length/div);
