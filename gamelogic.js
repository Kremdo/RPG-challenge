import Person from "/character.js";
var chosenRace;
var chosenItem;
document.getElementById("createbtn").addEventListener("click", create);

function create() {
    raceFunction();
    itemFunction();
    var createdChar = new Person(chosenRace, chosenItem);
    document.getElementById("pRace1").innerHTML += chosenRace;
    document.getElementById("pItem1").innerHTML += chosenItem;

}



function raceFunction() {
    chosenRace = document.getElementById("race1").value;


}

function itemFunction() {
    chosenItem = document.getElementById("item1").value;
}
