const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output ="";
let historyDisplay = document.querySelector(".history")

// ===== function to calculate based on the butto clicked====== 

const calculate = (btnvalue) =>{
    display.focus();
    if (btnvalue === "=" && output !== ""){
        historyDisplay.innerHTML = output;
        output = eval(output.replace("&", "/100"));

    } else if (btnvalue === "AC") {
        output = "";
        historyDisplay.innerHTML = ""
    } else if (btnvalue === "DEL") {
        output = output.toString().slice(0, -1);
    }else {

if (output === "" && specialChars.includes(btnvalue)) return;
    
    output += btnvalue;
    
}
display.value = output;
    };

    for ( let button of buttons){
        button.addEventListener("click", (e) => calculate(e.target.dataset.value));
    }
    
