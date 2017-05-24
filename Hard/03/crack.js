//Function class to compare and crack code

//main function to be exported
//takes a scrambled word and returns the match in the word list
function crack(word, arr) {
  var len = word.length;
  arr = cutArr(arr, len)
  for(var x = 0; x < arr.length; x++){
    if(comp(word, arr[x])){
      return arr[x];
    }
  }
}

//takes an array and returns a new one of given len
function cutArr(arr, len) {
  var newArr = [];
  for(var x = 0; x < arr.length; x++){
    if(arr[x].length == len){
      newArr.push(arr[x])
    }
  }
  return newArr;
}

//compares a word with a jumbled word
function comp(wordOne, wordTwo) {
  wordOne = wordOne.split('').sort().join('');
  wordTwo = wordTwo.split('').sort().join('');
  return(wordOne == wordTwo);
}

module.exports = crack;
