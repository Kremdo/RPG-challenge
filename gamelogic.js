import Person from "/character.js";

document.getElementById("goOne").addEventListener("submit", go, false);

function go(p) {
    //var e = document.getElementById("race1"); e.options[e.selectedIndex].text;
    var chosenRace = document.getElementById("race1").value;
    console.log(chosenRace);
    p.preventDefault();
}
