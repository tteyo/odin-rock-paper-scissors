function getComputerChoice(){
    return "ROCK";
}

function playRound(playerSelection,computerSelection){
    return false;
}

function game(){
    let playerWins = 0,
        computerWins = 0;
    let playerSelection,
        computerSelection;

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Choose between: Rock, Paper, or Scissors").toUpperCase();
        computerSelection = getComputerChoice();
        if(playRound(playerSelection, computerSelection)){
            playerWins += 1;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        }else{
            computerWins += 1;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        }
        if (playerWins === 5 || computerWins === 5){
            break;
        }
    }

}

game();