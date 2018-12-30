var minLimit = 1;
var maxLimit = 50;
var stringGuess = prompt("Guess a number between " + minLimit + " and " + maxLimit + "!");
var guessedNumber = Number(stringGuess);
var secretNumber = 23;

if(guessedNumber === secretNumber){
	alert("You guessed it. Congratulations!!");
}

//User is being asked to refresh page because this guessing game is an exercise created before learning loops.
else if((guessedNumber > secretNumber) && (guessedNumber <= maxLimit)){
	alert("Too high. Guess again by refreshing the page.");
}

else if((guessedNumber < secretNumber) && (guessedNumber >= minLimit)){
	alert("Too low. Guess again by refreshing the page.");
}

else{
	alert("Hey, remember when I said it's a number between " + minLimit + " and " + maxLimit + "? Guess again by refreshing the page.")
}

