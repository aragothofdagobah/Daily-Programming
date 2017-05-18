//print all prime numbers under 200

//init vars
const NUM = 200;


//function to determine if a number is prime
function isPrime(num) {
  for(var x = num - 1; x > 1; x--){
    //console.log(x);
    if(num % x === 0){
      return false;
    }
  }
  return true;
}


//print out every prime number below 200
for(var x = NUM; x > 0; x--){
  if(isPrime(x)){
    console.log(x);
  }
}
