function getComputerChoice(){
    return "ROCK";
}

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return 0;
    }else if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        return 1;
    }else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        return 1;
    }else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        return 1;
    }
    return -1;
}

function game(){
    let playerWins = 0,
        computerWins = 0;
    let playerSelection,
        computerSelection;

    while(playerWins != 5 && computerWins != 5){
        playerSelection = prompt("Choose between: Rock, Paper, or Scissors").toUpperCase();
        computerSelection = getComputerChoice();
        switch (playRound(playerSelection, computerSelection)){
            case 1:
                playerWins += 1;
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case -1:
                computerWins += 1;
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            case 0:
                console.log(`Its a Tie! Try again`);
                break;
            default:
                console.log("ReInput");
                break;
        }
    }

}

game();