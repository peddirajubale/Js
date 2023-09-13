function time(){
    console.log("Run The Time")
}
console.log("Hello")
setTimeout(time, 1000)
let clear = setInterval(time, 1000)
clearInterval(clear)