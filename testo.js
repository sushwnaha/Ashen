const questions = [
  {
    question: "Who has scored more goals in their career: Draven or Messi?",
    answer1: "Draven",
    answer2: "Messi",
    correctAnswer: "Messi",
  },
  {
    question: "Which player holds the record for most goals in a single season?",
    answer1: "Draven",
    answer2: "Messi",
    correctAnswer: "Messi",
  },
  // Add more questions here!
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answer1El = document.getElementById("answer1");
const answer2El = document.getElementById("answer2");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next-question");

function displayQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;
  answer1El.textContent = question.answer1;
  answer2El.textContent = question.answer2;
}

function checkAnswer(answer) {
  const question = questions[currentQuestion];
  if (answer === question.correctAnswer) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.classList.remove("wrong");
    score++;
  } else {
    feedbackEl.textContent = `Wrong! The correct answer is ${question.correctAnswer}`;
    feedbackEl.classList.add("wrong");
  }
  feedbackEl.style.display = "block";
  nextButton.style.display = "inline";
}

answer1El.addEventListener("click", () => checkAnswer(answer1El.textContent));
answer2El.addEventListener("click", () => checkAnswer(answer2El.textContent));

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    feedbackEl.style.display = "none";
    nextButton.style.display = "none";
  } else {
    questionEl.textContent = `You answered ${score} out of ${questions.length} questions correctly!`;
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    nextButton.style.display = "none";
  }
});

displayQuestion();
