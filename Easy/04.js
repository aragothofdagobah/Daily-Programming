//Random Password Generator

//init Vars
var numberOfPasswords = process.argv[2];
var lengthOfPasswords = process.argv[3];
var passwordArray = [];
var tempPasswordArr = [];

//function to create passwords - takes no arugments
function createPassword() {
  for(var i = 0; i < lengthOfPasswords; i++){
    var ran = Math.floor(Math.random() * (122 - 33 + 1)) + 33;
    ran = String.fromCharCode(ran);
    tempPasswordArr.push(ran);
  }
  passwordArray.push(tempPasswordArr.join(''));
  tempPasswordArr = [];
}

//takes amount of passwords specified in CL and calls the function everytime
for(var i = 0; i<numberOfPasswords; i++){
  createPassword();
}

//logs password array
passwordArray.forEach(function(password){
  console.log(password+"\n");
})
