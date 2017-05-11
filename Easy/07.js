//Morse Code Translator

//init Variables
var code = process.argv[2];
var tempSentenceArray = []
var tempWordArray = [];
var newWord = [];
var newSentence = [];
//Morse Code key value pairs
var lib = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
};

//reverse lookup function
Object.prototype.getKey = function(value){
  var object = this;
  for (var key in object){
    if(object[key] == value){
      return key;
    }
  }
};

//From Morse to English
function morToEng() {
  tempSentenceArray = code.split('/');
  tempSentenceArray.forEach(function(word){
    tempWordArray = word.split(' ');
    tempWordArray.forEach(function(letter){
      newWord.push(lib.getKey(letter));
    });
    newSentence.push(newWord.join(''));
    newWord = [];
  });
  console.log(newSentence.join(' '));
  newSentence = [];
  tempWordArray = [];
}

//From English to Morse
function engtoMore() {
  tempSentenceArray = code.split(' ');
  tempSentenceArray.forEach(function(word){
    tempWordArray = word.split('');
    tempWordArray.forEach(function(letter){;
      newWord.push(lib[letter])
    });
    newSentence.push(newWord.join(' '));
    newWord = [];
  });
  console.log(newSentence.join('/'));
}

engtoMore();
