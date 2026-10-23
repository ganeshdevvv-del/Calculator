
const input = document.querySelector("input");
let button = document.querySelectorAll("button");

let string = "";
let arr = Array.from(button);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.textContent === "=") {
            if(string === '') return;
            string = eval(string);
            input.value= string;
            input.style.color = blue;
            return;
        }
        else if(e.target.textContent === 'AC'){
            string ="";
            input.value = string;
        }
        else if(e.target.textContent === 'DEL'){
            string = string.substring(0,string.length -1);
            input.value = string;
        }
        else{
            string = string + e.target.textContent;
            input.value = string;
        }
    });
});