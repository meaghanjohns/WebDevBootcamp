var age = prompt("What is your age?");

if(age < 0){
	console.log("Error: Your age cannot be negative.")
}

if(age == 21){
	console.log("Happy 21st birthday!!")
}

if((age % 2 != 0) && age > 0){
	console.log("Your age is odd!")
}

//I was unable to write the JS to calculate the perfect square without the solution.
if(age % Math.sqrt(age) === 0){
	console.log("Perfect square!");
}