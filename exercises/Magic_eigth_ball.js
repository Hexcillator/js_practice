

let userName ='Pilgo';
//here ternary operator acts as an if statement

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

let userQuestion;

 userName ? userQuestion=`${userName}, will I ever become a web developer` : userQuestion = 'Will I ever become a web developer?';

 console.log(userQuestion);


let randomNumber= Math.floor(Math.random()*5);
//console.log(randomNumber);

let eightBall='';
//here we use a switch statement to translate the outcome of the random number into a sentence

switch (randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  default:
  eightBall = 'Try again';
  break;
}


//here we can also use if statements for the same ooutcome
/*

if(randomNumber === 0){
  eightBall = 'It is certain';
}else if(randomNumber === 1){
  eightBall = 'It is decidedly so';
}else if(randomNumber === 2){
  eightBall = 'Reply hazy try again';
}else if(randomNumber === 3){
  eightBall = 'Cannot predict now';
}else if(randomNumber === 4){
  eightBall = 'Do not count on it';
}else if(randomNumber === 5){
  eightBall = 'My sources say no';
}else if(randomNumber === 6){
  eightBall = 'Outlook not so good';
}else if(randomNumber === 7){
  eightBall = 'Signs point to yes';
}else{
  eightBall = 'Try again';
}

*/

console.log(eightBall);
