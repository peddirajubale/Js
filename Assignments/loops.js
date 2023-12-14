// **1. Sum of Natural Numbers:**
// Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.

const n = 5

let sum = 0
for (let i=1; i<=n; i++){
    sum += i
}
console.log(sum)

// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.

const m = 5
let factorial = 1

for(let i=1; i<=m; i++){
    factorial *= i
}
console.log(factorial)
