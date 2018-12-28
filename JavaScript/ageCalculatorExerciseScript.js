var userAgeYears = prompt("What is your age?");
var userAgeLeapYears = userAgeYears / 4;
var userAgeDays = 365 * userAgeYears + userAgeLeapYears;
alert(userAgeYears + " years old is roughly " + userAgeDays + " days. Wow, you must be pretty wise!");