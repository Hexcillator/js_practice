let sale=true;
let hungerLevel=8;

//sale=false;
//part one: If statement
if(sale){
  console.log('Time to buy!');
}else{
  console.log('Time to wait for a sale');
}

//part two: Comparison Operators

if(hungerLevel > 7){
  console.log('Time to eat!')
}else{
    console.log('We can eat later!');
}

//part 3 logical operators
let mood='sleepy'
let tirednessLevel=6;


if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
}else{
  console.log('not bedtime yet!');
}
