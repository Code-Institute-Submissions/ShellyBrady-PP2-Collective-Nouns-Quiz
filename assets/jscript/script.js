const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")

/**questions for quiz */
let questions = [
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
    }
]

/**on click events for buttons */

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

/**Begin Quiz function to start when page loads */

function beginQuiz() {
   currentQuestion = 0;
   totalScore.innerHTML = questions.length;
   questionText.innerHTML = questions[currentQuestion].question;
   trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
   trueBtn.onclick = () => {
       if(questions[currentQuestion].answers[0].answer) {
           if(score < 5) {
               score++;
           }
       }
       userScore.innerHTML = score;
       if(currentQuestion < 4) {
           next();
       }
   }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
   falseBtn.onclick = () => {
       if(questions[currentQuestion].answers[1].answer) {
           if(score < 5) {
               score++;
           }
       }
       userScore.innerHTML = score;
       if(currentQuestion < 4) {
           next();
       }
   }
 
   prevBtn.classList.add("hide");
}
 
beginQuiz();
   /** reset score etc if restarted*/

function restart() {
   currentQuestion = 0;
   prevBtn.classList.remove("hide");
   nextBtn.classList.remove("hide");
   submitBtn.classList.remove("hide");
   trueBtn.classList.remove("hide");
   falseBtn.classList.remove("hide");
   score = 0;
   userScore.innerHTML = score;
   beginQuiz();
}   

/**function to jump to next question */

function next() {
   currentQuestion++;
   if(currentQuestion >= 2) {
       nextBtn.classList.add("hide");
       prevBtn.classList.remove("hide");
   }
   questionText.innerHTML = questions[currentQuestion].question;
   trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
   trueBtn.onclick = () => {
       if(questions[currentQuestion].answers[0].answer) {
           if(score < 3) {
               score++;
           }
       }
       userScore.innerHTML = score;
       if(currentQuestion < 2) {
           next();
       }
   }
 
   falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
   falseBtn.onclick = () => {
       if(questions[currentQuestion].answers[1].answer) {
           if(score < 3) {
               score++;
           }
       }
       userScore.innerHTML = score;
       if(currentQuestion < 2) {
           next();
       }
   }
 
   prevBtn.classList.remove("hide");
}

/** function for submit button */
function submit() {
   prevBtn.classList.add("hide");
   nextBtn.classList.add("hide");
   submitBtn.classList.add("hide");
   trueBtn.classList.add("hide");
   falseBtn.classList.add("hide");   
   questionText.innerHTML ="Congratulations on submitting the Quiz!"
}