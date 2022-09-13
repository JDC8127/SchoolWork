"use strict";
	
let words1 = [];
let words2 = [];
let words3 = [];

init();

function init(){
    generateTechno(1);
    document.querySelector("#my-button").onclick = ()=> generateTechno(1);
    document.querySelector("#five-button").onclick = ()=> generateTechno(5);
    loadTextXHR()
    
}

function loadTextXHR(){
    const url = "src/babble-data.csv";
    const xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        console.log(`In onload - HTTP Status Code = ${e.target.status}`);
        const text = e.target.responseText;
        console.log(`Success - the file length is ${text.length}`);

        [words1,words2,words3] = text.split("\n");
        words1 = words1.split(",")
        words2 = words2.split(",")
        words3 = words3.split(",")
        generateTechno(1)
    };
    xhr.onerror = e => console.log(`IN onerror - HTTP Status Code = ${e.target.status}`);
    xhr.open("GET",url);
    xhr.send();
}

function randomElement(array){
        return array[Math.floor(Math.random()*array.length)];
    }

function generateTechno(num){
    let x=0;
    let str = "";
    while (x<num){
        str = str + `${randomElement(words1)} ${randomElement(words2)} ${randomElement(words3)} <br>`;
        x = x+1
    } 
    document.querySelector("#output").innerHTML = str;
    
}