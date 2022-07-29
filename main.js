// let myBolean = confirm("OK === True\nCancel === false");
// console.log(myBolean)

//  let name = prompt("Kindly Enter your name.");
//  console.log(name ?? "You didn't enter your name")

// First Interactive Game

let playGame = confirm("Let's play Rock, Paper and Scissors")
if (playGame){
    let playerChoice = prompt("Please enter Paper, Rock or Scissors");
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"
        ){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = 
                computerChoice === 1 ? "rock" :
                computerChoice === 2 ? "paper" :
                "scissors"
            let result =
                playerOne === computer
                ? "Tie Game"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne:${playerOne}\nComputer:${computer}
                \nComputer Wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne:${playerOne}\nComputer:${computer}
                \nComputer Wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne:${playerOne}\nComputer:${computer}
                \nComputer Wins!`
                : `playerOne:${playerOne}\nComputer:${computer}
                \nplayerOne Wins!`;
            alert(result)
            let playAgain = confirm("Wanna play again?")
            playAgain ? location.reload() : alert("Thanks for playing again")
        }
    }
}