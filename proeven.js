"use strict";
document.getElementById("burgers").onchange = function () {
    const burgers = document.getElementById("burgers");
    const gekozenBurger = burgers.options[burgers.selectedIndex];
    gekozenBurger.remove();
}

/* VOORBEELDOPLOSSING:
"use strict";
document.getElementById("burgers").onchange = function () {
 this.remove(this.selectedIndex);
};
*/