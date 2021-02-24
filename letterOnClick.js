"use strict";
details();

async function details() {
    const userId = sessionStorage.getItem("id");
    const responsePlaats = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const responseRecords = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    if (responsePlaats.ok && responseRecords.ok) {
        document.getElementById("artiestFout").hidden = true;
        const userPlaats = await responsePlaats.json();
        const userRecords = await responseRecords.json();
        detailverwerking(userRecords, userPlaats);
    } else {
        document.getElementById("artiestFout").hidden = false;
    }
}

function detailverwerking(userRecords, userPlaats) {
    document.getElementById("name").innerText = userPlaats.name;
    document.getElementById("city").innerText = userPlaats.address.city;
    for (const record of userRecords) {
        if (record.completed === true) {
            const completedList = document.querySelector("#completed ul");
            const li = document.createElement("li");
            li.innerText = record.title;
            completedList.appendChild(li);
        } else {
            const uncompletedList = document.querySelector("#uncompleted ul");
            const li = document.createElement("li");
            li.innerText = record.title;
            uncompletedList.appendChild(li);
        }
    }
}