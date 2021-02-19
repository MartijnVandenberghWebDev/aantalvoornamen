"use strict";
const lijstBeschikbaar = document.getElementById("beschikbaar");
const mandjeTeller = document.getElementById("aantal");
const lijstMandje = document.getElementById("mandje");

let mandje = JSON.parse(localStorage.getItem("mandje"));

if (mandje === null) {
    mandje = [];
} else {
    for (const burger of mandje) {
        const li = document.createElement("li");
        li.innerText = burger;
        lijstMandje.appendChild(li);
    }
    mandjeTeller.innerText = mandje.length;
}

for (const link of document.querySelectorAll("#beschikbaar a")) {
    link.onclick = function () {
        const burger = this.innerText;
        mandje.push(burger);
        localStorage.setItem("mandje", JSON.stringify(mandje));
        const li = document.createElement("li");
        li.innerText = burger;
        lijstMandje.appendChild(li);
        mandjeTeller.innerText = Number(mandjeTeller.innerText) +1;
    }
}

