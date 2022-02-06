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

  // for auto scroll to the top on button click
  scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // reloads the page for quiz reattempt
  reload.addEventListener("click", () => {
    window.location.reload();
  });

  // generating personalized message based on user score
  if (percentageScore > 80) {
    message.innerText = "You have passed EXCELLENTLY";
  } else if (percentageScore >= 50 && percentageScore <= 80) {
    message.innerText = "You have passed FAIRLY";
  } else {
    message.innerText = "You have scored poorly and need to retake test";
  }
});
