
var questionInput = document.querySelector('.question');
var roll = document.querySelector('.roll');
var clear = document.querySelector('.clear');
var question = "";
var answer = "";

roll.addEventListener('click', getData);
clear.addEventListener('click', clearField);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getData() {
  answer = answersArray[getRandomIndex(answersArray)];
  console.log(answer);
  console.log(answersArray);
}
