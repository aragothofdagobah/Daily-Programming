//add inputs in the second list to the first

//init vars
var arr1 = process.argv[2].split('');
var arr2 = process.argv[3].split('');

//checks each letter in second for appearance in first
arr2.forEach(function(char){
  if(arr1.includes(char)){}
  else{
    arr1.push(char);
  }
});

//logs new array
console.log(arr1);
