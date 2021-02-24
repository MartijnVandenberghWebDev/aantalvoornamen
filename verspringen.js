"use strict";
leesJSON();

async function leesJSON() {
    const response = await fetch("verspringen.json");
    if (!response.ok) {
        document.getElementById("resultaatFout").hidden = false;
    } else {
        document.getElementById("resultaatFout").hidden = true;
        const springResultaten = await response.json();
        toonResultaten(springResultaten);
    }
}

function toonResultaten(springResultaten) {
    const tbody = document.querySelector("tbody");
    let aantalSpringers = 0;
    let somSprongen = 0;
    for (const springer of springResultaten) {
        aantalSpringers++;
        //console.log(springer.sprong);
        somSprongen += springer.sprong;
    }
    const gemiddelde = somSprongen / aantalSpringers;
    document.getElementById("berekendGemiddelde").innerText = gemiddelde.toFixed(2);
    for (const springer of springResultaten) {
        if (springer.sprong >= gemiddelde) {
            const tr = tbody.insertRow();
            const celNaam = tr.insertCell();
            const celSprong = tr.insertCell();
            celNaam.innerText = springer.naam;
            celNaam.id = "bovenGemiddelde";
            celSprong.innerText = springer.sprong;
            celSprong.id = "bovenGemiddelde";
        } else {
            const trOnder = tbody.insertRow(0);
            const celNaamOnder = trOnder.insertCell();
            const celSprongOnder = trOnder.insertCell();
            celNaamOnder.innerText = springer.naam;
            celNaamOnder.id = "onderGemiddelde";
            celSprongOnder.innerText = springer.sprong;
            celSprongOnder.id = "onderGemiddelde";
        }
    }
}