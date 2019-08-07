import Person from "/character.js";
var chosenRace1;
var chosenItem1;
var chosenRace2;
var chosenItem2;
document.getElementById("createbtn").addEventListener("click", create);

function create() {
    raceFunctionOne();
    itemFunctionOne();
    raceFunctionTwo();
    itemFunctionTwo();
    var createdChar1 = new Person(chosenRace1, chosenItem1);
    var createdChar2 = new Person(chosenRace2, chosenItem2);
    document.getElementById("pRace1").innerHTML += chosenRace1;
    document.getElementById("pItem1").innerHTML += chosenItem1;
    document.getElementById("pRace2").innerHTML += chosenRace2;
    document.getElementById("pItem2").innerHTML += chosenItem2;


}

function raceFunctionOne() {
    chosenRace1 = document.getElementById("race1").value;
}

function itemFunctionOne() {
    chosenItem1 = document.getElementById("item1").value;
}

function raceFunctionTwo() {
    chosenRace2 = document.getElementById("race2").value;
}

function itemFunctionTwo() {
    chosenItem2 = document.getElementById("item2").value;
}
