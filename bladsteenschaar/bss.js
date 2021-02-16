"use strict";
const blad = document.getElementById("blad");
const steen = document.getElementById("steen");
const schaar = document.getElementById("schaar");
const bladSteenSchaar = [blad, steen, schaar];



for (const afbeelding of document.querySelectorAll("#initialiseer a")) {
    afbeelding.onclick = function () {
        //Tonen keuze gebruiker:
        const keuzeImg = document.getElementById("keuzeImg");
        keuzeImg.src = `${this.dataset.naam}.png`;
        
        //Keuze van de computer:
        const computerImg = document.getElementById("computerImg");
        const keuzeComputer = Math.floor(Math.random() * 3);
        console.log("keuze computer:",keuzeComputer);
        computerImg.src = `${(bladSteenSchaar[keuzeComputer]).dataset.naam}.png`

        //Berekening winnaar:
        
    };
}