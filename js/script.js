// PLAY GAME FUNCTION //
{
const playGame = function(argPlayerInput){
  clearMessages();

  const playerInput = argPlayerInput;
  
  // FUNCTIONS //

  const getMoveName = function(argMoveId){

    console.log('RUCH:', argMoveId);

    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';  
    } else if(argMoveId == 3){
      return 'nożyce';
    }
    
  }
  const displayResult = function(argComputerMove,argPlayerMove){
    
    console.log('WYBRANE RUCHY:', argComputerMove, argPlayerMove);

    if(argPlayerMove == 'nieznany ruch'){
      printMessage('NIEDOZWOLONY RUCH. WYBIERZ LICZBĘ OD 1-3!')
    }

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        playerScore = playerScore + 1;
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ty przegrywasz!');
        computerScore = computerScore + 1;
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
      } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        playerScore = playerScore + 1;
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty przegrywasz!');
        computerScore = computerScore + 1;
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ty przegrywasz!');
        computerScore = computerScore + 1;
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        playerScore = playerScore + 1;
    }
  }

  // PLAYER MOVE //

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  // COMPUTER MOVE //

  //uczciwa gra // 

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  // 75% WinRate //
  /*
  let procentNumber = Math.floor(Math.random() * 100 + 1);

  if (procentNumber > 75){
    let randomNumber = Math.floor(Math.random() * 3 + 1); 
    computerMove = getMoveName(randomNumber);

  } else {
    if (playerMove == 'kamień') {
      computerMove = 'nożyce';
    } else if (playerMove == 'nożyce') {
      computerMove = 'papier';
    } else {
      computerMove = 'kamień';
    }
  }
*/


  // RESULT //

  displayResult(computerMove,playerMove);
  
  console.log(playerScore,computerScore);

  document.querySelector('#result').innerHTML = 'Gracz: ' + playerScore + ' - ' + computerScore + ' :Komputer';

  // guzik reset //
  const resetButton = function(argGameScore){
    clearMessages();
    computerScore = argGameScore;
    playerScore = argGameScore;
    document.querySelector('#result').innerHTML = '';
  }
  
  document.getElementById('reset').addEventListener('click', function() {
    resetButton(0);
  }); 
  
}

let computerScore = 0
let playerScore = 0


// LISTENERS //

document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});

}

