document.querySelector("#add").addEventListener("click", add);
document.querySelector("#sub").addEventListener("click", sub);
document.querySelector("#div").addEventListener("click", div);
document.querySelector("#mul").addEventListener("click", mul);

function add() {
    firstNum = document.querySelector("#box-1").value;
    secodNum = document.querySelector("#box-2").value;
    result = parseInt(firstNum) + parseInt(secodNum);
    document.querySelector("#box-3").value = result;
}

function sub() {
    firstNum = document.querySelector("#box-1").value;
    secodNum = document.querySelector("#box-2").value;
    result = parseInt(firstNum) - parseInt(secodNum);
    document.querySelector("#box-3").value = result;
}

function div() {
    firstNum = document.querySelector("#box-1").value;
    secodNum = document.querySelector("#box-2").value;
    result = parseInt(firstNum) / parseInt(secodNum);
    document.querySelector("#box-3").value = result;
}

function mul() {
    firstNum = document.querySelector("#box-1").value;
    secodNum = document.querySelector("#box-2").value;
    result = parseInt(firstNum) * parseInt(secodNum);
    document.querySelector("#box-3").value = result;
}