function getComputerChoice () {
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection) {
// funcion que compara parametros y devuelve true si ganas
// 0=piedra
// 1=papel
// 2=tijera
// ganas 
// si player = tijera & computer = 1 > ganas
// si player = papel & computer = 0 > ganas
// si player = piedra & computer = 2 > ganas
// perdes
// si player = tijera & computer = 0 > perdes
// si player = piedra & computer = 1 > perdes
// si player = papel & computer = 2 > perdes
// empates 
    if (playerSelection == "ROCK" & computerSelection == 2) {
        console.log("you win");
        return true;
    }    else
    if (playerSelection == "PAPER" & computerSelection == 0) {
        console.log("you win");
        return true;
    }  else
    if (playerSelection == "SCISSORS" & computerSelection == 1) {
        console.log("you win");
        return true;
    }  else
    if (playerSelection == "ROCK" & computerSelection == 1) {
        console.log("you loose");
        return false;
    }  else
    if (playerSelection == "PAPER" & computerSelection == 2) {
        console.log("you loose");
        return false;
    }  else
    if (playerSelection == "SCISSORS" & computerSelection == 0) {
        console.log("you loose");
        return false;
    }  else
    if (playerSelection == "ROCK" & computerSelection == 1) {
        console.log("you loose");
        return false;
    }  else
    if (playerSelection == "PAPER" & computerSelection == 2) {
        console.log("you loose");
        return false;
    }  else
    if (playerSelection == "SCISSORS" & computerSelection == 2) {
        console.log("tie");
        return 2;
    }  else
    if (playerSelection == "PAPER" & computerSelection == 1) {
        console.log("tie");
        return 2;
    }  else
    if (playerSelection == "STONE" & computerSelection == 0) {
        console.log("tie");
        return 2;
    }
}
function game() {
//     2 variables win y loose
//     loop 5 veces playRound(playersel, computersel) 
//     si true win+1
//     si false loose+1
// si win es > loose == ganaste las rondas
// else perdiste
    var win = 0;
    var loose = 0;
    for (let i = 0; i < 4; i++) {
        var playerSelection = prompt("wins: " + win + "looses: " +  loose "/n paper, scissors or stone?");
        let computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection)) {
            win++;
        } else
        loose++;
    }
    if (win > loose) {
        console.log("ganaste mejor de 5");
        return true;
    } else
    return false;

}
//stall
