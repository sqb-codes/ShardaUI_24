var firstNum;
var secodNum;

function calc() {
    document.querySelector("#add").addEventListener("click", evaluate);
    document.querySelector("#sub").addEventListener("click", evaluate);
    document.querySelector("#div").addEventListener("click", evaluate);
    document.querySelector("#mul").addEventListener("click", evaluate);

    firstNum = document.querySelector("#box-1");
    secodNum = document.querySelector("#box-2");
}


function evaluate() {
    // console.log(this);
    var opr = this.innerHTML;
    // console.log(opr);
    if(opr == "+") {
        result = parseInt(firstNum.value) + parseInt(secodNum.value);    
    } else if(opr == "-") {
        result = parseInt(firstNum.value) - parseInt(secodNum.value);
    } else if(opr == "/") {
        result = parseInt(firstNum.value) / parseInt(secodNum.value);
    } else {
        result = parseInt(firstNum.value) * parseInt(secodNum.value);
    }
    document.querySelector("#box-3").value = result;
}

calc();