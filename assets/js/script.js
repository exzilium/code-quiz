// --- GLOBAL VARIABLES ---

// stored scores from previous games in local storage

var prevScores = [];

// Start elements
var startSection = document.querySelector("#start-section");
var startBtn = document.querySelector("#start-btn");
var startClass = document.querySelector("#start-section").className;
var startHighScore = document.querySelector("#highscore-btn");
var startTimerHeader = document.querySelector("#timer-container");

// Question and Answer elements
var questionSection = document.querySelector("#q-section");
var questionHead = document.querySelector("#q-head");
var questionBtnDiv = document.querySelector("#q-btns");
var answerBtn1 = document.querySelector("#btn1");
var answerBtn2 = document.querySelector("#btn2");
var answerBtn3 = document.querySelector("#btn3");
var answerBtn4 = document.querySelector("#btn4");

// Game Over score and user initials entry

var gameOverSection = document.querySelector("#gameover-section");
var gameOverUserScore = document.querySelector("#userscore");

// High Score screen

var highScoreSection = document.querySelector("#score-section");
var scoreList = document.querySelector("#score-list");
var goBack = document.querySelector("#back-btn");
var clearScores = document.querySelector("#clear-btn");

// variables for win state

var isWin = false;
var outOfTime = false;

// variables for timer

var timerDisplay = document.querySelector("#timer");
var timer;
var timerCount;

// QUESTION variables for Question Objects to store answers

// QUESTION 1
var question1 = {
  questionNumber: 1,
  question: "Inside which HTML element should you put the JavaScript link?",
  correct: function () {
    return this.answer4;
  },
  answer1: "<style>",
  answer2: "<a href>",
  answer3: "<js>",
  answer4: "<script>",
};

// QUESTION 2
var question2 = {
  questionNumber: 2,

  question: "How can you write an IF statement in JavaScript?",
  answer1: "if i = 0",
  answer2: "if / then",
  answer3: "if (i == 0)",
  answer4: "iffy",
  correct: function () {
    return this.answer3;
  },
};

// QUESTION 3
var question3 = {
  questionNumber: 3,
  question: "What is the right way to write an array in JavaScript?",
  answer1:
    "var cars = 'magic school bus', 'windowless van', 'big honkin truck'",
  answer2:
    "var cars = ['magic school bus', 'windowless van', 'big honkin truck']",
  answer3:
    "var cars = (magic school bus), (windowless van), (big honkin truck)",
  answer4:
    "var cars = 1: magic school bus, 2: windowless van, 3: big honkin truck",
  correct: function () {
    return this.answer2;
  },
};

// QUESTION 4
var question4 = {
  questionNumber: 4,
  question: "Which event occurs when the user clicks on an HTML element?",
  answer1: "onclick",
  answer2: "Frustrated User",
  answer3: "onmouseclick",
  answer4: "keydown",
  correct: function () {
    return this.answer1;
  },
};

// ^ End of Questions ^
// ^ End of global variable ^

// --- FUNCTIONS SECTION ---

// INIT

init = function () {
  // get scores
  var storedScores = JSON.parse(localStorage.getItem("score"));

  if (storedScores !== null) {
    prevScores = storedScores;
  }
};

// Functions to be called when user clicks start button

// Visible and hidden class update functions to hide/display html sections

// start section
startSectionHide = function () {
  startSection.className = "start hidden";
};
startSectionDisplay = function () {
  startSection.className = "start visible";
  startHighScore.className = "visible";
  startTimerHeader.className = "visible";
  timerDisplay.textContent = "";
};

// question section
questionSectionHide = function () {
  questionSection.className = "question hidden";
};
questionSectionDisplay = function () {
  questionSection.className = "question visible";
};
// game over section
gameOverSectionHide = function () {
  gameOverSection.className = "gameover hidden";
};

gameOverSectionDisplay = function () {
  gameOverSection.className = "gameover visible";
  gameOverUserScore.innerHTML = timerCount;
};

