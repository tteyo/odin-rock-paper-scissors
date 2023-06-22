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

const buttons = document.querySelectorAll('button');
const results = document.querySelector('p');

buttons.forEach(button => {
    button.addEventListener('click',function game(){
        computerSelection = getComputerChoice();
        switch (playRound(button.id, computerSelection)){
            case 1:
                results.innerText = `You Win! ${button.id} beats ${computerSelection}`;
                break;
            case -1:
                results.innerText = `You Lose! ${computerSelection} beats ${button.id}`;
                break;
            case 0:
                results.innerText = `Its a Tie! Try again`;
                break;
            default:
                console.log("ReInput");
                break;
        }
    });
});
