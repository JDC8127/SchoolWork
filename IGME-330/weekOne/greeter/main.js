'use strict';

document.querySelector("#btn-hello").onclick = ()=>greet("HELLO");
document.querySelector("#btn-goodbye").onclick = function(){greet("GOODBYE");};

function greet(msg){
    const firstInput = document.querySelector("#input-firstname");
    const lastInput = document.querySelector("#input-lastname")
    const firstName = firstInput.value || "Mr.";
    const lastName = lastInput.value || "X";
    
    const output = document.querySelector("#output")
    output.innerHTML = `${msg} ${firstName} ${lastName} !`;
}
