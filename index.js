const readLineSync= require('readline-sync');
const chalk = require('chalk');
function menu()
{

  console.clear();
console.log('************ This is all we offer ************\n ')



const choice=readLineSync.question(chalk.green.bold('Enter 1 for epoch to human readble\nEnter 2 for human readable to epoch\n'));

return choice;
}

let choice = menu();
proceedChoice(choice);

function proceedChoice(choice)
{
  //console.log(typeof(choice));
  //https://workat.tech/ide
  console.clear();
switch (choice) {
  case "1":
  const unixTimestamp=readLineSync.question(chalk.green.bold('Enter the epoch Time\n'));

    
    console.log(chalk.green.bold(epochToReadable(unixTimestamp)));
    break;
  case "2":
  const mon=readLineSync.question(chalk.green.bold('Enter Month:example- 1 for January, 2 for February...12 for December\n'));
const date=readLineSync.question(chalk.green.bold('Enter date\n'));

const year=readLineSync.question(chalk.green.bold('Enter year. Format example: 2020\n'));

let hour=readLineSync.question(chalk.green.bold('Enter hour in 24 hours clock. Format example: 02 for 2AM,14 for 2PM\n'));
let min=readLineSync.question(chalk.green.bold('Enter minute\n'));
let sec=readLineSync.question(chalk.green.bold('Enter Second\n'));

    console.log(readableToEpoch(mon,date,year,hour,min,sec));
    break;
    default:
  console.log("You have entered the wrong choice!Try Again\n");
  const choice=menu();
  proceedChoice(choice);
  break;
}
const useAgain=readLineSync.question(chalk.green.bold('Enter 1 to  go back to main menu\nEnter any other key exit\n'));

if(useAgain==="1")
{
  let choice=menu();
  proceedChoice(choice);
}


}


function epochToReadable(unixTimestamp)
{
   
//  var unixTimestamp = 1553617238;
const date = new Date(unixTimestamp);

return date;
}

function readableToEpoch(mon,date,year,hour,min,sec)
{
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

if(hour.length===1)
hour="0"+hour;

if(min.length===1)
min="0"+min;

if(sec.length===1)
sec="0"+sec;

if(mon>12)  //270786600   268108200
{
  console.clear();
  console.log("Wrong Month entered.Start Again\n");
  let choice=menu();
  proceedChoice(choice);
}

const full_date=months[mon-1]+" "+date+", "+year+" "+hour+":"+min+":"+sec;
//"July 1, 1978 02:30:00"
const myDate = new Date(full_date); 
const myEpoch = myDate.getTime();///1000.0;
return myEpoch;

}

// function epoch_converter()
// {
  
  
// if(choice==="1")
// {
//   const unixTimestamp=readLineSync.question(chalk.green.bold('Enter the epoch Time\n'));

// //  var unixTimestamp = 1553617238;
// var date = new Date(unixTimestamp*1000);

// console.log(chalk.green.bold(date));
// }
// else if(choice==="2") 
// {
//   const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
// const mon=readLineSync.question(chalk.green.bold('Enter Month:example- 1 for January, 2 for February...12 for December\n'));
// const date=readLineSync.question(chalk.green.bold('Enter date\n'));

// let year=readLineSync.question(chalk.green.bold('Enter year. Format example: 2020\n'));

// let hour=readLineSync.question(chalk.green.bold('Enter hour in 24 hours clock. Format example: 02 for 2AM,14 for 2PM\n'));
// let min=readLineSync.question(chalk.green.bold('Enter minute\n'));
// let sec=readLineSync.question(chalk.green.bold('Enter Second\n'));

// if(hour.length===1)
// hour="0"+hour;

// if(min.length===1)
// min="0"+min;

// if(sec.length===1)
// sec="0"+sec;

// if(mon>12)  //270786600   268108200
// {
//   console.clear();
//   console.log("Wrong Month entered.Start Again\n");
//   epoch_converter();
// }

// let full_date=months[mon-1]+" "+date+", "+year+" "+hour+":"+min+":"+sec;
// //"July 1, 1978 02:30:00"
//   var myDate = new Date(full_date); // Your timezone!
// var myEpoch = myDate.getTime()/1000.0;
// console.log(myEpoch);

// }
// else
// {console.log("Wrong Choice");
//   epoch_converter();
// }


// }





