//given A list of numbers return the sum of the square of the two largest


//init vars
var arr = [];
var len = process.argv.length;
var sum;
for(var x = 2; x < len;x++){
  arr.push(parseInt(process.argv[x]));
}
len = arr.length;
//sort arr
arr = arr.sort();
sum = Math.pow(arr[len-1],2) + Math.pow(arr[len-2],2);

console.log(sum);
