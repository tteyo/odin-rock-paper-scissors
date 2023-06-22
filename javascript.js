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

const buttons = document.querySelectorAll('button');
const results = document.querySelector('p');
const computer = document.querySelector('.computer');
const human = document.querySelector('.human');
const winner = document.querySelector('.winner');

let humanWins = 0;
let computerWins = 0;

buttons.forEach(button => {
    button.addEventListener('click', function game(){
        if(humanWins === 5 || computerWins === 5) return;
        playerSelection = button.id
        computerSelection = getComputerChoice();
        switch (playRound(playerSelection, computerSelection)){
            case 1:
                humanWins = humanWins + 1;
                human.innerText = `Human: ${humanWins}`;
                results.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;
            case -1:
                computerWins += 1;
                computer.innerText = `Computer: ${computerWins}`;
                results.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;
            case 0:
                results.innerText = `Its a Tie! Try again`;
                break;
            default:
                console.log("ReInput");
                break;
        }
        if(humanWins === 5 || computerWins === 5){
            winner.innerText = humanWins>computerWins?"You Win":"You Lose";
        }
    })
});