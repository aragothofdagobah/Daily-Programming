//Return dayNumber for given date

//init vars
var months = [31,28,31,30,31,30,31,31,30,31,30];
var month = parseInt(process.argv[2]);
var day = parseInt(process.argv[3]);
var dayNumber = 0;

//add past months days to dayNumber
for(var x = 0; x < month - 1;x++){
  dayNumber += months[x];
}

//log dayNumber plus days this month
console.log(dayNumber + day);
