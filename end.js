const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.nodeValue;
});

saveHighScore = (e) => {
  console.log("save button");
  e.preventDefault();
};
