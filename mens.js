"use strict";
document.getElementById("toevoegen").onclick = function () {
    const verkeerdeElementen = document.querySelectorAll("input:invalid, select:invalid");
    for (const foutElement of verkeerdeElementen) {
        document.getElementById(`${foutElement.id}Fout`).hidden = false;
    }
    const juisteElementen = document.querySelectorAll("input:valid, select:valid");
    for (const juistElement of juisteElementen) {
        document.getElementById(`${juistElement.id}Fout`).hidden = true;
    }
    document.getElementById("toegevoegd").hidden = verkeerdeElementen.length !== 0;
}