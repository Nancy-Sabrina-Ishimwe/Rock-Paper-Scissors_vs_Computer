const getplayerSelection = userInput => {
  userInput = userInput.toLowerCase(); 
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
     return userInput;
   } else {
     console.log('Error!');
   }
 };
 
 function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
     case 0:
       return 'rock';
     case 1:
       return 'paper';
     case 2:
       return 'scissors';
     }
 };
 
 
  
  function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return 'The game is a tie!';
      } 
        
      else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
           return 'You Lose! Paper beats Rock!';
        } else {
           return 'You won!';
       } 
      }
      
      else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
          return 'You lose rock beats scissors!';
        } else {
          return 'You won!';
        }
      } 
  
  else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose scissors beats papers!';
    } else {
      return 'You won!';
      
    }
   }
  }
  const Game = () => {
      let playerSelection = getplayerSelection(prompt());
      const computerSelection = getComputerChoice();
    console.log('You threw: ' + playerSelection);
    console.log('The computer threw: ' + computerSelection);
    console.log(playRound(playerSelection,computerSelection));
  }
  Game();
