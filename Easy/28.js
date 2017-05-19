//Check for duplicates in num array

//init vars
var arr = process.argv[2].split(',').sort();

for(var x = 0; x < arr.length; x++){
  if(arr[x] == arr[x+1]){
    console.log(arr[x]);
    return true;
  }
}
