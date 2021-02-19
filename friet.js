"use strict";
maakDeuren();
const aantalDeuren = document.querySelectorAll("#deuren a");
const metFriet = aantalDeuren[Math.floor(Math.random() * aantalDeuren.length)];
let beurten = 0;
for (const afbeelding of aantalDeuren) {
    afbeelding.onclick = function () {
        beurten++;
        if (this === metFriet) {
            afbeelding.firstChild.src = "gevonden.png";
            document.getElementById("feedback").hidden = false;
            if (beurten === 1) {
                document.getElementById("beurten").innerText = `${beurten} beurt!!!`;
            } else {
                document.getElementById("beurten").innerText = `${beurten} beurten!!!`;
            }            
        } else {
            afbeelding.firstChild.src = "deuropen.png";
        }
    }
}

function maakDeuren() {
    const body = document.getElementById("deuren")
    for (let teller = 1; teller <= 10; teller++) { //GEBRUIK ; IN FOR!!! GEEN ,!!!
        const maakImg = document.createElement("img");
        maakImg.src = "deurtoe.png";
        maakImg.alt = "deur";
        const maakHyperlink = document.createElement("a");
        maakHyperlink.href = "#";
        maakHyperlink.appendChild(maakImg);
        body.appendChild(maakHyperlink);
    }
}