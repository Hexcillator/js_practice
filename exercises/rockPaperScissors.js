//little rock, paper and scissors game

const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
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

const determineWinner = (userChoice, computerChoice)=>{
  if(userChoice === 'Please enter a valid value!'){
    return 'Please enter a valid value!';
  }
  if(userChoice === computerChoice){
    return 'You played: '+ userChoice + ' and Computer played: '+computerChoice+'. The game is a tie. Try again!';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'You played: '+ userChoice + ' and Computer played: '+computerChoice+'. You lose!';
    }
    if(computerChoice === 'scissors'){
      return 'You played: '+ userChoice + ' and Computer played: '+computerChoice+'. You win!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'You played: '+ userChoice + ' and Computer played: '+computerChoice+'. You lose!';
    }
    if(computerChoice === 'rock'){
      return 'You played: '+ userChoice + ' and Computer played: '+computerChoice+'. You win!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'You played: '+ userChoice + ' and Computer played: '+computerChoice+'. You lose!';
    }
    if(computerChoice === 'paper'){
      return 'You played: '+ userChoice + ' and Computer played: '+computerChoice+'. You win!';
    }
  }
  if(userChoice === 'bomb'){
    return 'Heyyyy you won using the magic weapon!';
  }

}


const playGame= myChoice =>{
  const userChoice = getUserChoice(myChoice);
  const computerChoice=getComputerChoice();
  return determineWinner(userChoice,computerChoice);
}

console.log(playGame('bomb'));
