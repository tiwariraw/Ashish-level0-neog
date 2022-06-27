import chalk from 'chalk';
import readlineSync from 'readline-sync';

var userName = readlineSync.question("What's your name: ");
console.log(chalk.redBright.italic("Welcome "+userName+" to 'C++' Quiz"));
console.log(chalk.bold.bgGreen("***LEVEL 1***"));


let score = 0;

//highScore object
let highScore = {
    uName: "Sachin",
    score: 2
}

let q1 = {
    question : "Who coined the term C++? ",
    answer : "Rick Mascitti"
}

let q2 = {
    question : "Who is the creator of C++ ? ",
    answer : "Bjarne Stroustrup"
}

let q3 = {
    question : "In which year C++ was first standardized ? ",
    answer : "1998"
}

let q4 = {
    question : "Which is the latest version of C++? ",
    answer : "C++20"
}
let q5 = {
    question : "What is the smallest individual unit in a program? ",
    answer : "token"
}
let q6 = {
    question : "How can we reuse classes? ",
    answer : "Inheritance"
}
let q7 = {
    question : "How can you achieve run time polymorphism? ",
    answer : "method overriding"
}
let q8 = {
    question : "Is 'friend' and 'virtual' a keyword in C++? ",
    answer : "yes"
}
let q9 = {
    question : "Auto, static, extern and register are called as? ",
    answer : "storage classes"
}
let q10 = {
    question : "Every variable should be separated by ___ operator? ",
    answer : "comma"
}


//array of objects
let arrayOfQuestionObjects = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

//play function
function play(obj){
    var userAnswer = readlineSync.question(obj.question);
    if(userAnswer.toUpperCase() === obj.answer.toUpperCase()){
        console.log("Correct Answer");
        score++;
    }else{
        console.log("Wrong Answer");
        // score--; 
    }
    console.log("Current Score: %d",score);
    console.log('--------------');
    if(score===5)
        console.log(chalk.bold.bgGreen("***LEVEL 2***"));
    else if(score===8)
        console.log(chalk.bold.bgGreen("***LEVEL 3***"));
}
//highScore function
function highScoreFunc(score){
    if(score>highScore.score){
        console.log("Congratulation!!! You have beaten the high score");
        console.log("Please send the screenshot to get your high score updated");
        highScore.uName = userName; 
        highScore.score = score;
    }
}
//Fisher-Yates algorithm to shuffle the array
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));           
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }      
    return arr;
}

for(let i=0;i<arrayOfQuestionObjects.length;i++){
    shuffle(arrayOfQuestionObjects);
    play(arrayOfQuestionObjects[i]);
}

console.log("Final Score: %d",score);
highScoreFunc(score);
console.log("High Score: ");
console.log(highScore);


