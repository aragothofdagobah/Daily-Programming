//Takes sum and list of numbers as arguments and checks to see if any two numbers added equal sum

//init vars
var sum = parseInt(process.argv[2]);
var list = process.argv[3].split(',');
var result = [];
//reassigns all chars to ints in list
for(var x = 0; x < list.length; x++){
  list[x] = +list[x]
}

//check to see if sum can be created with given numbers
for(var x = 0; x < list.length; x++){
  for(var y = x+1; y < list.length; y++){
    if(list[x] + list[y] == sum)
    result.push(list[x].toString() + "," + list[y].toString())
  }
}

//if results has anything log it if not log No combinations
if(result.length > 0){
  console.log(result);
}
else {
  console.log("No combinations will give you the sum");
}
