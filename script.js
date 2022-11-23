// variabl3s declaration
//     2 variables win y loose
//     loop 5 veces playRound(playersel, computersel) 
//     si true win+1
//     si false loose+1
// si win es > loose == ganaste las rondas
// else perdiste
var win = 0;
var loose = 0;
var tie = 0;
var round = 0;
var playerSelection;
var computerSelection;

// UI development
const reset = document.querySelector('#reset');
const winMark = document.querySelector('#wins');
const looseMark = document.querySelector('#looses');
const tieMark = document.querySelector('#ties');
const roundMark = document.querySelector('#rounds');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

const resetMark = function () {
  // alert("Hello World");
  win = 0;
  loose = 0;
  tie = 0;
  round = 0;
  roundMark.textContent = round;
  winMark.textContent = win;
  looseMark.textContent = loose;
  tieMark.textContent = tie;
}
reset.addEventListener('click', resetMark);
rock.addEventListener('click', () => {
    playerSelection = "ROCK";
    game();
  }
  ) 
  paper.addEventListener('click', () => {
        playerSelection = "PAPER";
        game();
      }
  )
  scissor.addEventListener('click', () => {
        playerSelection = "ROCK";
        game();
      }  
)

// Game Logic from prev xrcise
function getComputerChoice () {
        return Math.floor(Math.random()*3);
    }

    function playRound(playerSelection, computerSelection) {
    
        if ((playerSelection == "ROCK" & computerSelection == 2)
        || (playerSelection == "PAPER" & computerSelection == 0)
        || (playerSelection == "SCISSORS" & computerSelection == 1))
        {
          //  alert("you win");
            return 1;
        }    else
        if ((playerSelection == "ROCK" & computerSelection == 1) 
        || (playerSelection == "PAPER" & computerSelection == 2) 
        || (playerSelection == "SCISSORS" & computerSelection == 0)) 
        {
      //      alert("you loose");
            return 0;
        }  else
        if ((playerSelection == "SCISSORS" & computerSelection == 2)
        || (playerSelection == "PAPER" & computerSelection == 1) 
        || (playerSelection == "STONE" & computerSelection == 0))
        {
       //     alert("tie");
            return 2;
        }
    }
    function game() {
    
         round++;
         roundMark.textContent = round;
         console.log(computerSelection);
      computerSelection = getComputerChoice   ();
            if (playRound(playerSelection, computerSelection) == 1) {
                win++;
                winMark.textContent = win;
            } else 
            if (playRound(playerSelection, computerSelection) == 2) {
                tie++;
                tieMark.textContent = tie;
            } else {
            loose++;
            looseMark.textContent = loose;
              
            }  
      if (win == 5){
        alert("Ganaste mejor de 5");
        resetMark();
      }
      else if (loose == 5){
        alert("Perdiste mejor de 5");
        resetMark();
      }
      
      
  }