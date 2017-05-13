//Reverse given size blocks in list
//Input 2, [12, 13, 14, 15]
//Output [13, 12, 15, 14]

//init variables
var size = parseInt(process.argv[2]);
var elements = [];
var final = [];

//popluate elements
for(x = 3; x < process.argv.length;x++){
  elements.push(process.argv[x]);
}

if(elements.length % size !== 0){
  console.log("This is not possible");
}
else {
  for(var x = 0; x < elements.length; x+=size){
    var tempArr = elements.slice(x, x+size);
    tempArr.reverse();
    for(var y = 0; y < tempArr.length; y++){
      final.push(tempArr[y]);
    }
  }
}

console.log(final);
