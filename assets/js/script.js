// --- GLOBAL VARIABLES ---

// Start elements
var startSection = document.querySelector("#start-section");
var startBtn = document.querySelector("#start-btn");
var startClass = document.querySelector("#start-section").className;

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

// High Score screen

var highScoreSection = document.querySelector("#score-section");

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
  question: "Question one text",
  correct: function () {
    return this.answer4;
  },
  answer1: "Incorrect Answer 1",
  answer2: "Incorrect Answer 2",
  answer3: "Incorrect Answer 3",
  answer4: "Correct Answer",
};

// QUESTION 2
var question2 = {
  questionNumber: 2,

  question: "Question TWO text",
  answer1: "Incorrect Answer 1",
  answer2: "Incorrect Answer 2",
  answer3: "Correct Answer",
  answer4: "Incorrect Answer 3",
  correct: function () {
    return this.answer3;
  },
};

// QUESTION 3
var question3 = {
  questionNumber: 3,
  question: "Question THREE text",
  answer1: "Incorrect Answer 1",
  answer2: "Correct Answer",
  answer3: "Incorrect Answer 2",
  answer4: "Incorrect Answer 3",
  correct: function () {
    return this.answer2;
  },
};

// QUESTION 4
var question4 = {
  questionNumber: 4,
  question: "Question FOUR text",
  answer1: "Correct Answer",
  answer2: "Incorrect Answer 1",
  answer3: "Incorrect Answer 2",
  answer4: "Incorrect Answer 3",
  correct: function () {
    return this.answer1;
  },
};

// ^ End of Questions ^
// ^ End of global variable ^

// --- FUNCTIONS SECTION ---

// Functions to be called when user clicks start button

// Visible and hidden class update functions to hide/display html sections

// start section
startSectionHide = function () {
  startSection.className = "start hidden";
};
startSectionDisplay = function () {
  startSection.className = "start visible";
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
};

// high score section
highScoreSectionHide = function () {
  highScoreSection.className = "score hidden";
};
highScoreSectionDisplay = function () {
  highScoreSection.className = "score visible";
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
  console.log("Game over, mate");
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
  console.log("start!");
  // isWin condition reset
  isWin = false;
  // Timer start
  timerCount = 60;
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
    console.log("Correct Answer selected 1!");
    question2Text();
  } else if (
    questionHead.dataset.question === "2" &&
    event.target.textContent === question2.correct()
  ) {
    console.log("Correct Answer selected 2!");
    question3Text();
  } else if (
    questionHead.dataset.question === "3" &&
    event.target.textContent === question3.correct()
  ) {
    console.log("Correct Answer selected 3!");
    question4Text();
  } else if (
    questionHead.dataset.question === "4" &&
    event.target.textContent === question4.correct()
  ) {
    // Winner is true when end of questions is reached
    console.log("End of Questions");
    return (isWin = true);
  } else {
    console.log("Wrong answer, bucko!");
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
  console.log("User: " + userInitials + " Score: " + timerCount);
  var gameScore = {
    playerInitial: userInitials.toUpperCase().trim(),
    playserScore: timerCount,
  };
  console.log(gameScore);
  localStorage.setItem("score", JSON.stringify(gameScore));
  gameOverSectionHide();
  highScoreSectionDisplay();
}

// Event listener for submit form
submitForm.addEventListener("submit", handleForm);
