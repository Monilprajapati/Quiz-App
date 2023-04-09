const quizData = [
  {
    question: "Which are used with a tag to modify its function?",
    a: "Files",
    b: "Functions",
    c: "Attributes",
    d: "Documents",
    correct: "c",
  },
  {
    question:
      "The language that instructs the browser on how to display the hypertext, and adds pictures to the document is __.",
    a: "C",
    b: "COBOL",
    c: "BASIC",
    d: "HTML",
    correct: "d",
  },
  {
    question:
      "Which tag is used to display text in title bar of a web document?",
    a: "Title tag",
    b: "Meta tag",
    c: "Comment tag",
    d: "Body tag",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "Which tag is used to identify the keywords describing the site?",
    a: "Comment tag",
    b: "Title tag",
    c: "Meta tag",
    d: "Anchor tag",
    correct: "c",
  },
  {
    question:
      "What is the name of the location address of the hypertext documents?",
    a: "Uniform Resource Locator",
    b: "File",
    c: "Web address",
    d: "Web server",
    correct: "a",
  },
  {
    question: "How many colour names are used by the browsers?",
    a: "8",
    b: "10",
    c: "12",
    d: "16",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const optionEls = document.querySelectorAll(".option");
const questionEl = document.getElementById("question");
const text_a = document.getElementById("text_a");
const text_b = document.getElementById("text_b");
const text_c = document.getElementById("text_c");
const text_d = document.getElementById("text_d");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  text_a.innerText = currentQuizData.a;
  text_b.innerText = currentQuizData.b;
  text_c.innerText = currentQuizData.c;
  text_d.innerText = currentQuizData.d;
}
function deselectAnswers() {
  optionEls.forEach((optionEl) => (optionEl.checked = false));
}
function getSelected() {
  let option;
  optionEls.forEach((optionEl) => {
    if (optionEl.checked) {
      option = optionEl.id;
    }
  });
  return option;
}
submitBtn.addEventListener("click", () => {
  const option = getSelected();
  if (option) {
    if (option === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>
       <button onclick="location.reload()">Reload</button>
       `;
    }
  }
});
