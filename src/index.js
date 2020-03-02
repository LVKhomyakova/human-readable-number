module.exports = function toReadable (number) {
  let numberObj = {};
  let humanNumberObj = {};
  let numberArr = String(number).split('').reverse();
  
  let rank = 1;
  for(let item of numberArr){
      numberObj[rank] = item;
      rank *= 10;
  }

  for(let prop in numberObj){
      switch(prop){
        case '1': 
          if(numberObj[prop] == 0 && numberObj[10] >= 0){
            humanNumberObj[prop] = "";
          }
          else
            humanNumberObj[prop] = toTenHuman(numberObj[prop]);
          break;
        case '10': 
          if(numberObj[prop] == 1) {
            humanNumberObj[prop] = toTwentyHuman(numberObj[1]);
            humanNumberObj[1] = "";
          }
          else
            humanNumberObj[prop] = dozenHuman(numberObj[prop]);
          break;
        case '100': humanNumberObj[prop] = toTenHuman(numberObj[prop]) + " hundred";
          break;
        default:
          break;
      }
  }

  let humanNumberArr = [];
  for(let item in humanNumberObj){
    humanNumberArr.push(humanNumberObj[item]);
  }
  return humanNumberArr.reverse().join("").trim();
}

function toTenHuman(n){
  let toTen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  return " " + toTen[n];
}
function toTwentyHuman(n){
  let tenToTwenty = ["ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    return " " + tenToTwenty[n];
}
function dozenHuman(n){
  if(n == 0) return "";
  let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    return " " + tens[n - 2];
}
