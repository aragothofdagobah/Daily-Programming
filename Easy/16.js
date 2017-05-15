//Check 1st argument for any letters in the second and remove

//init vars
var wordOne = process.argv[2];
var wordTwo = process.argv[3].split('')
wordTwo.splice(0,1, '[');
wordTwo.push(']');
wordTwo = new RegExp(wordTwo.join(''), 'g');


console.log(wordOne.replace(wordTwo, ''));
