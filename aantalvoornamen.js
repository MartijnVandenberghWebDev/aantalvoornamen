"use strict";

const ul = document.getElementById("namen");
const voornaam = document.getElementById("inputVoornaam");
const toevoegKnop = document.getElementById("toevoegKnop");

voornaam.oninput = function () {
    toevoegKnop.disabled = this.value === "";
};

toevoegKnop.onclick = function () {
    let dubbel = false;
    for (const childElement of document.querySelectorAll("#namen li")) {
        if ((childElement.dataset.naam).toLowerCase() === (voornaam.value).toLowerCase()) {
            dubbel = true;
            let teller = parseInt(childElement.dataset.teller);
            teller++;
            childElement.dataset.teller = teller;
            childElement.innerText = (`${childElement.dataset.naam}` + `: ${childElement.dataset.teller}`);
        }
    }

    if (dubbel === false) {
        const li = document.createElement("li");
        li.setAttribute("data-naam", (voornaam.value).toLowerCase());
        li.setAttribute("data-teller", "1");
        li.innerText = `${li.dataset.naam}` +`: ${li.dataset.teller}`;
        ul.appendChild(li);
    }

    voornaam.value = "";
    toevoegKnop.disabled = true;
    voornaam.focus();
}