//The length property returns the length of a string:

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

//slice() extracts a part of a string and returns the extracted part in a new string.

//The method takes 2 parameters: start position, and end position (end not included).

let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13);
console.log(part)

// If a parameter is negative, the position is counted from the end of the string:

let f = "Apple, Banana, Kiwi";
let part2 = f.slice(-12);

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

let str = "Apple, Banana, Kiwi";
let result = str.substring(7, 13);
console.log(result)

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part

let string = "Apple, Banana, Kiwi";
let part3 = str.substr(7,5);
console.log(part3)

// The replace() method replaces a specified value with another value in a string:

let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "W3Schools");

// JavaScript String concat()
// concat() joins two or more strings:

let text0 = "Hello";
let text2 = "World";
let text3 = text0.concat(" ", text2);

// The concat() method can be used instead of the plus operator. These two lines do the same:

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");


// JavaScript String padStart()
// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

//Examples
// Pad a string with "0" until it reaches the length 4:

let text4 = "5";
let padded = text4.padStart(4,"0");
//Pad a string with "x" until it reaches the length 4:

let text5 = "5";
let padded1 = text5.padStart(4,"x");
console.log(padded1)