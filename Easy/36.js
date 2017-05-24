//Locker toggle program

//init vars
var lockers = [];
var open = 0;
var closed = 0;

for(var x = 0; x < 1000; x++){
  lockers.push(false);
}

for(var x = 1; x <= 1000; x++){
  for(var y = x; y < 1000; y+=x){
    lockers[y] = !lockers[y];
  }
}

for(var x = 0; x < 1000; x++){
  if(lockers[x]){
    open++;
    console.log(x+1);
  }
  else {
    closed++;
  }
}
console.log(open + "\n" + closed);
