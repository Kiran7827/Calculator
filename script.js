const resultElement = document.querySelector("#result");
const btns = document.querySelectorAll("button");
let string = "";

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            resultElement.innerText = string;
        } 
        else if (e.target.innerHTML == "C") {
            string = ""
            resultElement.innerText = string;
        }
        else if(e.target.innerHTML == "←") {
            string = string.substring(0 ,string.length-1);
            resultElement.innerText = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            resultElement.innerText = string;
        }
    })
})





