// --- GLOBAL VARIABLES ---

// variables for Start elements
var startSection = document.querySelector("#start-section");
var startBtn = document.querySelector("#start-btn");
var startClass = document.querySelector("#start-section").className;

// variables for Question and Answer elements
var questionSection = document.querySelector("#q-section");
var questionHead = document.querySelector("#q-head");
var answerBtn1 = document.querySelector("#btn1");
var answerBtn2 = document.querySelector("#btn2");
var answerBtn3 = document.querySelector("#btn3");
var answerBtn4 = document.querySelector("#btn4");

// variables for Question Objects to store answers

var question1 = {
  question: "Question one text",
  correct: "Correct Answer",
  incorrect1: "Incorrect Answer 1",
  incorrect2: "Incorrect Answer 2",
  incorrect3: "Incorrect Answer 3",
};

// ^ End of global variable ^

// --- FUNCTIONS ---

// Functions to be called when user clicks start button
startSectionHide = function () {
  startSection.className = "start hidden";
};

questionSectionDisplay = function () {
  questionSection.className = "question visible";
};

// Question 1 population after START
var question1Text = function () {
  // Populate question header with question1 object question property
  questionHead.textContent = question1.question;

  // Populate answer buttons
  answerBtn1.textContent = question1.correct;
  answerBtn2.textContent = question1.incorrect1;
  answerBtn3.textContent = question1.incorrect2;
  answerBtn4.textContent = question1.incorrect3;
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
