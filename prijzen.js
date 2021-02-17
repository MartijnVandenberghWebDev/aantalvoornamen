"use strict";
document.getElementById("burgers").onchange = function () {
    document.getElementById("toonPrijs").disabled = false;
};
document.getElementById("toonPrijs").onclick = function () {
    const burgers = document.getElementById("burgers");
    const gekozenBurger = burgers.options[burgers.selectedIndex];
    document.getElementById("prijs").innerText = gekozenBurger.dataset.prijs;
}

