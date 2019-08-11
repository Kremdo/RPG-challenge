import Person from "/character.js";
var chosenRace1;
var chosenItem1;
var chosenRace2;
var chosenItem2;
var createdChar1;
var createdChar2;
var p1Name;
var p2Name;
var healthPercentage1;
var healthPercentage2;


//added click event to the create button
document.getElementById("createbtn").addEventListener("click", create);



function create() {
    var phit1 = document.getElementById("phit1");
    var pheal1 = document.getElementById("pheal1");
    var pyield1 = document.getElementById("pyield1");
    var phit2 = document.getElementById("phit2");
    var pheal2 = document.getElementById("pheal2");
    var pyield2 = document.getElementById("pyield2");
    
    //adds filter to the bg
    //document.getElementById("container").style.filter = "brightness(40%)";

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
    phit1.addEventListener("click", createdChar1.damage);
    pheal1.addEventListener("click", createdChar1.heal);
    pyield1.addEventListener("click", pyield);

    document.getElementById("coinTossbtn").addEventListener("click", coinToss);

    phit2.addEventListener("click", createdChar2.damage);
    pheal2.addEventListener("click", createdChar2.heal);
    pyield2.addEventListener("click", pyield);

    phit1.disabled = true;
    phit1.classList.add("disabledHit");
    pheal1.disabled = true;
    pheal1.classList.add("disabledHeal");
    pyield1.disabled = true;
    pyield1.classList.add("disabledYield");

    phit2.disabled = true;
    phit2.classList.add("disabledHit");
    pheal2.disabled = true;
    pheal2.classList.add("disabledHeal");
    pyield2.disabled = true;
    pyield2.classList.add("disabledYield");


    //adding race picture
    switch (chosenRace1) {
        case "humans":
            document.getElementById("pic1").src = "images/human.png";
            document.getElementById("pic1").style.transform = "scaleX(-1)";
            break;
        case "elves":
            document.getElementById("pic1").src = "images/elf.jpeg";
            break;
        case "vampires":
            document.getElementById("pic1").src = "images/vampire.jpeg";
            break;
    }

    //-webkit-transform: scaleX(-1);
    // transform: scaleX(-1);

    switch (chosenRace2) {
        case "humans":
            document.getElementById("pic2").src = "images/human.png";
            break;
        case "elves":
            document.getElementById("pic2").src = "images/elf.jpeg";
            document.getElementById("pic2").style.transform = "scaleX(-1)";
            break;
        case "vampires":
            document.getElementById("pic2").src = "images/vampire.jpeg";
            break;
    }

    //setting health to 140 if orc is chosen as race
    if (chosenRace1 == "orcs") {
        createdChar1.maxHealth = 100 + ((100 * 40) / 100);
        createdChar1.currenthealth = 100 + ((100 * 40) / 100);
        healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
        document.getElementById("pic1").src = "images/orc.jpeg";
        document.getElementById("pic1").style.transform = "scaleX(-1)";
        document.getElementById("progress1").style.width = "100%";


    } else {
        createdChar1.currenthealth = 100;
        healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth)
    }

    if (chosenRace2 == "orcs") {
        createdChar2.maxHealth = 100 + ((100 * 40) / 100);
        createdChar2.currenthealth = 100 + ((100 * 40) / 100);
        document.getElementById("pic2").src = "images/orc.jpeg";
        document.getElementById("progress2").style.width = "100%";
        
    } else {
        createdChar2.currenthealth = 100;
    }
    document.getElementById("footer").style.display = "none";
    document.getElementById("header").style.display = "flex";
    document.getElementById("player1").style.visibility = "visible";
    document.getElementById("player2").style.visibility = "visible";
    document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
    document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
    document.getElementById("bar1").style.width = healthPercentage1 + "%";
    document.getElementById("bar2").style.width = createdChar2.currenthealth + "%";

    switch (chosenItem1) {
        case "boots":
            document.getElementById("item1pic").src = "images/boots.jpeg";
            break;
        case "staff":
            document.getElementById("item1pic").src = "images/staff.jpeg";
            break;
        case "sword":
            document.getElementById("item1pic").src = "images/sword.png";
            break;
        case "bow":
            document.getElementById("item1pic").src = "images/bow.jpeg";
            break;
    }

    switch (chosenItem2) {
        case "boots":
            document.getElementById("item2pic").src = "images/boots.jpeg";
            break;
        case "staff":
            document.getElementById("item2pic").src = "images/staff.jpeg";
            break;
        case "sword":
            document.getElementById("item2pic").src = "images/sword.png";
            break;
        case "bow":
            document.getElementById("item2pic").src = "images/bow.jpeg";
            break;
    }

    function coinToss() {
        var toss = Math.random();
        //removes the filter from the background  - to do 
        //document.getElementById("container").style.filter = "brightness(100%)";
        if (toss < 0.5) {
            phit1.disabled = false;
            phit1.classList.remove("disabledHit");
            phit1.classList.add("hit");

            pheal1.disabled = false;
            phit1.classList.remove("disabledHeal");
            pheal1.classList.add("heal");

            pyield1.disabled = false;
            phit1.classList.remove("disabledYield");
            pyield1.classList.add("yield");
        } else {
            phit2.disabled = false;
            phit2.classList.remove("disabledHit");
            phit2.classList.add("hit");

            pheal2.disabled = false;
            pheal2.classList.remove("disabledHeal");
            pheal2.classList.add("heal");

            pyield2.disabled = false;
            pyield2.classList.remove("disabledYield");
            pyield2.classList.add("yield");
        }
        document.getElementById("coinTossbtn").innerHTML = "";
        document.getElementById("coinTossbtn").className = "log";
        document.getElementById("coinTossbtn").removeEventListener("click", coinToss);
    }
}


function pyield() {
    if (event.target == document.getElementById("pyield1")) {
        alert(p1Name + " yields" + "..." + p2Name + " WINS!");
        document.location.reload();
    } else if (event.target == document.getElementById("pyield2")) {
        alert(p2Name + " yields" + "..." + p1Name + " WINS!");
        document.location.reload();
    }

}

$("#card").flip({
    axis: 'x',
    trigger: 'click',
    reverse: false
});



export {
    createdChar1
}
export {
    createdChar2
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
