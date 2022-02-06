const correctAnswers = ["c", "a", "a", "a", "b", "b"];
const quiz = document.querySelector(".quizArea");
const results = document.querySelector(".quizResult");
const reload = document.querySelector(".reload");
let total = document.querySelector(".pointsAwarded");
let message = document.querySelector(".personalizedMessage");
let points = 0;

quiz.addEventListener("submit", (e) => {
  e.preventDefault();

  let userResponses = [
    quiz.one.value,
    quiz.two.value,
    quiz.three.value,
    quiz.four.value,
    quiz.five.value,
    quiz.six.value,
  ];

  for (item in userResponses) {
    if (userResponses[item] === correctAnswers[item]) {
      points++;
    }
  }
  percentageScore = Number(((points / correctAnswers.length) * 100).toFixed(2));

  total.innerText = percentageScore;
 
});
