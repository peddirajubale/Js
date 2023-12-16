// **5. Reverse a String:**
// Write a program to reverse a string using a `for` loop.

// function reversed_str(name){
//     let reversed = ''
//     for(let n = name.length-1; n >= 0; n--){
//         reversed += name[n]
//     }
//     return reversed
// }
// const p = 'Peddiraju'
// const output = reversed_str(p)
// console.log(output)

// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.

// const n = 7

// let first = 0,second=1, next

// for (let i = 2; i<n; i++){
//     next = first+second
//    console.log(next)
//    first=second
//    second=next
// }

// **8. Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.

const n=5

for(let rows=1; rows<=n; rows++){
    let pattern=''
    for(let cols=1; cols<=rows; cols++){
        pattern = pattern+ "*"+' '
    }
    console.log(pattern)
}

