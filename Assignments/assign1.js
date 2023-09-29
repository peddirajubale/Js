// let email = "rekeshkumarjavvadi@gmail.com"

// let f_4_ltrs = email.slice(0,4)

// let star = "*"
// let stars = star.padStart(5, "*")

// let f_4_ltrs_and_stars = f_4_ltrs+stars

// let length_of_word = f_4_ltrs_and_stars.length

// let star_after = email.slice(length_of_word)

// let result = f_4_ltrs_and_stars.concat(star_after)

// console.log(result)

//-------------------------------------------------------------------------------------

// 1)Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"


// let truncate_string = "Robin Singh"
// console.log(truncate_string.slice(0,4));

// function truncate_string (name, num){
//     let res = name.slice(0,num)
//     return res
// }

// let output = truncate_string("Robin Singh",4)
// console.log(output)


// 2)Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// function abbrev_name(name){
//     let str_name = name.split(" ")
//     let result = str_name[0]+" "+str_name[1][0]+"."

//     return result
// }
// console.log(abbrev_name("Robin Singh"))

// 3)Write a JavaScript function that hides email addresses to prevent unauthorized access. 
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"


// function protect_email(email) {
//     const parts = email.split("@");
//      const username = parts[0];
//      const domain = parts[1];
//      const hiddenUsername = username.slice(0, 5) + "..." + username.slice(-2);
//      return hiddenUsername + "@" + domain;
// }
// console.log(protect_email("robin_singh@example.com"));

// 4)Write a JavaScript function to capitalize the first letter of a string. 
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(capitalize('js string exercises'));


// 5)Write a JavaScript function to uncapitalize the first character of a string. 
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

// function uncapitalize(str) {
//     return str[0].toLowerCase() + str.slice(1);
// }
// console.log(uncapitalize('Js string exercises'));


// 6)Write a function truncateText that takes a string and a maximum length as input and returns a truncated version of the string if it exceeds the maximum length, adding "..." at the end.

// 7)console.log(truncateText("This is a long sentence.", 10));
//  // Output: "This is a..."
// console.log(truncateText("Short text.", 15)); 
// // Output: "Short text."


// function truncateText(str, maxLength){
//     if (str.length > maxLength){
//         return str.slice(0, maxLength)+"...";
//     }
//     return str;
// }
// // let strn = truncateText("This is a long sentence.", 10)
// // console.log(strn)
// console.log(truncateText("Short text.", 15))

// 8)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input 
// (in 24-hour format) and prints a greeting based on the time of day: "Good morning" for hours 6-11, 
// "Good afternoon" for hours 12-17, and "Good evening" for hours 18-23.


// function greetTimeOfDay(time){

//     if(time>=6 && time<=11){
//         return "Good Morning"
//     }else if(time>=12 && time<=17){
//         return "Good Afternoon"
//     }else{
//         return "Good Evening"
//     }
// }
// let greeting = greetTimeOfDay(17)
// console.log(greeting)

// 9)Leap Year Check
// Write a function isLeapYear that takes a year as
//  input and prints "Leap year" if the year is divisible by 4 and not divisible by 100, or 
//  if it's divisible by 400. Otherwise, print "Not a leap year."


// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log("Leap year");
//     } else {
//         console.log("Not a leap year");
//     }
// }
// isLeapYear(2016)

// 10)Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" 
// if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

// function positiveNegativeZero(num) {
//     if (num > 0) {
//         console.log("Positive");
//     } else if (num < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }

// positiveNegativeZero(-5)


// 11)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their corresponding grade: "A" for scores 90 and 
// above, "B" for scores 80-89, "C" for scores 70-79, "D" for scores 60-69, and "F" for scores below 60.

// function calculateGrade(score) {
//     if (score >= 90) {
//         console.log("A");
//     } else if (score >= 80) {
//         console.log("B");
//     } else if (score >= 70) {
//         console.log("C");
//     } else if (score >= 60) {
//         console.log("D");
//     } else {
//         console.log("F");
//     }
// }

// calculateGrade(80)


// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" 
// if the number is even, and "Odd" if the number is odd.


// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// evenOrOdd(4)