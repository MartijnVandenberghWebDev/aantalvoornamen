"use strict"
let groenten;
leesGroenten();
async function leesGroenten() {
    const response = await fetch("groenten.json");
    if (response.ok) {
        groenten = await response.json();
        maakOptionLijst(groenten); /* maakt de optionlijst aan */
        document.getElementById("toevoegen").onclick = function () {
            verbergFoutmelding();
            const testGroente = document.getElementById("groente");
            console.log(testGroente.options[testGroente.selectedIndex]);
        }
        /*document.getElementById("toevoegen").onclick = function () {
            verbergFoutmelding();

            /* const foutmelding = document.getElementById("foutmelding");
            if (document.getElementById("groente").value === "" || !document.getElementById("aantal").checkValidity()) {
                foutmelding.hidden = false;
                foutmelding.innerText = "Keuze groente of aantal is niet aangegeven."
            }
        }*/
    } else {
        document.getElementById("foutmelding").hidden = false;
        document.getElementById("foutmelding").innerText = "JSON niet gevonden."
    };
};

/*FUNCTIES **/

//VUL DE LIJST MET OPTIONLIJST GROENTEN AAN/

function maakOptionLijst(data) {
    let index = 0;
    data.forEach(groente => {
        const nieuwElement = document.createElement("option");
        const naam = groente.naam;
        const prijs = groente.prijs;
        const eenheid = groente.eenheid;
        nieuwElement.setAttribute("data-naam", `${naam}`);
        nieuwElement.setAttribute("data-prijs", `${prijs}`);
        nieuwElement.text = `${naam} (${prijs}/${eenheid})`;
        document.getElementById("groente").add(nieuwElement);
    })
};



function verbergFoutmelding() {
    const foutmelding = document.getElementById("foutmelding")
    foutmelding.hidden = true;
};




function voegtoe (variabele1, 2, 3) {
    if(.length === 0) {
        //code voeg tabel rij toe
    } else {
        for (const rij of document.getElementById...) {
            if (cell[0].innerText === gekozengroente){
                //update aantal en subtotaal
            } else {
                //code voeg tabel rij toe
            }
        }
    }
}