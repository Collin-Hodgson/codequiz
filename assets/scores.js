let highscoreInput = document.querySelector("highscore-text");
let highscoreForm = document.querySelector("highscore-form");
let highscoreList = document.querySelector("highscore-list");
let highscoreCountSpan = document.querySelector("highscore-count");
let addName = [];

function renderHighscores() {
  highscoreList.innerHTML = "";
  highscoreCountSpan.textContent = addName.length;

  for (i = 0; i < addName.length; i++) {
    let name = addName[i];

    let li = document.createElement("li");
    li.textContent = name;
    highscoreList.appendChild(li);
  }
}

highscoreForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let highscoreText = highscoreInput.value.trim();

  if (highscoreText === "") {
    return;
  }

  addName.push(highscoreText);
  highscoreInput.value = "";

  storeNames();
  renderHighscores();
});

function init() {
  let storedNames = JSON.parse(localStorage.getItem("addName"));

  if (storedNames !== null) {
    addName = storedNames;
  }

  renderAddname();
}

function storeNames() {
  localStorage.setItem("addName", JSON.stringify(addName));
}

highscoreForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let highscoreText = highscoreInput.value.trim();

  if (highscoreText === "") {
    return;
  }

  addName.push(highscoreText);
  highscoreInput.value = "";

  storeAddname();
  renderAddname();
});
