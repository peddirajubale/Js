//---> Spread Operator with Arrays

// let arr1 = [2,3]
// let arr2 = [1,...arr1,4]
// console.log(arr2)

// let arr1 = [2,3]
// let arr2 = [1,4]
// console.log([...arr1,...arr2])

//---> Spread Operator with Objects

// let person = {name:"Peddiraju",age:25}
// let personDetails = {...person,city:"Hyderabad"}
// console.log(personDetails)

// let person = {name:"Peddiraju",age:25}
// let adderss = {city:"Hyderabad",picode:500085}
// let personDetails = {...person,...adderss}
// console.log(personDetails)

// ---> Spread Operator with Functions

// function add(a,b,c){
//     return a+b+c
// }

// let numbers = [1,2,3]
// console.log(add(...numbers))

// Rest Parameter:-..............

// function numbers(...args){
//     console.log(args)
// }
// numbers(1,3,5)

// function numbers(a,b,...args){
//     console.log(a)
//     console.log(b)
//     console.log(args)
// }
// numbers(1,3,5,8,9)

// function sum(...args){
//     let result = 0;
//     for (let arg of args){
//         result = result+arg
//     }
//     console.log(result)
// }

// sum(1,2,3,4)
// sum(1,2,3,4,55,6)

//---> Template Literals

let firstName = "Raju"
console.log(`Hello ${firstName}`)

let result = `The sum of 4 and 5 is ${4+5}`
console.log(result)

let person = {name:"Raju"}
console.log(`My Name is ${person.name}`)




