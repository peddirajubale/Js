// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

// **Example:**
// ```javascript
// const numbers = [7, 2, 9, 1, 5];

// let first_num=numbers[0]
// for (let i=1;i<=numbers.length;i++){
//     if(first_num<numbers[i]){
//         first_num=numbers[i]
//     }
// }
// console.log(first_num)

// **10. Reverse an Array:**
// Write a program to reverse the elements of an array using a `for` loop.

// **Example:**
// ```javascript
// const inputArray = [1, 2, 3, 4, 5];

//     let reversedArr=[]
// for(let i=inputArray.length-1; i>=0; i--){
//     reversedArr.push(inputArray[i])
// }
// console.log(reversedArr)

// **Question 2: Find the Maximum Number in an Array**

// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

// **Example:**
// ```javascript

// function max_number(arr_num){
//     let max=arr_num[0]
//     for(let i=1; i<arr_num.length; i++){
//         if(max<arr_num[i]){
//             max=arr_num[i]
//         }
//     }
//     return max
// }

// const input = [3, 7, 1, 9, 5];
// const output = max_number(input)
// console.log(output)

// **Question 3: Count the Occurrences of a Character in a String**

// Write a function `countChar` that takes a string and a character as input and returns the number of times that character appears in the string.

// **Example:**
// ```javascript

// function countChar(inputString,inputChar){
//     count=''
//     for(let char of inputString){
//         if(char ===inputChar){
//             count += char
//         }
//     }
//     console.log(count.length)
// }

// const inputString = "programming";
// const inputChar = "m"
// const output = countChar(inputString,inputChar)

// **Question 5: Check for Palindrome**

// Write a function `isPalindrome` that takes a string as input and returns `true` if it's a palindrome (reads the same forwards and backward), and `false` otherwise.

// **Example:**
// ```javascript

// function isPalindrome(input){
//     let reversed_word=''
//     for(i=input.length-1; i>=0; i--){
//         reversed_word += input[i]
//     }
//     return reversed_word === input
// }

// const input = "racecar";
// const output = isPalindrome(input);
// console.log(output)

// **Question 6: Merge Two Sorted Arrays**

// Write a function `mergeSortedArrays` that takes two sorted arrays as input and merges them into a single sorted array.

// **Example:**
// ```javascript

function mergeSortedArrays(arr1,arr2){
    let merg = [...arr1,...arr2]
    return merg.sort()
}

const inputArray1 = [1, 3, 5];
const inputArray2 = [2, 4, 6];
const output = mergeSortedArrays(inputArray1, inputArray2);
console.log(output)




















