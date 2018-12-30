var userAnswer = prompt("Are we there yet?");
var correctAnswerYes = "yes";
var correctAnswerYeah = "yeah";

while((userAnswer !== correctAnswerYes) && (userAnswer !== correctAnswerYeah)){
	userAnswer = prompt("Are we there yet?");
}

if(userAnswer === correctAnswerYes || userAnswer === correctAnswerYeah){
	alert("Yay, we finally made it!");
};

// Version 2 - Way simpler answer from course, made to accept any userAnswer that contains "yes" or "yeah". 

// var userAnswer = prompt("Are we there yet?");

// while((userAnswer.indexOf("yes") === -1) && (userAnswer.indexOf("yeah") === -1)){
//     userAnswer = prompt("Are we there yet?");
// }

// alert("Yay we finally made it!");

