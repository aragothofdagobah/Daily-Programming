//Convert Letters in phone numbers to corresponding numbers

//init vars
var input = process.argv[2];

//create Regex for each set of chars
var A = new RegExp("[ABC]", 'g');
var D = new RegExp("[DEF]", 'g');
var G = new RegExp("[GHI]", 'g');
var J = new RegExp("[JKL]", 'g');
var M = new RegExp("[MNO]", 'g');
var P = new RegExp("[PQRS]", 'g');
var T = new RegExp("[TUV]", 'g');
var W = new RegExp("[WXYZ]", 'g');

//assign input to new value based on Regex
input = input.replace(A, '2');
input = input.replace(D, '3');
input = input.replace(G, '4');
input = input.replace(J, '5');
input = input.replace(M, '6');
input = input.replace(P, '7');
input = input.replace(T, '8');
input = input.replace(W, '9');

//add hyphen
var output = input.slice(0, input.length - 4) + "-" + input.slice(input.length - 4)

//log output
console.log(output);
