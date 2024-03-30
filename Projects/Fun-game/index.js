let counterElement = document.getElementById("counter")
let inputElement = document.getElementById("input")


    let countdown = 10;

    let counter = setInterval(function(){
        countdown = countdown-1
        counterElement.textContent = countdown
        if(countdown === 0){
            counterElement.textContent="BOOM"
            clearInterval(counter)
        }
        
    },1000)

    inputElement.addEventListener('keydown',function(event){
        let inputElt = event.target.value 

        if(inputElt==="dufuse" && event.key === "Enter" && countdown !== 0){
            counterElement.textContent = "You Did It"
            clearInterval(counter)
        }
    })
    
