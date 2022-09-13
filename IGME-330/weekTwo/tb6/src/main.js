import {randomElement} from "./utils.js";
let words1;
let words2;
let words3;

loadJsonXHR();


function loadJsonXHR(){
    const url = "src/babble-data.json";
    const xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        console.log(`In onload - HTTP Status Code = ${e.target.status}`);
        let json;
        try{
            json = JSON.parse(e.target.responseText);
        }
        catch{
            document.querySelector("#output").innerHTML = "BAD JSON";
            return; 
        }

        words1 = json['words1'].wordlist;
        words2 = json['words2'].wordlist;
        words3 = json['words3'].wordlist;
        generateTechno(1);
        document.querySelector("#my-button").onclick = ()=> generateTechno(1);
        document.querySelector("#five-button").onclick = ()=> generateTechno(5);
    };
    xhr.onerror = e => console.log(`IN onerror - HTTP Status Code = ${e.target.status}`);
    xhr.open("GET",url);
    xhr.send();
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