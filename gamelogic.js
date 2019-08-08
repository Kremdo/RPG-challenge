import Person from "/character.js";
var chosenRace1;
var chosenItem1;
var chosenRace2;
var chosenItem2;
var createdChar1;
var createdChar2;
var p1Name;
var p2Name;







//added click event to the create button
document.getElementById("createbtn").addEventListener("click", create);



function create() {
    //running functions to get required values
    raceFunctionOne();
    itemFunctionOne();
    raceFunctionTwo();
    itemFunctionTwo();
    //creating the characters and displaying those values
    createdChar1 = new Person(chosenRace1, chosenItem1);
    createdChar2 = new Person(chosenRace2, chosenItem2);
    document.getElementById("pRace1").innerHTML += chosenRace1;
    document.getElementById("pItem1").innerHTML += chosenItem1;
    document.getElementById("pRace2").innerHTML += chosenRace2;
    document.getElementById("pItem2").innerHTML += chosenItem2;

    //storing name players input and displaying them
    p1Name = document.getElementById("player1Name").value;
    document.getElementById("pName1").innerHTML += p1Name;

    p2Name = document.getElementById("player2Name").value;
    document.getElementById("pName2").innerHTML += p2Name;

    //adding click event to action buttons of players
    document.getElementById("phit1").addEventListener("click", createdChar1.damage);
    document.getElementById("pheal1").addEventListener("click", createdChar1.heal);

    document.getElementById("phit2").addEventListener("click", createdChar2.damage);
    document.getElementById("pheal2").addEventListener("click", createdChar2.heal);

    //adding race picture
    switch (chosenRace1) {
        case "humans":
            document.getElementById("pic1").src = "images/human.png";
            break;
        case "elves":
            document.getElementById("pic1").src = "images/elf.jpeg";
            break;
        case "vampires":
            document.getElementById("pic1").src = "images/vampire.jpeg";
            break;
            break;
    }

    switch (chosenRace2) {
        case "humans":
            document.getElementById("pic2").src = "images/human.png";
            break;
        case "elves":
            document.getElementById("pic2").src = "images/elf.jpeg";
            break;
        case "vampires":
            document.getElementById("pic2").src = "images/vampire.jpeg";
            break;
            break;
    }

    //setting health to 140 if orc is chosen as race
    if (chosenRace1 == "orcs") {
        createdChar1.maxHealth = 100 + ((100 * 40) / 100);
        createdChar1.currentHealth = 100 + ((100 * 40) / 100);
        document.getElementById("pic1").src = "images/orc.jpeg";
    } else {
        createdChar1.currentHealth = 100;
    }

    if (chosenRace2 == "orcs") {
        createdChar2.maxHealth = 100 + ((100 * 40) / 100);
        createdChar2.currentHealth = 100 + ((100 * 40) / 100);
        document.getElementById("pic2").src = "images/orc.jpeg";
    } else {
        createdChar2.currentHealth = 100;
    }
    document.getElementById("footer").style.display = "none";
    document.getElementById("header").style.display = "flex";
    document.getElementById("bar1").innerHTML = createdChar1.currentHealth;
    document.getElementById("bar2").innerHTML = createdChar2.currentHealth;
    document.getElementById("bar1").style.width = createdChar1.currentHealth + "%";
    document.getElementById("bar2").style.width = createdChar2.currentHealth + "%";

}

// storing chosen races in variables
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
