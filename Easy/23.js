//Input: a list Output: Return the two halves as different lists.

//init vars
var input = process.argv[2].split('');
var length = input.length / 2;

//log both halves
console.log(input.slice(0,length) + "\n" + input.slice(length));
