const questions = [
  {
    questions: "Which is the largetest animal in the world?",
    answer: [
      { text: "Shark", correct: false},
      { text: "blue Whale", correct: true},
      { text: "Elephant", correct: false},
      { text: "Giraffe", correct: false},
    ]
  },
  {
    questions: "Who is the current president of the United States?",
    answer: [
      { text: "Trump", correct: true},
      { text: "Obama", correct: false},
      { text: "Bush", correct: false},
      { text: "Clinton", correct: false},
    ]
  },
  {
    questions: "What is the capital city of France?",
    answer: [
      { text: "Paris", correct: true},
      { text: "London", correct: false},
      { text: "Berlin", correct: false},
      { text: "Madrid", correct: false},
    ]
  },
  {
    questions: "What is the largest planet in our solar system?",
    answer: [
      { text: "Jupiter", correct: true},
      { text: "Earth", correct: false},
      { text: "Saturn", correct: false},
      { text: "Mars", correct: false},
    ]
  }
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"
  showQuestion();
}

function showQuestion(){
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion,questions;
}

// 18