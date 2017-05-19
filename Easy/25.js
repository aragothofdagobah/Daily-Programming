//Output voting turnout

//init vars
var choiceOne = parseInt(process.argv[2]);
var choiceTwo = parseInt(process.argv[3]);
var sum = choiceTwo + choiceOne;
var dif = Math.abs((choiceOne/sum) - (choiceTwo/sum))



if(dif>.25){
  if(choiceOne > choiceTwo){
    console.log("Canidate A");
  }
  else {
    console.log("Canidate B");
  }
}
else {
  console.log("The margin was too close and a revote will be done");
}
