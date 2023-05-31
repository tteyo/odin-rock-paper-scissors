function getComputerChoice(){
    let decide = Math.floor(Math.random()*3);
    switch (decide){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        default:
            return "SCISSORS";
    }
}

function playRound(playerSelection,computerSelection){
    //Issue when option is not one of the 3 it defaults to lose
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
        //Null values for prompt results in an error interrupting the program because of toUpperCase
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