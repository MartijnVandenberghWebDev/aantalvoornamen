"use strict";
document.getElementById("deelKnop").onclick = function () {
    const fouten = document.querySelectorAll("input:invalid");
    for (const fout of fouten) {
        document.getElementById(`${fout.id}Fout`).hidden = false;
    }
    const juisten = document.querySelectorAll("input:valid");
    for (const juist of juisten) {
        document.getElementById(`${juist.id}Fout`).hidden = true;
    }
    if (fouten.length === 0) {
        const eersteGetal = document.getElementById("eerste").value;
        const tweedeGetal = document.getElementById("tweede").value;
        const quotiënt = document.getElementById("quotiënt");
        quotiënt.innerText = (eersteGetal/tweedeGetal);
        quotiënt.hidden = false
    } else {
        quotiënt.hidden = true;
    }

}