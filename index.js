
var ball = document.querySelector('.ball');
var questionInput = document.querySelector('.question');
var roll = document.querySelector('.roll');
var clear = document.querySelector('.clear');
var userQuestion = document.querySelector('.userQuestion');
var userAnswer = document.querySelector('.userAnswer');
var question = "";
var answer = "";

roll.addEventListener('click', getData);
clear.addEventListener('click', clearField);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getData() {
  question = questionInput.value;
  answer = answersArray[getRandomIndex(answersArray)];
  userQuestion.innerText = question;
  userAnswer.innerText = answer;
  displayData();
  console.log(answer);
  console.log(answersArray);
};

function displayData() {
  hide(questionInput);
  hide(roll);
  hide(ball);
  show(userQuestion);
  show(userAnswer);
};

function clearField() {
  show(questionInput);
  show(roll);
  show(ball);
  hide(userQuestion);
  hide(userAnswer);
};

function hide(e) {
  e.classList.add('hidden');
};

function show(e) {
  e.classList.remove('hidden');
};

var answersArray = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];
