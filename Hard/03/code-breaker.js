//input code list and run against Word list to crack codes
const readline = require('readline');
const crack = require('./crack');
const fs = require('fs');
const rl = readline.createInterface({
  input: fs.createReadStream('wordlist.txt')
});
const rl2 = readline.createInterface({
  input: fs.createReadStream('coded.txt')
});

//init vars
var coded = [];
var wordList = [];

//event listeners for rl and rl2

//populates wordList array with wordList file
rl.on('line', (line) => {
  wordList.push(line);
})

//At the end of word list array sort it by size
rl.on('pause', () => {
    wordList = wordList.sort(compare)
})

//pupulates coded with coded text file
rl2.on('line', (line) => {
  coded.push(line);
})

//after population of both arrays runs crack function to replace
//coded with match from wordList
rl2.on('pause', () => {
    for(var x = 0; x < coded.length; x++){
      coded[x] = crack(coded[x], wordList)
    }
    console.log(coded);
})



//custom sort function to sort array by the string lengths
function compare(a,b) {
  var lenA = a.length;
  var lenB = b.length;
  if(lenA < lenB){
    return -1;
  }
  else if (lenA > lenB) {
    return 1;
  }
  return 0;

}
