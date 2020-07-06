// PLAY GAME FUNCTION //
{
function playGame(argPlayerInput){
  clearMessages();

  let playerInput = argPlayerInput;
  
  // FUNCTIONS //

  function getMoveName(argMoveId){

    console.log('RUCH:', argMoveId);

    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';  
    } else if(argMoveId == 3){
      return 'nożyce';
    }
    
    //printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    //return 'nieznany ruch';
  }

  function displayResult(argComputerMove,argPlayerMove){
    
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
/*
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
*/
  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  // COMPUTER MOVE //

  //uczciwa gra // 

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  //let computerMove = '';

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


}

let computerScore = 0
let playerScore = 0

// guzik reset//



// LISTENERS //

document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
  //printMessage('guzik 1 kliknięty');
});
document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
  //printMessage('guzik 2 kliknięty');
});
document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
  //printMessage('guzik 3 kliknięty');
});
}

