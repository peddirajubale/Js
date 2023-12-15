function bankDetails(totalAmt, userAmt, op){
    if (op === "+"){
        alert("Creat Amount"+totalAmt+userAmt)
    }else{
        alert("Deposit Amount"+totalAmt-userAmt)
    }
}

bankDetails(5000, 2000, "+")