//Sing 99 bottles without a newline


//loop through and print verses
for(var bottles = 99; bottles > 0; bottles--){
  if(bottles == 1){
    process.stdout.write(bottles+" Bottle of beer on the wall " + bottles + " bottle of beer. Take one down pass it around... ");
  }
  else{
    process.stdout.write(bottles+" Bottles of beer on the wall " + bottles + " bottles of beer. Take one down pass it around... ");
  }
}

//clear newline for console
console.log();
