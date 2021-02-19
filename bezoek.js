"use strict";
const vorigBezoek = localStorage.getItem("vorigBezoek");
if (vorigBezoek !== null) {
    document.getElementById("vorigBezoek").innerText = vorigBezoek;
} else {
    document.getElementById("vorigBezoek").innerText = new Date().toLocaleString("nl-BE");
}
let aantalBezoeken = localStorage.getItem("aantalBezoeken");
aantalBezoeken = aantalBezoeken === null ? 1 : Number(aantalBezoeken) + 1;
document.getElementById("aantalBezoeken").innerText = aantalBezoeken;
localStorage.setItem("vorigBezoek", new Date().toLocaleString("nl-BE"));
localStorage.setItem("aantalBezoeken", aantalBezoeken);
