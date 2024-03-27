// Event binding - Bind function with event
// It means when event will be triggered then function will be called
document.getElementById("btn").addEventListener("click", greet);

function greet() {
    console.log("Greet Executed...");
    // alert("Button Clicked...");
    username = document.getElementById("box");
    // console.log(username);
    // console.log(username.value);
    document.getElementById("output").innerHTML = username.value;
}