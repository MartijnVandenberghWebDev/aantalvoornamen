"use strict";
const naam = document.getElementById("naam");
const hoogte = document.getElementById("hoogte");
const toevoegKnop = document.getElementById("toevoegen");
toevoegKnop.onclick = function () {
    document.getElementById("naamFout").hidden = true;
    document.getElementById("hoogteFout").hidden = true;
    let allesOk = true;
    if (!naam.checkValidity()) {
        document.getElementById("naamFout").hidden = false;
        allesOk = false;
    }
    if (!hoogte.checkValidity()) {
        document.getElementById("hoogteFout").hidden = false;
        allesOk = false;
    }
    outputGegevens(allesOk);
    sterWinnaars();
    naam.value = "";
    hoogte.value = "";
    naam.focus();
}

function outputGegevens(allesOk) {
    if (allesOk === true) {
        const tbody = document.querySelector("tbody");
        const tr = tbody.insertRow();
        const celWinnaar = tr.insertCell();
        celWinnaar.innerText = "";
        const celNaam = tr.insertCell();
        celNaam.innerText = naam.value;
        const celHoogte = tr.insertCell();
        celHoogte.innerText = `${hoogte.value} cm`;
        const celDelete = tr.insertCell();
        const deleteHlink = document.createElement("a");
        deleteHlink.href = "#";
        deleteHlink.innerText = "X";
        celDelete.appendChild(deleteHlink);
        deleteHlink.onclick = verwijderRij;
    }
}

function verwijderRij() {
    this.parentElement.parentElement.remove();
}

function sterWinnaars () {
    let winnaar = sessionStorage.getItem("winnaar");
    if (winnaar === null) {
        winnaar = hoogte.value;
        sessionStorage.setItem("winnaar", `${hoogte.value}`);
    }
    if (hoogte.value > parseInt(winnaar)) {
        winnaar = hoogte.value;
        sessionStorage.setItem("winnaar", `${hoogte.value}`);
    }
    console.log("na ifs null/hoger: ", parseInt(winnaar));
    const tbody = document.querySelector("tbody");
    for (const rij of tbody.rows) {
        if (parseInt(rij.cells[2].innerText) === parseInt(winnaar)) {
            sessionStorage.setItem("winnaar", `${parseInt(rij.cells[2].innerText)}`);
            rij.cells[0].innerText = "☆";
        } else {
            rij.cells[0].innerText = "";
        }
    }
}