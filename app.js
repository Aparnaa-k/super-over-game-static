const StrikeBtn = document.getElementById("strike");
const ResetBtn = document.getElementById("reset");
const $team1Score = document.getElementById("score-team1");
const $team2Score = document.getElementById("score-team2");
const $team1Wicket = document.getElementById("wickets-team1");
const $team2Wicket = document.getElementById("wickets-team2");

var team1Score = 0;
var team2Score = 0;
var team1Wicket = 0;
var team2Wicket = 0;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
var turn = 1;
const possibleOutcome = [0, 1, 2, 3, 4, 6, "W"];

function gameOver(){
    if (team1Score > team2Score) alert("IND wins")
    if (team1Score < team2Score )  alert("PAK wins")
    if(team1Score === team2Score) alert("It is another superover!")
}

function update(){
    $team1Score.textContent = team1Score;
    $team1Wicket.textContent = team1Wicket;
    $team2Score.textContent = team2Score;
    $team2Wicket.textContent = team2Wicket;
}

ResetBtn.onclick = () => {
    window.location.reload();
}


StrikeBtn.onclick = () => {
    const randomNumber = possibleOutcome[Math.floor(Math.random() * possibleOutcome.length)];

    if (turn === 2){
        team2BallsFaced++;
        document.querySelector(
           `#team2-superover div:nth-child(${team2BallsFaced})`
        ).textContent = randomNumber;
        if (randomNumber =="W"){
            team2Wicket++;
        }
        else {
            team2Score += randomNumber;
        }

        if (team2BallsFaced === 6 || team2Wicket === 2 || team2Score > team1Score)
            gameOver();
          }

        if (turn === 1) {
            team1BallsFaced++;
            document.querySelector(
              `#team1-superover div:nth-child(${team1BallsFaced})`
            ).textContent = randomNumber;
            if (randomNumber === "W") {
              team1Wicket++;
            } 
            else {
              team1Score += randomNumber;
            }
            if (team1BallsFaced === 6 || team1Wicket === 2) turn = 2;
        }
        update();
    };