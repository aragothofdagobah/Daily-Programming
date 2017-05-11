//How Much Money will I make this week

//init vars
var hours = process.argv[2];
var wage = process.argv[3];
var total = process.argv[4];

//Query which variable was not given
if (hours == 0) {
  hours = total / wage;
  hours = Math.round(hours * 10) / 10;
}

else if (wage == 0) {
  wage = total / hours;
  wage = Math.round(wage * 10) / 10;
}

else{
  total = wage * hours;
}

//Initilize Output
var output = "You worked " +hours+ " hours, At $" +wage+ "/hr for a total of $"+total;

//Log Output
console.log(output);
