//All permutations of a given string THIS SHOULD NOT BE AN EASY LEVEL PROBLEM
// THE CREATOR IS GOD DAMN RIDICUOLOUS THE INTERMEDIATE AND HARD FOR 12 ARE EASIER THAN THIS
//currently tops out at 4 characters

//functions to determine factorial
function factorial(n) {
  if(n === 0){
    return 1;
  }
  return n*(factorial(n-1));
}

//function to output word with last two <->
function lastTwo(word, lastTwo, extra){
  console.log(extra + word+lastTwo);
  console.log(extra + word + lastTwo.slice(1) + lastTwo.slice(0,1));
}

//calls lastTwo for the three and adds extra characters to it
function printSix(word, extra) {
  for(var x = 0; x < 3; x++){
    lastTwo(word.slice(0,1), word.slice(1), extra)
    word = word.slice(1) + word.slice(0, 1);
  }
  count += 6;

}

//init varirables
var string = process.argv[2];
var length = string.length;
var count = 0;
var stop = factorial(length)/6;

for (var i = 0; i < stop; i++) {
  var tempWord = string;
  var x = 0;

  while (tempWord.length > 3) {
    tempWord = tempWord.slice(1);
    x++;
  }
  printSix(tempWord, string.slice(0,x))
  string = string.slice(1) + string.slice(0,1);
}

//console.log(count);
