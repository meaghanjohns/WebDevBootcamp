// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise.

function isEven(num) {
	if(num % 2 === 0) {
		return "true";
	}
	return "false";
};

// Write a function factorial() which takes a single numeric argument and returns the factorial of that number.

function factorial(num) {
	var problemTwo = 1; 
	for(var i = 1; i <= num; i++) {
		problemTwo = problemTwo * i;
	}
	return problemTwo
};

// Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.

function kebabToSnake(str) {
	var userString = str.replace(/-/g, "_");
	return userString;
};