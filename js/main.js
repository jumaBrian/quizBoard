// Presents the business logic of the website

//Resolve user score from responses given
const quizSolutions = ["c", "a", "a", "a", "b", "b"];
const quiz = document.querySelector(".quizArea");
let total = document.querySelector(".pointsAwarded");
let points = 0;

quiz.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents browser redirection

  let userResponses = [
    quiz.one.value,
    quiz.two.value,
    quiz.three.value,
    quiz.four.value,
    quiz.five.value,
    quiz.six.value,
  ];

  for (item in userResponses) {
    if (userResponses[item] === quizSolutions[item]) {
      points++;
    }
  }
  percentageScore = Number(((points / quizSolutions.length) * 100).toFixed(2));

  total.innerText = percentageScore;

  // for auto scroll to the top on button click

  scrollTo({
    top: 0,
    behavior: "auto",
  });

  // reloads the page for quiz reattempt

  const reload = document.querySelector(".reload");

  reload.addEventListener("click", () => {
    window.location.reload();
  });

  // generating personalized message based on user score

  let message = document.querySelector(".personalizedMessage");

  if (percentageScore > 80) {
    message.innerText = "You have passed EXCELLENTLY";
  } else if (percentageScore >= 50 && percentageScore <= 80) {
    message.innerText = "You have passed FAIRLY";
  } else {
    message.innerText = "You have scored poorly and need to retake test";
  }
});