// high score section
highScoreSectionHide = function () {
  highScoreSection.className = "score hidden";
};
highScoreSectionDisplay = function () {
  // score screen visible
  highScoreSection.className = "score visible";
  // hide high score and timer
  startHighScore.className = "hidden";
  startTimerHeader.className = "hidden";
  // load scores from local storage
  var storedScores = JSON.parse(localStorage.getItem("score"));

  for (let i = 0; i < storedScores.length; i++) {
    var scoreDisplayItem = document.createElement("li");
    scoreDisplayItem.innerHTML = storedScores[i];
    scoreList.appendChild(scoreDisplayItem);
  }
};

// Timer functionality
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerDisplay.textContent = timerCount;
    if (timerCount > 0 && isWin) {
      // Tests if win condition is met
      clearInterval(timer);
      gameOver();
    }
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      // in case of negative score, set to 0
      timerCount = 0;
      timerDisplay.textContent = timerCount;
      gameOver();
    }
  }, 1000);
}

// GAME OVER

var gameOver = function () {
  questionSectionHide();
  gameOverSectionDisplay();
};

// WRONG ANSWER

var wrongAnswerUser = function () {
  // Create Wrong Answer HTML and append to question section
  var wrongAnswerP = document.createElement("p");
  var wrongAnswerHR = document.createElement("hr");
  wrongAnswerP.innerHTML = "Wrong. Try Again!";
  questionSection.appendChild(wrongAnswerHR);
  questionSection.appendChild(wrongAnswerP);

  // Remove time from timerCount
  timerCount = timerCount - 5;

  // Timer to remove "Wrong" message after 1.5 seconds
  setTimeout(function () {
    wrongAnswerP.remove();
    wrongAnswerHR.remove();
  }, 1500);
};

// RIGHT ANSWER (USING WRONG ANSWER ELEMENTS FROM ABOVE)

var rightAnswerUser = function () {
  // Create Right Answer HTML and append to question section
  var wrongAnswerP = document.createElement("p");
  var wrongAnswerHR = document.createElement("hr");
  wrongAnswerP.innerHTML = "Correct!";
  questionSection.appendChild(wrongAnswerHR);
  questionSection.appendChild(wrongAnswerP);

  // Remove time from timerCount
  timerCount = timerCount - 5;

  // Timer to remove "Correct" message after .5 seconds
  setTimeout(function () {
    wrongAnswerP.remove();
    wrongAnswerHR.remove();
  }, 500);
};

// CLEAR SCORES

