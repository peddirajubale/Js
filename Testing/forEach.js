const arr = [1,2,5,7,9]

// function abc(val){
//     console.log(val)
// }
// arr.forEach(abc)

let sum = 0
function add(val){
    sum = sum+val
    console.log(sum)
}

arr.forEach(add)
