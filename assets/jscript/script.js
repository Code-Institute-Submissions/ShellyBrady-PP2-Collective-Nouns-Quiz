/**Deleted all previous JS coding-will attempt to start from scratch on JS with no tutorial */

//Declare variables first as is best practice
const question = document.getElementById("question");

//set up questions array for quiz

let currentQuestion = 0;
let score = 0 ;

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