var removeHighScores = function (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// --- QUESTION FUNCTIONS ---

// Question 1 population (after START)
var question1Text = function () {
  // Populate question header with question1 object question property
  questionHead.textContent = question1.question;
  questionHead.dataset.question = question1.questionNumber;
  // Populate answer button text
  answerBtn1.textContent = question1.answer1;
  answerBtn2.textContent = question1.answer2;
  answerBtn3.textContent = question1.answer3;
  answerBtn4.textContent = question1.answer4;

  // Update answer button data-correct attribute to compare click event with correct answer
  answerBtn1.dataset.correct = question1.correct();
  answerBtn2.dataset.correct = question1.correct();
  answerBtn3.dataset.correct = question1.correct();
  answerBtn4.dataset.correct = question1.correct();
};
// Question 2 population (after Q1)
var question2Text = function () {
  // Populate question header with question1 object question property
  questionHead.textContent = question2.question;
  questionHead.dataset.question = question2.questionNumber;

  // Populate answer button text
  answerBtn1.textContent = question2.answer1;
  answerBtn2.textContent = question2.answer2;
  answerBtn3.textContent = question2.answer3;
  answerBtn4.textContent = question2.answer4;

  // Update answer button data-correct attribute to compare click event with correct answer
  answerBtn1.dataset.correct = question2.correct();
  answerBtn2.dataset.correct = question2.correct();
  answerBtn3.dataset.correct = question2.correct();
  answerBtn4.dataset.correct = question2.correct();
};
// Question 3 population (after Q2)
var question3Text = function () {
  // Populate question header with question1 object question property
  questionHead.textContent = question3.question;
  questionHead.dataset.question = question3.questionNumber;

  // Populate answer button text
  answerBtn1.textContent = question3.answer1;
  answerBtn2.textContent = question3.answer2;
  answerBtn3.textContent = question3.answer3;
  answerBtn4.textContent = question3.answer4;

  // Update answer button data-correct attribute to compare click event with correct answer
  answerBtn1.dataset.correct = question3.correct();
  answerBtn2.dataset.correct = question3.correct();
  answerBtn3.dataset.correct = question3.correct();
  answerBtn4.dataset.correct = question3.correct();
};

// Question 4 population (after Q3)
var question4Text = function () {
  // Populate question header with question1 object question property
  questionHead.textContent = question4.question;
  questionHead.dataset.question = question4.questionNumber;

  // Populate answer button text
  answerBtn1.textContent = question4.answer1;
  answerBtn2.textContent = question4.answer2;
  answerBtn3.textContent = question4.answer3;
  answerBtn4.textContent = question4.answer4;

  // Update answer button data-correct attribute to compare click event with correct answer
  answerBtn1.dataset.correct = question4.correct();
  answerBtn2.dataset.correct = question4.correct();
  answerBtn3.dataset.correct = question4.correct();
  answerBtn4.dataset.correct = question4.correct();
};

// ^ End of Functions ^

// --- START GAME BUTTON EVENT ---

// START button click event listener
startBtn.addEventListener("click", function () {
  // isWin condition reset
  isWin = false;
  // Timer start
  timerCount = 61;
  startTimer();
  // Hide Start Section
  startSectionHide();
  // Display Question Section
  questionSectionDisplay();
  // Populate first question and answer text
  question1Text();
});

// IN-GAME ANSWER CHECKING

// Answer button click event listener
questionBtnDiv.addEventListener("click", function (event) {
  // if correct run populate next question
  if (
    questionHead.dataset.question === "1" &&
    event.target.textContent === question1.correct()
  ) {
    rightAnswerUser();
    question2Text();
  } else if (
    questionHead.dataset.question === "2" &&
    event.target.textContent === question2.correct()
  ) {
    rightAnswerUser();
    question3Text();
  } else if (
    questionHead.dataset.question === "3" &&
    event.target.textContent === question3.correct()
  ) {
    rightAnswerUser();
    question4Text();
  } else if (
    questionHead.dataset.question === "4" &&
    event.target.textContent === question4.correct()
  ) {
    // Winner is true when end of questions is reached
    rightAnswerUser();
    return (isWin = true);
  } else {
    // if incorrect, append "wrong" to section
    wrongAnswerUser();
    return;
  }
});

// GAME OVER USER SUBMIT FORM

// form
var submitForm = document.querySelector("#submitForm");

// function - event handler for form submission
function handleForm(event) {
  event.preventDefault();
  var userInitials = document.querySelector("#user-initials").value;

  var gameScore = userInitials.toUpperCase().trim() + ": " + timerCount;

  // add newest score to front of the full scores list
  prevScores.unshift(gameScore);

  localStorage.setItem("score", JSON.stringify(prevScores));

  // hide / display html
  gameOverSectionHide();
  highScoreSectionDisplay();
  submitForm.reset();
}

// Event listener for submit form
submitForm.addEventListener("submit", handleForm);

// Event listener for Go Back

goBack.addEventListener("click", function () {
  highScoreSectionHide();
  startSectionDisplay();
  removeHighScores(scoreList);
});

// Event listener for Clear Highscores

clearScores.addEventListener("click", function () {
  localStorage.clear("score");
  removeHighScores(scoreList);
});

// Event listener for High Scores nav button

startHighScore.addEventListener("click", function () {
  startSectionHide();
  highScoreSectionDisplay();
});

// Initial function
init();
