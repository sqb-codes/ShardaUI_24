var firstNum;
var secodNum;

function calc() {
    var btnsArray = document.querySelectorAll("button");
    // for(var i = 0; i < btnsArray.length; i++) {
    //     btnsArray[i].addEventListener("click", evaluate);
    // }

    for (var btn of btnsArray) {
        btn.addEventListener("click", evaluate);
    }

    firstNum = document.querySelector("#box-1");
    secodNum = document.querySelector("#box-2");
}


function evaluate() {
    var opr = this.innerHTML;
    var expression = firstNum.value + opr + secodNum.value;
    var result = eval(expression);
    document.querySelector("#box-3").value = result;
}

calc();