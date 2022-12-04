// variables for START elements
var startSection = document.querySelector("#start-section");
var startBtn = document.querySelector("#start-btn");
var startClass = document.querySelector("#start-section").className;

// varibles for QUESTION elements
var questionSection = document.querySelector("#q-section");

// Functions to be called when user clicks start button
startSectionHide = function () {
  startSection.className = "start hidden";
};

questionSectionDisplay = function () {
  questionSection.className = "question visible";
};

startBtn.addEventListener("click", function () {
  // hide starting elements
  console.log("start!");
  startSectionHide();
  questionSectionDisplay();
});
