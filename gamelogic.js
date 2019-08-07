import Person from "/character.js";

document.getElementById("createbtn").addEventListener("click", race);


function race() {
    var chosenRace = document.getElementById("race").value;
    console.log(chosenRace);
}

function item() {
    var chosenItem = document.getElementById("item").value;
    console.log(chosenItem);
}
