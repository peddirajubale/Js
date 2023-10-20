function onIncrease(){
    let counterEle = document.getElementById("counterValue")

    let previousCounterValue = counterEle.textContent
    let updatedCounterValue = parseInt(previousCounterValue) + 1

    if (updatedCounterValue > 0){
        counterEle.style.color="green"
    }

    counterEle.textContent = updatedCounterValue
}

function onDecrease(){
    let counterEle = document.getElementById("counterValue")

    let previousCounterValue = counterEle.textContent
    let updatedCounterValue = parseInt(previousCounterValue) - 1

    if (updatedCounterValue < 0){
        counterEle.style.color="red"
    }

    counterEle.textContent = updatedCounterValue
}

function onReset(){
    let counterEle = document.getElementById("counterValue")
    let counterValue = 0;
    counterEle.textContent = counterValue
    counterEle.style.color = "black"
}