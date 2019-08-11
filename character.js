import {
    createdChar1
} from "/gamelogic.js";
import {
    createdChar2
} from "/gamelogic.js";

var healthPercentage1;
var healthPercentage2;
var phit1 = document.getElementById("phit1");
var pheal1 = document.getElementById("pheal1");
var pyield1 = document.getElementById("pyield1");
var phit2 = document.getElementById("phit2");
var pheal2 = document.getElementById("pheal2");
var pyield2 = document.getElementById("pyield2");
var who;
var what;
var result;
const moveLog = document.getElementById("coinTossbtn");
let i = 1;


//Use this script to generate your character
export default function Person(race, item) {
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    var p1Name = document.getElementById("player1Name").value;
    var p2Name = document.getElementById("player2Name").value;

    //healing function
    this.heal = function () {
        //making sure player 1 hits his heal button
        if (event.target == document.getElementById("pheal1")) {
            var randomHealValue = Math.floor(Math.random() * (createdChar1.maxHealing - createdChar1.min + 1) + createdChar1.min);
            //check if item is staff for 20% extra healing
            var healingValue;
            if (item == "staff") {
                healingValue = randomHealValue + Math.ceil(((randomHealValue * 20) / 100));

            } else {
                healingValue = randomHealValue;
            }
            createdChar1.currenthealth += healingValue;
            healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);

            //making sure currenthealth never exceeds maxhealth
            if (createdChar1.currenthealth > createdChar1.maxHealth) {
                createdChar1.currenthealth = createdChar1.maxHealth;
                healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
            }
            
            document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
            document.getElementById("bar1").style.width = healthPercentage1 + "%";
            document.getElementById("pic1").style.width = healthPercentage1 + "%";
            document.getElementById("pic1").style.height = healthPercentage1 + "%";

            moveAndLog(p1Name, "heals", healingValue);

            barColorChange();

            disableP1EnableP2();

            //making sure player 2 pushes his heal button
        } else {
            var randomHealValue = Math.floor(Math.random() * (createdChar2.maxHealing - createdChar2.min + 1) + createdChar2.min);
            //checking if item is staff for 20% extra healing
            var healingValue;
            if (item == "staff") {
                healingValue = randomHealValue + Math.ceil(((randomHealValue * 20) / 100));
            } else {
                healingValue = randomHealValue;
            }
            createdChar2.currenthealth += healingValue;
            healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);
            //making sure currenthealth never exceeds maxhealth
            if (createdChar2.currenthealth > createdChar2.maxHealth) {
                createdChar2.currenthealth = createdChar2.maxHealth;
                healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);
            }
            

            document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
            document.getElementById("bar2").style.width = healthPercentage2 + "%";
            document.getElementById("pic2").style.width = healthPercentage2 + "%";
            document.getElementById("pic2").style.height = healthPercentage2 + "%";

            moveAndLog(p2Name, "heals", healingValue);

            barColorChange();

            disableP2EnableP1();
        }

    };

    this.damage = function () {
        //calculate var for all chance percentages
        var chance = Math.random();


        //check if player 1 pushes button
        if (event.target == document.getElementById("phit1")) {

            if (createdChar1.race == "vampires") {
                createdChar1.currenthealth = createdChar1.currenthealth + Math.floor(createdChar2.currenthealth * 0.1);
                createdChar2.currenthealth = createdChar2.currenthealth - Math.floor(createdChar2.currenthealth * 0.1);
                healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);

                if (createdChar1.currenthealth > createdChar1.maxHealth) {
                    createdChar1.currenthealth = createdChar1.maxHealth;
                    healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
                };

                document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
                document.getElementById("bar1").style.width = healthPercentage1 + "%";
                document.getElementById("pic1").style.width = healthPercentage1 + "%";
                document.getElementById("pic1").style.height = healthPercentage1 + "%";
                barColorChange();
                console.log(moveAndLog);
            }

            //calculate random damage between max and min
            var randomDamage = Math.floor(Math.random() * (createdChar1.maxDamage - createdChar1.min + 1) + createdChar1.min);


            //check what item player 1 is holding
            switch (createdChar1.item) {
                //if player 1 holds sword, add 30% damage
                case "sword":
                    randomDamage += Math.ceil(randomDamage * 0.3);
                    break;

                case "bow":
                    //if player 1 holds bow 30% chance to hit again
                    if (chance < 0.3) {
                        let i = 0;
                        while (i < 1) {

                            createdChar2.currenthealth -= randomDamage;
                            healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);

                            document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
                            document.getElementById("bar2").style.width = healthPercentage2 + "%";
                            barColorChange();

                            i++;

                            randomDamage = Math.floor(Math.random() * (createdChar1.maxDamage - createdChar1.min + 1) + createdChar1.min);
                        }
                    }
                    break;
            }
            //check if player 2 is holding boots if so add dodge chance for player 2
            switch (createdChar2.item) {
                case "boots":
                    if (chance < 0.3) {
                        randomDamage = 0;

                    }
                    break;
            }

            //adjust player 2 health and push it to html
            if (createdChar2.race == "humans") {
                randomDamage -= Math.ceil(randomDamage * 0.2);

                createdChar2.currenthealth -= randomDamage;
                healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth)
            } else if (createdChar2.race != "elves") {
                createdChar2.currenthealth -= randomDamage;
                healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);
            }

            if (createdChar2.race == "elves") {
                if (chance < 0.3) {
                    randomDamage = Math.ceil(randomDamage * 0.5);
                    createdChar1.currenthealth -= randomDamage;
                    healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth)
                    document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
                    document.getElementById("bar1").style.width = healthPercentage1 + "%";
                    document.getElementById("pic1").style.width = healthPercentage1 + "%";
                    document.getElementById("pic1").style.height = healthPercentage1 + "%";
                    barColorChange();

                } else {
                    createdChar2.currenthealth -= randomDamage;
                    healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);
                    document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
                    document.getElementById("bar2").style.width = healthPercentage2 + "%";
                    document.getElementById("pic2").style.width = healthPercentage2 + "%";
                    document.getElementById("pic2").style.height = healthPercentage2 + "%";
                    barColorChange();
                }
            }

            document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
            document.getElementById("bar2").style.width = healthPercentage2 + "%";
            document.getElementById("pic2").style.width = healthPercentage2 + "%";
            document.getElementById("pic2").style.height = healthPercentage2 + "%";

            moveAndLog(p1Name, "hit", randomDamage);

            barColorChange();

            //check if player 2 hits 0 hp and pronounce winner is so
            if (createdChar2.currenthealth <= 0) {
                //createdChar2.currenthealth = 0;
                //healthPercentage2 = 0;
                document.getElementById("bar2").innerHTML = "0";
                document.getElementById("bar2").style.width = "0%";

                alert(p2Name + " is knocked out!\n" + p1Name + " wins!");
                location.reload();
            }
          
            disableP1EnableP2();

            //check if player 2 hits button
        } else if (event.target == document.getElementById("phit2")) {
            //calculate random damage between min and max values
            var randomDamage = Math.floor(Math.random() * (createdChar2.maxDamage - createdChar2.min + 1) + createdChar2.min);

            if (createdChar2.race == "vampires") {
                createdChar2.currenthealth = createdChar2.currenthealth + Math.floor(createdChar1.currenthealth * 0.1);
                createdChar1.currenthealth = createdChar1.currenthealth - Math.floor(createdChar1.currenthealth * 0.1);
                healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);

                if (createdChar2.currenthealth > createdChar2.maxHealth) {
                    createdChar2.currenthealth = createdChar2.maxHealth;
                    healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);

                };
                document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
                document.getElementById("bar2").style.width = healthPercentage2 + "%";
                document.getElementById("pic2").style.width = healthPercentage2 + "%";
                document.getElementById("pic2").style.height = healthPercentage2 + "%";
                barColorChange();
            }


            //check what item player 2 is using 
            switch (createdChar2.item) {
                //if player 2 is holding sword, add 30% damage
                case "sword":
                    randomDamage += Math.ceil(randomDamage * 0.3);
                    break;

                    //if player 2 is holding bow, add 30% chance to attack again
                case "bow":
                    if (chance < 0.3) {
                        let i = 0;
                        while (i < 1) {

                            createdChar1.currenthealth -= randomDamage;
                            healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);

                            document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
                            document.getElementById("bar1").style.width = healthPercentage1 + "%";
                            document.getElementById("pic1").style.width = healthPercentage1 + "%";
                            document.getElementById("pic1").style.height = healthPercentage1 + "%";
                            barColorChange();

                            i++;

                            randomDamage = Math.floor(Math.random() * (createdChar2.maxDamage - createdChar2.min + 1) + createdChar2.min);
                        }
                    }
                    break;
            }

            //check if player 1 is using boots and if so add 30% dodge chance
            switch (createdChar1.item) {
                case "boots":
                    if (chance < 0.3) {
                        randomDamage = 0;

                    }
                    break;
            }


            //calculate done damage and push to html

            if (createdChar1.race == "humans") {
                randomDamage -= Math.ceil(randomDamage * 0.2);

                createdChar1.currenthealth -= randomDamage;
                healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth)
            } else if (createdChar1.race != "elves") {
                createdChar1.currenthealth -= randomDamage;
                healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
            }

            if (createdChar1.race == "elves") {
                if (chance < 0.3) {
                    randomDamage = Math.ceil(randomDamage * 0.5);

                    createdChar2.currenthealth -= randomDamage;
                    healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth)
                    document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
                    document.getElementById("bar2").style.width = healthPercentage2 + "%";
                    document.getElementById("pic2").style.width = healthPercentage2 + "%";
                    document.getElementById("pic2").style.height = healthPercentage2 + "%";
                    barColorChange();

                } else {
                    createdChar1.currenthealth -= randomDamage;
                    healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
                    document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
                    document.getElementById("bar1").style.width = healthPercentage1 + "%";
                    document.getElementById("pic1").style.width = healthPercentage1 + "%";
                    document.getElementById("pic1").style.height = healthPercentage1 + "%";
                    barColorChange();
                    console.log("P1 curr health" + createdChar1.currenthealth);
                }
            }


            document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
            document.getElementById("bar1").style.width = healthPercentage1 + "%";
            document.getElementById("pic1").style.width = healthPercentage1 + "%";
            document.getElementById("pic1").style.height = healthPercentage1 + "%";
            moveAndLog(p2Name, "hit", randomDamage);
            barColorChange();

            //check if player 1 hits 0 hp and pronounce winner is so
            if (createdChar1.currenthealth <= 0) {
                //createdChar1.currenthealth = 0;
                //healthPercentage1 = 0;
                document.getElementById("bar1").innerHTML = "0";
                document.getElementById("bar1").style.width = "0%";
                //review below function
               // playAudio("sounds/smash.wav");

                alert(p1Name + " is knocked out!\n" + p2Name + " wins!");
                location.reload();
            }

            disableP2EnableP1();
        }


    }

    function disableP1EnableP2() {
        phit1.disabled = true;
        phit1.classList.remove("hit")
        phit1.classList.add("disabledHit");

        pheal1.disabled = true;
        pheal1.classList.remove("heal")
        pheal1.classList.add("disabledHeal");

        pyield1.disabled = true;
        pyield1.classList.remove("yield")
        pyield1.classList.add("disabledYield");

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

    function disableP2EnableP1() {
        phit2.disabled = true;
        phit2.classList.remove("hit")
        phit2.classList.add("disabledHit");

        pheal2.disabled = true;
        pheal2.classList.remove("heal")
        pheal2.classList.add("disabledHeal");

        pyield2.disabled = true;
        pyield2.classList.remove("yield")
        pyield2.classList.add("disabledYield");

        phit1.disabled = false;
        phit1.classList.remove("disabledHit");
        phit1.classList.add("hit");

        pheal1.disabled = false;
        pheal1.classList.remove("disabledHeal");
        pheal1.classList.add("heal");

        pyield1.disabled = false;
        pyield1.classList.remove("disabledYield");
        pyield1.classList.add("yield");
    }

    function barColorChange() {
        //progress bar turns red if health is <= 30 or green if >30 - check both players
        if (createdChar2.currenthealth <= 30) {
            document.getElementById("bar2").style.backgroundColor = "red";
        } else if (createdChar2.currenthealth > 30) {
            document.getElementById("bar2").style.backgroundColor = "#4CAF50";
        } 
        if (createdChar1.currenthealth <= 30) {
            document.getElementById("bar1").style.backgroundColor = "red";
        } else if (createdChar1.currenthealth > 30) {
            document.getElementById("bar1").style.backgroundColor = "#4CAF50";
        }
    }

    
    //function to log the moves and damage
    function moveAndLog (who, what, result) {
        
        if ( what == "heals" ) {
            moveLog.innerHTML += i +" " + who + " heals +" + result + ".<br>";
        } else if ( what == "hit") {     
            moveLog.innerHTML += i + ". " + who + " " + what + ".<br>";    
            if(who == p1Name) { 
                who = p2Name;
                if (result === 0) {
                    moveLog.innerHTML += who + " dodged.<br>";
                } else if (createdChar1.race != "vampires") {
                    moveLog.innerHTML += who + " took -" + result + " damage.<br>";
                } else if (createdChar1.race == "vampires") {
                    moveLog.innerHTML += who + " took -" + result + " damage and lost extra 10.<br>";
                }

            } else if (who == p2Name) {
                who = p1Name;
                if (result === 0) {
                    moveLog.innerHTML += who + " dodged.<br>";
                } else if (createdChar2.race != "vampires") {
                    moveLog.innerHTML += who + " took -" + result + " damage.<br>";
                } else if (createdChar2.race == "vampires") {
                    moveLog.innerHTML += who + " took -" + result + " damage and lost extra 10.<br>";
                }
            } 
        }
        
        //moveLog.style.textAlign = "right"; - this shoul alter between right and left 
        i++;
    }

    //function playAudio(x) {
   //     x.play()
   // }

    this.totalDamage = this.damage();

    displayChar(this.race, this.item, this.maxHealth);

}


//Delete this functiom
function displayChar(race, item, maxHealth) {
    return console.log(`I am a ${race}, I wield a ${item}, my total health point are ${maxHealth}`);
}
