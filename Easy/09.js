//Take in digits and arrange them in order


//init variables
var input = process.argv.slice(2,process.argv.length);
var output = [];

//loop through each input and change it to a number and push it to output array
input.forEach(function(num){
  output.push(parseInt(num));
});


//log output
console.log(output.sort());
