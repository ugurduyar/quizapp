const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

localStorage.setItem("highScores", JSON.stringify([]));
console.log(JSON.parse(localStorage.getItem("highScores")));

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.nodeValue;
});

saveHighScore = (e) => {
  console.log("save button");
  e.preventDefault();
};
