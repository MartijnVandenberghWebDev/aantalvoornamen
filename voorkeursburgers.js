"use strict";
const linksSelect = document.getElementById("links");
const rechtsSelect = document.getElementById("rechts");
const eenNaarRechtsButton = document.getElementById("eenNaarRechts");
const allesNaarRechtsButton = document.getElementById("allesNaarRechts");
const eenNaarLinksButton = document.getElementById("eenNaarLinks");
const allesNaarLinksButton = document.getElementById("allesNaarLinks");

linksSelect.onchange = function () {
    eenNaarRechtsButton.disabled = false;
};

rechtsSelect.onchange = function () {
    eenNaarLinksButton.disabled = false;
};

eenNaarRechtsButton.onclick = function () {
    verplaatsEenBurgerVanNaar(linksSelect, rechtsSelect);
    if (linksSelect.length === 0) {
        this.disabled = true;
        allesNaarRechtsButton.disabled = true;
    }
    eenNaarRechtsButton.disabled = true;
    allesNaarLinksButton.disabled = false;
};

eenNaarLinksButton.onclick = function () {
    verplaatsEenBurgerVanNaar(rechtsSelect, linksSelect);
    if (rechtsSelect.length === 0) {
        this.disabled = true;
        allesNaarLinksButton.disabled = true;
    }
    eenNaarLinksButton.disabled = true;
    allesNaarRechtsButton.disabled = false;
};

allesNaarRechtsButton.onclick = function () {
    verplaatsAlleBurgersVanNaar(linksSelect, rechtsSelect);
    this.disabled = true;
    allesNaarLinksButton.disabled = false;
};

allesNaarLinksButton.onclick = function () {
    verplaatsAlleBurgersVanNaar(rechtsSelect, linksSelect);
    this.disabled = true;
    allesNaarRechtsButton.disabled = false;
};

function verplaatsEenBurgerVanNaar(vanSelect, naarSelect) {
    const naam = vanSelect.value;
    const option = document.createElement("option");
    option.innerText = naam;
    naarSelect.appendChild(option);
    vanSelect.remove(vanSelect.selectedIndex);
}

function verplaatsAlleBurgersVanNaar(vanSelect, naarSelect) {
    for (const vanOption of vanSelect.options) {
        const naarOption = document.createElement("option");
        naarOption.innerText = vanOption.innerText;
        naarSelect.appendChild(naarOption);
    }
    vanSelect.options.length = 0;
}