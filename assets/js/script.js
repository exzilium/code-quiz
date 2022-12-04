var startContainer = document.querySelector("#start-container");
var startHeader = document.querySelector("#start-head");
var startDesc = document.querySelector("#start-desc");
var startBtn = document.querySelector("#start-btn");

// To be called when user clicks start button
startElementRemove = function () {
  startHeader.remove();
  startDesc.remove();
  startBtn.remove();
};

startBtn.addEventListener("click", function () {
  // hide starting elements
  console.log("start!");
  startElementRemove();

  // create game elements
  var questionEl = document.createElement("h2");
  var answerList = document.createElement("ul")
  var answerEl1 = document.createElement("li");
  var answerEl2 = document.createElement("li");
  var answerEl3 = document.createElement("li");
  var answerEl4 = document.createElement("li");

  // add text to game elements
  questionEl.textContent = "QUESTION HEADER";
  answerEl1.textContent = "answer 1";
  answerEl2.textContent = "answer 2";
  answerEl3.textContent = "answer 3";
  answerEl4.textContent = "answer 4";

  // append game elements
  startContainer.append(questionEl);
  startContainer.append(answerList)
  answerList.append(answerEl1);
  answerList.append(answerEl2);
  answerList.append(answerEl3);
  answerList.append(answerEl4);
});
