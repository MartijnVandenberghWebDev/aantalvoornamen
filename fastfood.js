"use strict";
const aantalHamburgers = document.getElementById("hamburgers").length;
document.getElementById("aantalHamburgers").innerText = aantalHamburgers;

const aantalFrieten = document.getElementsByName("friet").length;
document.getElementById("aantalFrieten").innerText = aantalFrieten;

const aantalDesserts = document.getElementsByName("dessert").length;
document.getElementById("aantalDesserts").innerText = aantalDesserts;

//keuze burger
document.getElementById("hamburgers").onchange = function () {
    const gekozenNummer = this.value;
    const gekozenNaam = this.options[this.selectedIndex].innerText;
    document.getElementById("keuzeBurger").innerText = `${gekozenNummer}:${gekozenNaam}`;

}

//keuze friet
for (const inputFriet of document.getElementsByName("friet")) {
    inputFriet.onchange = function () {
        const gekozenNummer = this.value;
        const gekozenNaam = this.parentElement.innerText;
        document.getElementById("keuzeFriet").innerText = `${gekozenNummer}: ${gekozenNaam}`;
    };
}

//keuze desserts
for (const inputDessert of document.getElementsByName("dessert")) { //voor elk element met naam dessert
    inputDessert.onchange = function () { //als dit element veranderd
        let keuzes = ""; //clear de keuze
        for (const singleInputDessert of document.getElementsByName("dessert")) { //voor elk element met naam dessert
            if (singleInputDessert.checked) { //als element aangevinkt is
                keuzes += `${singleInputDessert.value}:${singleInputDessert.parentElement.innerText}, `; //doe keuze (leeg) + label van de aangevinkte optie
            }
        }
        document.getElementById("keuzeDessert").innerText = keuzes.slice(0, -1); //toon de keuze in innertext, slice van teken 0 tot het voorlaatste teken, de laatste komma wordt dus weggelaten.
    };
}