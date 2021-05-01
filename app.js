let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


// this will choose random value from Rock,Paper or Scissors
 function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//this will convert 'r','p','s' to "Rock","Paper" and "Scissors"
 function convertToWord(letter) {
 	if (letter === "r") return "Rock";
 	if (letter === "p") return "Paper";
 	return "Scissors";
 }

//When user will win, it will increase the win count and appear on screen

 function win(userChoice, computerChoice){
 	userScore++;
 	userScore_span.innerHTML = userScore;
 	computerScore_span.innerHTML = computerScore;
 	const smallUserWord = "user".fontsize(4).sub();
 	const smallCompWord = "comp".fontsize(4).sub();
 	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You win! 🔥 "`;

 }

//When user will lose,this will increase the lost count and appear on screen

function lose(userChoice, computerChoice){
 	computerScore++;
 	userScore_span.innerHTML = userScore;
 	computerScore_span.innerHTML = computerScore;
 	const smallUserWord = "user".fontsize(4).sub();
 	const smallCompWord = "comp".fontsize(4).sub();
 	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} You Lost..💩"`;
 }

//This function relates when there will be draw between user choice  and computer choice

 function draw(userChoice, computerChoice){
 	const smallUserWord = "user".fontsize(4).sub();
 	const smallCompWord = "comp".fontsize(4).sub();
 	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord} It's Draw..!"`;
 }

//All the possible combination are included here which will make changes in Win ,Lose or Draw function

function game( userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice) {
		case "rs":
			case "pr":
		case "sp":
		 win(userChoice, computerChoice);
		 break;

		case "rp":
		case "ps":
		case "sr":
		 lose(userChoice, computerChoice);
		 break;

		case "rr":
		case "pp":
		case "ss":
		 draw(userChoice, computerChoice);
		 break; 
	}
	
}

// main function is updated here

function main(){
	rock_div.addEventListener('click', function(){
		game("r");
	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

main();