// function displayGreeting(displayName){
//     console.log("Hello")
//     displayName()
//     console.log("Good Morning")
// }

// displayGreeting(function(){
//     console.log("Raju")
// })

// let setIntervalBtnElt = document.getElementById("setTime")
// let clearIntervalBtnElt = document.getElementById("clearTime")

// let uniqueId = null
// setIntervalBtnElt.onclick = function(){
//     let counter = 0
//     uniqueId = setInterval(function(){
//         console.log(counter)
//         counter = counter+1
//     },1000)
//     console.log(uniqueId)
    
// }

// clearIntervalBtnElt.onclick = function(){
//     clearInterval(uniqueId)
// }

// Callback is a function that is passed as an argument to another function

// function displayGreeting(displayName){
//     console.log("Hello")
//     displayName()
//     console.log("good evng")
// }

// displayGreeting(function(){
//     console.log("raju")
// })

// setInterval
// clearInterval
// 1000 milliseconds = 1sec


let setIntervalBtnElt = document.getElementById("setTime")
let setClearTime = document.getElementById("clearTime")


setIntervalBtnElt.onclick = function(){
    let counter = 0
    setInterval(function(){
        
        counetr = counter +1
        console.log(counter)
    },1000)

}