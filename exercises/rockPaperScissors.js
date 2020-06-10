//little rock, paper and scissors game

const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else{
    return 'Please enter a valid value!';
  }
}

const getComputerChoice=()=>{
  const number = Math.floor(Math.random()*3);
  switch (number){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    default:
    return 'invalid value';
  }
}

console.log(getComputerChoice());
