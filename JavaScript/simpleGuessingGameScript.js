var stringGuess = prompt("Guess a number between 1 and 50!")
var guessedNumber = Number(stringGuess);
var secretNumber = 23;

if(guessedNumber === secretNumber){
	alert("You guessed it. Congratulations!!");
}

//User is being asked to refresh page because this guessing game is an exercise created before learning loops.
else if((guessedNumber > secretNumber) && (guessedNumber <= 50)){
	alert("Too high. Guess again by refreshing the page.");
}

else if((guessedNumber < secretNumber) && (guessedNumber >= 1)){
	alert("Too low. Guess again by refreshing the page.");
}

else if((guessedNumber > 50) || (guessedNumber <= 0)){
	alert("Hey, remember when I said it's a number between 1 and 50? Guess again by refreshing the page.")
}

