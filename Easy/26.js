//remove second char in a row and put it in a new string

//init vars
var arr = process.argv[2].split('');
var newArr = [];


//check for duplication push to new array and remove old
for(var x = 0; x < arr.length; x++){
  if(arr[x] == arr[x+1]){
    newArr.push(arr[x+1]);
    arr.splice(x, 1)
  }
}

//log joined arrays as strings
console.log(arr.join('') + "\n" + newArr.join(''));
