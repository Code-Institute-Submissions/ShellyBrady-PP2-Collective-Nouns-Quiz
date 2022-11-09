/**Deleted all previous JS coding-will attempt to start from scratch on JS with no tutorial */

//Declare variables first as is best practice
const question = document.getElementById("question");
const maxQuestion = 5;
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const totalScore = document.getElementById("total-score");
const userScore = document.getElementById("user-score");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const restartBtn = document.getElementById("restart");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0 ;
let questionCounter = 0;

//Define shuffle using Fisher-Yates algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
}

//set up questions array for quiz, add shuffle to change order
let questions = shuffle([
    {
        question: "A pod of dolphins",
        answers: [
            {option:"I don't think so", answer : false},
            {option:"I think that's right", answer : true},
        ]
    },
    {
        question: "A herd of socks",
        answers: [
            {option:"I don't think so", answer : true},
            {option:"I think that's right", answer : false},
        ]
    },
    {
        question: "A litter of kittens",
        answers: [
            {option:"I don't think so", answer : false},
            {option:"I think that's right", answer : true},
        ] 
    },
    {
        question: "A gaggle of sheep",
        answers: [
            {option:"I don't think so", answer : true},
            {option:"I think that's right", answer : false},
        ] 
    },
    {
        question: "A blessing of unicorns",
        answers: [
            {option:"I don't think so", answer : false},
            {option:"I think that's right", answer : true},
        ] 
    },
    {
        question: "A glaring of cats",
        answers: [
            {option:"I don't think so", answer : false},
            {option:"I think that's right", answer : true},
        ] 
    },
    {
        question: "A ship of angels",
        answers: [
            {option:"I don't think so", answer : true},
            {option:"I think that's right", answer : false},
        ] 
    },
    {
        question: "A drawer of aliens",
        answers: [
            {option:"I don't think so", answer : true},
            {option:"I think that's right", answer : false},
        ] 
    },
    {
        question: "A murder of crows",
        answers: [
            {option:"I don't think so", answer : false},
            {option:"I think that's right", answer : true},
        ] 
    },
    {
        question: "A prickle of porcupines",
        answers: [
            {option:"I don't think so", answer : false},
            {option:"I think that's right", answer : true},
        ] 
    }
]);

//event listeners for buttons
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);


//function to begin quiz and to choose questions

/*this function mostly the same as previously submitted project as sourced
https://www.codingninjas.com/codestudio/library/how-to-create-a-quiz-app-using-javascript*/

function startQuiz() {
  currentQuestion = 0;
  totalScore.innerHTML = questions.length;
  question.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if(questions[currentQuestion].answers[0].answer) {
        if(score < 5) {
            score++;
            }
    }
    userScore.innerHTML = score;
    if(currentQuestion < 5) {
        next();
    }
    };
   falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    };
  
    prevBtn.classList.add("hide");      
}           

startQuiz()
