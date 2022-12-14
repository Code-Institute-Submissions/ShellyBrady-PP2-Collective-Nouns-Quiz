/**Deleted all previous JS coding-will attempt to start from scratch on JS with no tutorial */
/**based on code from 
https://www.codingninjas.com/codestudio/library/how-to-create-a-quiz-app-using-javascript
with some changes */

//Declare variables first as is best practice
const question = document.getElementById("question");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const totalScore = document.getElementById("total-score");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const restartBtn = document.getElementById("restart");
const submitBtn = document.getElementById("submit");
const answers = document.getElementById("answers");
const userScore = document.getElementById("user-score");

let currentQuestion = 0;
let score = 0 ;
let questionCounter = 0;

//set up questions array for quiz, add shuffle to change order
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
];

//event listeners for buttons
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
submitBtn.addEventListener("click", submit);
restartBtn.addEventListener("click", restart);

/**based on code from 
https://www.codingninjas.com/codestudio/library/how-to-create-a-quiz-app-using-javascript
with some changes */

//next question function
function next(){
    currentQuestion++;
    if(currentQuestion > 1) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.remove("hide");
        submitBtn.classList.remove("hide"); //hide submit btn
    }
    
    question.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score ;
        if(currentQuestion < 10) {
            next();
        }
        else {
        submit();
        }
    };
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
       if(questions[currentQuestion].answers[1].answer) {
           if(score < 10) {
               score++;
           }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 10) {
        next();
        }
        else {
          submit();
        }
    };
 
    prevBtn.classList.remove("hide");
}

/**function to make prev button work */
/**based on code from https://www.codingninjas.com/codestudio/library/how-to-create-a-quiz-app-using-javascript
with some changes*/

function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    question.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(questionCounter < 10) {
            next();
        }
        else if(questionCounter === 10) {
            submit();
        }
    };
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(questionCounter < 10) {
            next();
        }
        else if(questionCounter === 10) {
            submit();
        }
    };
  
    nextBtn.classList.remove("hide");
 }

 /** function for submit button */

function submit() {

    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");  
    restartBtn.classList.remove("hide");

 /**message on submit depending on score */
    let result;
    
    if (score >= 7) {
     result = "Well done, you did great!";
    } 
    else {
      result = "Maybe you should try again!";
    }
    
  document.getElementById("result").innerHTML = result;
    
  } 
 
  /** reset score etc if restarted*/

function restart() {
    questionCounter = 0;
    currentQuestion = 0;
    document.getElementById("result").innerHTML = " ";
    prevBtn.classList.remove("hide");
    restartBtn.classList.add("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    userScore.innerHTML = score;
    score = 0;
    startQuiz();
 }  

/*this function mostly the same as previously submitted project as sourced
https://www.codingninjas.com/codestudio/library/how-to-create-a-quiz-app-using-javascript
with some changes*/
//function to begin quiz and to choose questions
function startQuiz() {
  currentQuestion = 0;
  totalScore.innerHTML = questions.length;
  question.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    if(questions[currentQuestion].answers[0].answer) {
        if(score < 10) {
            score++;
            }
    }
    userScore.innerHTML = score;
    if(questionCounter < 10) {
        next();
    }
    else if(questionCounter === 10) {
        submit();
    }
    };
   falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(questionCounter < 10) {
            next();
        }
        else if(questionCounter === 10) {
            submit();
       }
    };
  
    prevBtn.classList.add("hide"); 

}           

startQuiz();

