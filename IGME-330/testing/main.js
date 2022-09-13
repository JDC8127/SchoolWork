"use strict";

function loadXmlXHR(){
    const url = "src/babble-data.xml";
    const xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        console.log(`In onload - HTTP Status Code = ${e.target.status}`);
        const xml = e.target.responseXML;

        //[words1,words2,words3] = text.split("\n");
        words1 = xml.querySelector("babble[cid='w1']").textContent;
        words2 = xml.querySelector("babble[cid='w2']").textContent;
        words3 = xml.querySelector("babble[cid='w3']").textContent;
        words1 = words1.split(",")
        words2 = words2.split(",")
        words3 = words3.split(",")
        generateTechno(1)
    };
    xhr.onerror = e => console.log(`IN onerror - HTTP Status Code = ${e.target.status}`);
    xhr.open("GET",url);
    xhr.send();
}