var minLimit = 1;
var maxLimit = 50;
var guessedNumber = prompt("Guess a number between " + minLimit + " and " + maxLimit + "!");
var secretNumber = 31;

while(guessedNumber != secretNumber){
	if((guessedNumber > secretNumber) && (guessedNumber <= maxLimit)){
		alert("Too high. Guess again.");
		guessedNumber = prompt("Guess a number between " + minLimit + " and " + maxLimit + "!");
	}
	if((guessedNumber < secretNumber) && (guessedNumber >= minLimit)){
		alert("Too low. Guess again.");
		guessedNumber = prompt("Guess a number between " + minLimit + " and " + maxLimit + "!");
	}
	if((guessedNumber < minLimit) || (guessedNumber > maxLimit)){
		alert("Hey, remember when I said it's a number between " + minLimit + " and " + maxLimit + "? Guess again.")
		guessedNumber = prompt("Guess a number between " + minLimit + " and " + maxLimit + "!");
	}
}

if(guessedNumber == secretNumber){
	alert("You guessed it. Congratulations!!");
};
