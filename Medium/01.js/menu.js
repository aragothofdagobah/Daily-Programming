//Menu for checklist
const event = require('./eventsObj.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.setPrompt('(A)dd (C)omplete (V)iew (E)dit E(x)it: ')
process.stdout.write('\033c');

//init vars
var char;
var eventArr = [];

rl.prompt();

rl.on('line', (res) => {
  res = res.toLowerCase();
  switch (res) {
    case 'x':
      process.stdout.write('\033c');
      rl.close();
      break;
    case 'a':
      rl.question('Name: ', (name) =>{
        rl.question('Hour: ', (hour) => {
            eventArr.push(new event(name, parseInt(hour)));
            eventArr.sort(compare)
            rl.prompt();
        });
      });
      break;
    case 'v':
      eventArr.forEach(function(event){
        if(!event.isDone()){
          console.log(event.getName() + " " + event.getHour());
        }
      });
      rl.prompt();
      break;
    case 'e':
        for(var x = 0; x < eventArr.length; x++){
          console.log(`${x}. ${eventArr[x].getName()} : ${eventArr[x].getHour()}`);
        }
        rl.question('Which one would you like to edit? ', (num) => {
          rl.question('(N)ame or (H)our? ', (choice) => {
            rl.question('New value: ', (value) => {
              if(choice == 'N'){eventArr[parseInt(num)].setName(value)}
              else if (choice == 'H') {eventArr[parseInt(num)].setHour(value)}
              else{
                console.log("Not Valid");
              }
              rl.prompt();
            });
          });
        });
      break;

    case 'c':
      for(var x = 0; x < eventArr.length; x++){
        console.log(`${x}. ${eventArr[x].getName()} : ${eventArr[x].getHour()}`);
      }
      rl.question('Which one would you like to mark complete? ', (num) => {
        eventArr[parseInt(num)].markDone();
        rl.prompt();
      });
      break;
    default:
      console.log(`I do not understand ${res}`);
      rl.prompt();
  }
})

function compare(a,b) {
  if (a.hour < b.hour)
    return -1;
  if (a.hour > b.hour)
    return 1;
  return 0;
}
