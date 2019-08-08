import Person from "/character.js";
var chosenRace1;
var chosenItem1;
var chosenRace2;
var chosenItem2;
var createdChar1;
var createdChar2;

//added click event to the create button
document.getElementById("createbtn").addEventListener("click", create);



function create() {
    raceFunctionOne();
    itemFunctionOne();
    raceFunctionTwo();
    itemFunctionTwo();
    createdChar1 = new Person(chosenRace1, chosenItem1);
    createdChar2 = new Person(chosenRace2, chosenItem2);
    document.getElementById("pRace1").innerHTML += chosenRace1;
    document.getElementById("pItem1").innerHTML += chosenItem1;
    document.getElementById("pRace2").innerHTML += chosenRace2;
    document.getElementById("pItem2").innerHTML += chosenItem2;

    //adding click event to action buttons of player 1
    document.getElementById("phit1").addEventListener("click", function () {});
    document.getElementById("pheal1").addEventListener("click", createdChar1.heal);
    document.getElementById("pyield1").addEventListener("click", );

    //adding click event to action buttons of player 2
    document.getElementById("phit2").addEventListener("click", console.log("Player 2 hits"));
    document.getElementById("pheal2").addEventListener("click", createdChar2.heal);
    document.getElementById("pyield2").addEventListener("click", console.log("Player 2 hits"));

    if (chosenRace1 == "orcs") {
        createdChar1.maxHealth = 100 + ((100 * 40) / 100);
        createdChar1.currentHealth = 100 + ((100 * 40) / 100);
    }

    if (chosenRace2 == "orcs") {
        createdChar2.maxHealth = 100 + ((100 * 40) / 100);
        createdChar2.currentHealth = 100 + ((100 * 40) / 100);
    }
    document.getElementById("footer").style.display = "none";
    document.getElementById("header").style.display = "flex";


}

function test() {
    console.log("player 1 hits");
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

function yield() {

}
