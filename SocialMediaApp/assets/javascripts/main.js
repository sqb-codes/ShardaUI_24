function initEvents() {
    // document.querySelector("#username").addEventListener("blur", checkEmpty);
    // document.querySelector("#usermail").addEventListener("blur", checkEmpty);
    // document.querySelector("#userpwd").addEventListener("blur", checkEmpty);
    // document.querySelector("#confpwd").addEventListener("blur", checkEmpty);

    let textBoxes = document.querySelectorAll(".input-group input");
    textBoxesArray = Array.from(textBoxes);

    errorMsgArray = document.querySelectorAll(".error-msg");
    for(var i = 0; i < textBoxes.length; i++)  {
        // textBoxes[i].addEventListener("blur", checkEmpty);
        textBoxes[i].addEventListener("change", checkEmpty);
    }

    document.querySelector("#confpwd").addEventListener("keyup", confirmPassword);

}

function checkEmpty() {
    // console.log(this);
    let boxValue = this.value;
    // if(boxValue === "" || boxValue.length == 0) {

    // }
    
    let index = textBoxesArray.indexOf(this);
    // console.log("Current using :",index);
    let span = errorMsgArray[index];
    // console.log(span);

    // Truthy and Falsy
    if(!boxValue) {
        // console.log("Box is empty...");
        // this.style.border = "1px solid red";
        this.className = "error";
        span.innerHTML = "Please fill this field";
    }
    else {
        // console.log("Box is not empty...");
        // this.style.border = "1px solid green";
        this.className = "success";
        span.innerHTML = "";
    }

}

function confirmPassword() {
    let password = document.querySelector("#userpwd").value;
    let confPassword = this.value;

    let index = textBoxesArray.indexOf(this);
    // console.log("Current using :",index);
    let span = errorMsgArray[index];

    if(password != confPassword) {
        span.innerHTML = "Password do not match";
    }
    else {
        span.innerHTML = "Password match";
    }
}

initEvents();