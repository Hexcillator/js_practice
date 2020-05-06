//here is a program that print the registration number and time of race to the console
/*Here’s how the registration works.
There are adult runners (over 18 years of age) and youth runners (under 18 years of age).
They can register early or late. Runners are assigned a race number and start time based
on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).

*/

//here we get a random number between 0-1000
let raceNumber = Math.floor(Math.random()*1000);
//console.log(raceNumber);

//her we input the racer time of registration and age
let registeredEarly = true;

let age=16;

//adults registering early get a race number over 1000
if(age > 18 && registeredEarly){
  raceNumber+=1000;
}

//conditions for age and race time
if(age > 18 && registeredEarly){
 console.log(`race time at 9:30 am and your number is ${raceNumber}`);
}else if(age > 18 && registeredEarly == false){
  console.log(`race time at 11:00 am and your number is ${raceNumber}`);
}else if(age < 18){
  console.log(`race time at 12:30 am and your number is ${raceNumber}`);
}else{
  console.log('Please see the registration desk!')
}
