
const prompt = require('prompt-sync')({sigint: true});

let choice1 = prompt('Player 1, please choose rock, paper, or scissors: ');
console.log(`Confirmed selection, Player 1: ${choice1}.`)

let choice2 = prompt('Player 2, please choose rock, paper, or scissors: ');
console.log(`Confirmed selection, Player 2: ${choice2}.`)

if (choice1 === "rock" && choice2 === "paper"){
  console.log('Paper covers rock. Player 2 wins!');

}else if (choice1 === "rock" && choice2 === "scissors"){
console.log('Rock smashes scissors, Player 1 wins!'); 

}else if(choice1 === "paper" && choice2 === "rock"){
  console.log('Paper covers rock, Player 1 wins!');

}else if(choice1 === "paper" && choice2 === "scissors"){
  console.log('Scissors cut paper, Player 2 wins!');

}else if(choice1 === "scissors" && choice2 === "paper"){
  console.log('Scissors cut paper, Player 1 wins!')  

}else if(choice1 === "scissors" && choice2 === "rock"){
  console.log('Rock smashes scissors, Player 2 wins!')  

}else if(choice1 && choice2 === "rock"){
  console.log('The game is a tie!')

}else if(choice1 && choice2 === "paper"){
  console.log('The game is a tie!')

}else if(choice1 && choice2 === "scissors"){
  console.log('The game is a tie!')

} else if (choice1 !== typeof "string" || choice2 !== typeof "string"){
  console.log("You may only choose rock, paper or scissors.")

}