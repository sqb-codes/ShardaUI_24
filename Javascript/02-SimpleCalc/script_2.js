var firstNum;
var secodNum;

function calc() {
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#div").addEventListener("click", div);
    document.querySelector("#mul").addEventListener("click", mul);

    firstNum = document.querySelector("#box-1");
    secodNum = document.querySelector("#box-2");
}


function add() {
    // var keyword - used to make variable scope local
    // var firstNum = document.querySelector("#box-1").value;
    // var secodNum = document.querySelector("#box-2").value;
    result = parseInt(firstNum.value) + parseInt(secodNum.value);
    document.querySelector("#box-3").value = result;
}

function sub() {
    result = parseInt(firstNum.value) - parseInt(secodNum.value);
    document.querySelector("#box-3").value = result;
}

function div() {
    result = parseInt(firstNum.value) / parseInt(secodNum.value);
    document.querySelector("#box-3").value = result;
}

function mul() {
    result = parseInt(firstNum.value) * parseInt(secodNum.value);
    document.querySelector("#box-3").value = result;
}

calc();