//What day of the week?

//init varirables
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var year = parseInt(process.argv[2]);
var month = parseInt(process.argv[3]) - 1;
var day = parseInt(process.argv[4]);

//create date object using cl arguments
var date = new Date(year, month, day);

//assigns output to corresponding day in days[]
var output = days[date.getDay()];

//log output
console.log(output);
