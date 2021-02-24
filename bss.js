"use strict";
const blad = document.getElementById("blad");
const steen = document.getElementById("steen");
const schaar = document.getElementById("schaar");
const bladSteenSchaar = [blad, steen, schaar];

for (const afbeelding of document.querySelectorAll("#initialiseer a")) {
    afbeelding.onclick = function () {
        //Tonen keuze gebruiker:
        const keuzeGebruiker = `${this.dataset.nummer}`;
        const keuzeImg = document.getElementById("keuzeImg");
        keuzeImg.src = `${this.dataset.naam}.png`;

        //Keuze van de computer:
        const computerImg = document.getElementById("computerImg");
        const keuzeComputer = Math.floor(Math.random() * 3);
        computerImg.src = `${(bladSteenSchaar[keuzeComputer]).dataset.naam}.png`

        //Berekening winnaar:
        const winnaar = document.getElementById("winnaar");
        if (keuzeGebruiker == `${keuzeComputer}`) {
            winnaar.innerText = "Gelijkspel.";
        } else if (keuzeGebruiker == 0 && `${keuzeComputer}` == 1) {
            winnaar.innerText = "Jij wint!";
        } else if (keuzeGebruiker == 1 && `${keuzeComputer}` == 2) {
            winnaar.innerText = "Jij wint!";
        } else if (keuzeGebruiker == 2 && `${keuzeComputer}` == 0) {
            winnaar.innerText = "Jij wint!";
        } else {
            winnaar.innerText = "Computer wint."
        }
    }
}