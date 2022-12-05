// --- GLOBAL VARIABLES ---

// variables for Start elements
var startSection = document.querySelector("#start-section");
var startBtn = document.querySelector("#start-btn");
var startClass = document.querySelector("#start-section").className;

// variables for Question and Answer elements
var questionSection = document.querySelector("#q-section");
var questionHead = document.querySelector("#q-head");
var questionBtnDiv = document.querySelector("#q-btns");
var answerBtn1 = document.querySelector("#btn1");
var answerBtn2 = document.querySelector("#btn2");
var answerBtn3 = document.querySelector("#btn3");
var answerBtn4 = document.querySelector("#btn4");

// QUESTION variables for Question Objects to store answers

// QUESTION 1
var question1 = {
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
  question: "Question TWO text",
  answer1: "Incorrect Answer 1",
  answer2: "Incorrect Answer 2",
  answer3: "Correct Answer",
  answer4: "Incorrect Answer 3",
  correct: function () {
    return this.answer3;
  },
};

// ^ End of Questions ^
// ^ End of global variable ^

// --- FUNCTIONS SECTION ---

// Functions to be called when user clicks start button
startSectionHide = function () {
  startSection.className = "start hidden";
};

questionSectionDisplay = function () {
  questionSection.className = "question visible";
};

// function for WRONG ANSWER

var wrongAnswerUser = function () {
  // Create Wrong Answer HTML and append to question section
    var wrongAnswerP = document.createElement("p");
  var wrongAnswerHR = document.createElement("hr");
  wrongAnswerP.innerHTML = "Wrong. Try Again!";
  questionSection.appendChild(wrongAnswerHR);
  questionSection.appendChild(wrongAnswerP);

  // Timer to remove HTML
  setTimeout(function () {
    wrongAnswerP.remove();
    wrongAnswerHR.remove();
  }, 1500);

  // To add, functionality to remove time from timer
};

// --- QUESTION FUNCTIONS ---

// Question 1 population after START
var question1Text = function () {
  // Populate question header with question1 object question property
  questionHead.textContent = question1.question;

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
// Question 2 population
var question2Text = function () {
  // Populate question header with question1 object question property
  questionHead.textContent = question2.question;

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

// ^ End of Functions ^

// --- START GAME BUTTON EVENT ---

// START button click event listener
startBtn.addEventListener("click", function () {
  console.log("start!");
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
  if (event.target.textContent === question1.correct()) {
    console.log("Correct Answer selected!");
    question2Text();
  } else {
    console.log("Wrong answer, bucko!");
    // if incorrect, append "wrong" to section
    wrongAnswerUser();
  }
});
