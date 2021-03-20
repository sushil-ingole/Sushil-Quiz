var readlineSync = require('readline-sync');

var score = 0;

// let highscore = 0;
let user;

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if(question === "What's your name? ") {
    console.log("Welcome " + userAns);
    user = userAns;
  }
  if(question != "What's your name? ") {
    if(userAns === answer) {
      console.log("Right");
      score++;
    } else {
      console.log("Wrong");
    }
    console.log("Your curernt score: " + score);
  }
  console.log("------------------------")
}

var questions = [{
  question: "What's your name? "
}, {
  question: "Is my age greater than 18? (yes/no) ",
  answer: "yes"
}, {
  question: "What's my hometown? ",
  answer: "Akola"
}, {
  question: "Who is my favourite superhero? ",
  answer: "Superman"
}, {
  question: "What is my favourite food? ",
  answer: "Ladyfinger"
}, {
  question: "What is my passion? ",
  answer: "Dancing"
}, {
  question: "What is my favourite season? ",
  answer: "Winter"
}, {
  question: "Do I like travelling? (yes/no) ",
  answer: "yes"
}, {
  question: "What's my favourite colour? ",
  answer: "Black"
}];
let j=1;
while(j!=0) {
  for(var i=0; i<questions.length; i++) {
    var currentQue = questions[i];
    play(currentQue.question, currentQue.answer);
  }
  console.log("Total score: " + score + "/8");
  // if(highscore < score) {
  //   console.log("You made a new highscore " + user);
  //   highscore = score;
  //   console.log("------------------------");
  // }
  score = 0;
  j--;
}

// play("Is my age greater than 25? ", "yes");
// play("What's my hometown? ", "Akola");
// play("")

// function add(num1, num2) {
//   var sum = num1 + num2;
//   console.log("Sum is: " + sum);
// }

// var num1 = parseInt(readlineSync.question("Enter 1st number: "));

// var num2 = parseInt(readlineSync.question("Enter 2nd number: "));

// add(num1, num2);
// add(2,2);