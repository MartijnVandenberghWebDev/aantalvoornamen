"use strict";

const links = document.getElementById("links");
const rechts = document.getElementById("rechts");
const createOption = document.createElement("option");

links.onchange = function () {
    //Enable/disable van verplaats-alles-knoppen
    if (this.length === 0) {
        document.getElementById("allesNaarRechts").disabled = true;
    } else {
        document.getElementById("allesNaarRechts").disabled = false;
    }
    //enablen één knop, button onclick functie
    if (this.options[this.selectedIndex].selected) {
        console.log("this.selectedIndex in If functie:", `${this.options[this.selectedIndex].innerText}`);
        document.getElementById("eenNaarRechts").disabled = false;
        document.getElementById("eenNaarRechts").onclick = function () {
            createOption.innerText = links.options[links.selectedIndex].innerText;
            rechts.appendChild(createOption);
            links.remove(links.selectedIndex);
            document.getElementById("eenNaarRechts").disabled = true;
        }
    }
    console.log("this.selectedIndex Na functie:", `${this.options[this.selectedIndex].innerText}`);
};

rechts.onchange = function () {
    if (rechts.length === 0) {
        document.getElementById("allesNaarLinks").disabled = true;
    } else {
        document.getElementById("allesNaarLinks").disabled = false;
    }
        //enablen één knop, button onclick functie
        if (this.options[this.selectedIndex].selected) {
            document.getElementById("eenNaarLinks").disabled = false;
            document.getElementById("eenNaarLinks").onclick = function () {
                createOption.innerText = rechts.options[rechts.selectedIndex].innerText;
                links.appendChild(createOption);
                rechts.remove(rechts.selectedIndex);
                document.getElementById("eenNaarLinks").disabled = true;
            }
        }
};
