function callback(){
    console.log("Peddiraju")
}

function add (a,b,func){
    console.log(a+b)
    func()
}

// add (7,9)

let a =2
let b=5
add (a,b,callback)