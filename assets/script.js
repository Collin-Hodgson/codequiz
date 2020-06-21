let timer = document.querySelector("#timer");
let startButton = document.querySelector("#start-button");
let quizStart = document.querySelector("#quiz-start");
let questionNumber = document.querySelector("#question-number");
let rules = document.querySelector("#rules");
let correctMessage = document.querySelector("#correct-message");
let questionChoices = document.querySelector(".choices");
let timeLeft = 0;
let currentQuestion;
let currentChoices;
var questionDiv = document.getElementById("question-number");

let userChoice;
let timerEl = document.querySelector("#timer");
let countdownEl = document.querySelector("#countdown");
let mainEl = document.querySelector("main");
let timerInterval;
let score;

var quizQuestions = [
  {
    question:
      "What is a CMS in web design?",
    choices: ["Content Management System", "Creative Management System", "Content Mixing System", "Creatives Managerial System"],
    answer: "Content Managment System",
  },
  {
    question: "To make your website mobile friendly, you can make your website ____ ?",
    choices: ["Responsive", "Reactive", "Fast Loading", "Light"],
    answer: "Responsive",
  },
  {
    question:
      "What does CSS stand for?",
    choices: ["Current Style Sheet", "Current Sheets Style", "Cascading Style Sheets", "Cascading Sheets Style"],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does SQL stand for?",
    choices: ["Structured Query Language", "Statistical Query Language", "Superior Questions Lot", "Standard Query Lot"],
    answer: "Structured Query Language",
  },
  {
    question: "Which of the following is true about Javascript?",
    choices: ["It is a server side scripting language", "It is client side scripting language", "It is a software", "It is a database"],
    answer: "It is a client side scripting language",
  },
];

document.getElementById("start-button").addEventListener("click", function () {
  startButton.style.visibility = "collapse";
  rules.style.visibility = "collapse";
  startTimer();
  print();
});

function startTimer() {
  timeLeft = 70;
  timerInterval = setInterval(function () {
    countdownEl.textContent = timeLeft;
    timeLeft--;
    countdownEl.textContent = timeLeft;
    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function print() {
  if (quizQuestions.length === 0) {
    endGame();
  }
  currentQuestion = quizQuestions.shift();
  console.log(currentQuestion);
  currentQuestion.textContent = "";
  document.getElementById("answerSection").textContent = "";
  questionDiv.textContent = currentQuestion.question;
  for (i = 0; i < currentQuestion.choices.length; i++) {
    const button = document.createElement("button");
    button.textContent = currentQuestion.choices[i];
    document.getElementById("answerSection").appendChild(button);
    button.addEventListener("click", verifyAnswer);
  }
}

function verifyAnswer() {
  if (this.textContent === currentQuestion.answer) {
    correctMessage.textContent = "Correct";
    print();
  } else {
    correctMessage.textContent =
      "Wrong answer, you lose 7 seconds from your time.";
    timeLeft = timeLeft - 7;
    print();
  }
}

function endGame() {
  console.log(timeLeft);
  clearInterval(timerInterval);
  alert("Time up/Finished. Your left over time is " + timeLeft);

  var element = document.getElementById("endgame-content");
  element.classList.add("invisible");

  var form = document.getElementById("form-row");
  form.classList.remove("invisible");
}