# odin-rock-paper-scissors
Problem Statement from Odin's Project Website:

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    Make your function’s playerSelection parameter case-insensitive

    function playRound(playerSelection, computerSelection) {
        // your code here!
    }
        
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

PseudoCode:

computerSelection(){
    choose a random number between 1 and 3 (included)
    switch case to assign a number to a return action
}

playerSelection will prompt and store inside a variable the action

playRound(computerSelection, playerSelection){
    Conditions:
    Same item draws
    Rock beats Scissors
    Scissors beats Paper
    Paper beats Rock
    

    check if both are the same else
    if item check win else other player wins
    return winner true for player, false for computer
}

on each button listen for click, onclick execute one game round and update winner
game(){
    playerSelection = button.id
    get random computer choice
    if play round player add +1 else add to computer
}

