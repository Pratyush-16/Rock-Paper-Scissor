const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


rock_div.addEventListener('click', function() {
	console.log("hey you clicked on rock");
})

paper_div.addEventListener('click', function() {
	console.log("hey you clicked on paper");
})

scissors_div.addEventListener('click', function() {
	console.log("hey you clicked on scissors");
})
