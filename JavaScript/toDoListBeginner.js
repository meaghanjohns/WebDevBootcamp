// My original version of the to do list code before watching the code-along video.

// var toDoList = [];

// window.setTimeout(function(){
// 	var userAnswer = prompt("What would you like to do?");

// 	while(userAnswer){
// 		while(userAnswer === "new"){
// 			var userToDo = prompt("Enter a new to do.");
// 			toDoList.push(userToDo);
// 			userAnswer = prompt("What would you like to do?");
// 		}
// 		if(userAnswer === "list"){
// 			console.log(toDoList);
// 			alert("Check the console log!");
// 			userAnswer = prompt("What would you like to do?");
// 		}
// 		if(userAnswer === "quit"){
// 			userAnswer = alert("Have a great day!");
// 		}
// 	};
// }, 500);

// Refactored code after watching the code-along video is below.

var toDoList = [];

window.setTimeout(function(){
	var userAnswer = prompt("What would you like to do?");

	while(userAnswer !== "quit"){
		if(userAnswer === "new"){
			var userToDo = prompt("Enter a new to do.");
			toDoList.push(userToDo);
		}
		else if(userAnswer === "list"){
			console.log(toDoList);
			alert("Check the console log!");
		}
		userAnswer = prompt("What would you like to do?");
	};
	alert("You quit the app. Have a great day!");
}, 500);