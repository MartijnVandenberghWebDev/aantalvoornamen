"use strict";
leesJSON();

async function leesJSON() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
        const users = await response.json();
        verwerkUsers(users);
    } else {
        document.getElementById("dataFout").hidden = false;
    }
}
async function verwerkUsers(users) {
    const zoekTerm = document.getElementById("inputZoekterm");
    const zoekKnop = document.getElementById("zoekKnop");
    zoekKnop.onclick = function () {
        deleteGegevens();
        if (zoekTerm.value !== "") {
            document.getElementById("inputFout").hidden = true;
            for (const user of users) {
                console.log(user.name);
                if (user.name.toLowerCase().includes(zoekTerm.value.toLowerCase())) {
                    const zoekResultaten = document.getElementById("zoekResultaten");
                    const li = document.createElement("li");
                    const hyperlink = document.createElement("a");
                    hyperlink.href = "lettersOnClick.html";
                    hyperlink.dataset.id = user.id;
                    hyperlink.innerText = user.name;
                    zoekResultaten.appendChild(li);
                    li.appendChild(hyperlink);
                    hyperlink.onclick = storeId;
                }
            }
            zoekTerm.value = "";
            zoekTerm.focus();
        } else {
            document.getElementById("inputFout").hidden = false;
        }
    }
}

function deleteGegevens() {
    const zoekResultaten = document.getElementById("zoekResultaten");
    while (zoekResultaten.lastChild !== null) {
        zoekResultaten.lastChild.remove();
    }
}

function storeId () {
    sessionStorage.setItem("id", this.dataset.id);
}