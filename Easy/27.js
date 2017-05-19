//Input year -- output century if leap year

//init vars
var cen = parseInt(process.argv[2].slice(0,2)) + 1  ;
var leap = (parseInt(process.argv[2]) % 4 == 0);
var cenStr = cen.toString() + "th"
var yearN = parseInt(cen.toString().slice(1,2));

//check year
if(cen > 20 || cen < 10){
  switch (yearN) {
    case 1:
      cenStr = cenStr.slice(0,2) + "st";
      break;
    case 2:
      cenStr = cenStr.slice(0,2) + "nd";
      break;
    case 3:
      cenStr = cenStr.slice(0,2) + "rd"
      break;
    default:

  }
}

//log output
console.log(cenStr + " century");
console.log("Leap year:" + leap);
