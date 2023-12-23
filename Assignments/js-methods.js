// function sum(...args){
//     res = 0
//     for (let arg of args){
//         res += arg
//     }
//     console.log(res)
// }
// sum(1,2,3,4,5,6)
// sum(10,45)

// // rest parametor

// function add(a,b,...rest){
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }
// add(2,5,6,7,8,9,2)

// Destructuring Arrays

// const [a,b,c,...rest]=[2,5,6,3,9,4]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(rest)

// Destructuring Objects

// const {firstName,...rest}={
//     firstName:"peddiraju",
//     lastName:"Bale",
//     age:25
// }
// console.log(firstName)
// console.log(rest)

// const firstName = "Peddiraju"

// console.log(`firstName ${firstName}
//             Good Morning,
//             Have a nice Day`)

// Ternary Operator

// let speed = 70
// let message=speed>=100?"Too Fast":"Ok"
// console.log(message)

// Switch Cases

// let day=6
// switch(day){
//     case(0):
//     console.log("Sunday")
//     break;

//     case(1):
//     console.log("Monday")
//     break;

//     case(2):
//     console.log("Tuesday")
//     break;

//     case(3):
//     console.log("Wednsday")
//     break;

//     case(4):
//     console.log("Thusday")
//     break;

//     case(5):
//     console.log("Friday")
//     break;

//     case(6):
//     console.log("Saturaday")
//     break;

//     default:
//         console.log("Invalid")
//         break
// }

// let a = 4
// let b = 5
// let operation = "sub"
// result=''
// switch(operation){
//     case 'add':
//         result=`Add of a + b = ${a+b}`
//         break;

//     case 'sub':
//         result = `Sub Of a - b = ${a-b}`
//         break

// }
// console.log(result)

// Arrow Function

let sum = (a,b)=>{
    return a+b
}
console.log(sum(3,5))