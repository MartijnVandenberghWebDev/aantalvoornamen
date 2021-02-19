"use strict";
const zoeken = document.getElementById("zoeken");
zoeken.onclick = function () {
    clearUser();
    const zoekNummer = document.getElementById("zoekNummer");
    if (zoekNummer.checkValidity()) {
        document.getElementById("nummerFout").hidden = true;
        leesuser(zoekNummer.value);
    } else {
        document.getElementById("nummerFout").hidden = false;
    }
    
}

console.log("leesuser opgeroepen");
async function leesuser(volgnummer) {
    const response = await fetch(`https://reqres.in/api/users/${volgnummer}`);
    const user = await response.json();
    if (response.ok) {
        document.getElementById("nummer").innerText = user.data.id;
        document.getElementById("voornaam").innerText = user.data.first_name;
        document.getElementById("familienaam").innerText = user.data.last_name;
        document.getElementById("emailAdres").innerText = user.data.email;
        document.getElementById("avatar").src = user.data.avatar;
        document.getElementById("nietGevonden").hidden = true;
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }

}

function clearUser () {
    document.getElementById("nummer").innerText = "";
    document.getElementById("voornaam").innerText = "";
    document.getElementById("familienaam").innerText = "";
    document.getElementById("emailAdres").innerText = "";
    document.getElementById("avatar").src = "";
}

/*
 "data": [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
]
*/