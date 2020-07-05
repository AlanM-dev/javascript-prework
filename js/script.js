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
  
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove,argPlayerMove){
  
  console.log('WYBRANE RUCHY:', argComputerMove, argPlayerMove);

  if(argPlayerMove == 'nieznany ruch'){
    printMessage('NIEDOZWOLONY RUCH. WYBIERZ LICZBĘ OD 1-3!')
  }

  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Ty przegrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Ty przegrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Ty przegrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
  }
}

// PLAYER MOVE //

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

// COMPUTER MOVE //

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

// RESULT //

let gameResult = displayResult(computerMove,playerMove);

