console.log("Print all numbers between -10 and 19.");
var problemOne = -10;
while(problemOne <= 19){
	console.log(problemOne);
	problemOne++;
};

console.log("Print all even numbers between 10 and 40.");
var problemTwo = 10;
while(problemTwo <= 40){
	console.log(problemTwo);
	problemTwo+=2;
};

console.log("Print all odd numbers between 300 and 333.");
var problemThree = 300;
while(problemThree <= 333){
	console.log(problemThree + 1);
	problemThree+=2;
};

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50.");
var problemFour = 5;
while(problemFour <= 50){
	if((problemFour % 5 === 0) && (problemFour % 3 === 0)){
		console.log(problemFour);
	};
	problemFour++;
};