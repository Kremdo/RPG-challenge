import {
    createdChar1
} from "/gamelogic.js";
import {
    createdChar2
} from "/gamelogic.js";

var healthPercentage1;
var healthPercentage2;

//Use this script to generate your character
export default function Person(race, item) {
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;
    

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

            if (createdChar1.currenthealth < 30) {
                document.getElementById("bar1").style.backgroundColor = "red";
            }
            document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
            document.getElementById("bar1").style.width = healthPercentage1 + "%";
            document.getElementById("pic1").style.width = healthPercentage1 + "%";
            document.getElementById("pic1").style.height = healthPercentage1 + "%";
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
                console.log(createdChar1.currenthealth);
                console.log(createdChar2.currenthealth);
                if (createdChar1.currenthealth > createdChar1.maxHealth) {
                    createdChar1.currenthealth = createdChar1.maxHealth;
                    healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
                                       
                };
                console.log(createdChar1.currenthealth);
                document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
                document.getElementById("bar1").style.width = healthPercentage1 + "%";
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
                            console.log(randomDamage);

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
                console.log(randomDamage);
                if (chance < 0.3) {
                    randomDamage = Math.ceil(randomDamage * 0.5);
                    console.log(randomDamage);
                    console.log("reflected damage " + randomDamage);
                    createdChar1.currenthealth -= randomDamage;
                    healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth)
                    document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
                    document.getElementById("bar1").style.width = healthPercentage1 + "%";
                    
                    console.log("P1 current health " + createdChar1.currenthealth);
                    randomDamage = 0;
                    console.log(randomDamage);

                } else {
                    createdChar2.currenthealth -= randomDamage;
                    healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);
                    document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
                    document.getElementById("bar2").style.width = healthPercentage2 + "%";
                    console.log("P2 curr health" + createdChar2.currenthealth);
                }
            }

            document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
            document.getElementById("bar2").style.width = healthPercentage2 + "%";
            document.getElementById("pic2").style.width = healthPercentage2 + "%";
            document.getElementById("pic2").style.height = healthPercentage2 + "%";

    

            //check if player 2 hits button
        } else if (event.target == document.getElementById("phit2")) {
            //calculate random damage between min and max values
            var randomDamage = Math.floor(Math.random() * (createdChar2.maxDamage - createdChar2.min + 1) + createdChar2.min);

            if (createdChar2.race == "vampires") {
                createdChar2.currenthealth = createdChar2.currenthealth + Math.floor(createdChar1.currenthealth * 0.1);
                createdChar1.currenthealth = createdChar1.currenthealth - Math.floor(createdChar1.currenthealth * 0.1);
                healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);
                console.log(createdChar1.currenthealth);
                console.log(createdChar2.currenthealth);
                if (createdChar2.currenthealth > createdChar2.maxHealth) {
                    createdChar2.currenthealth = createdChar2.maxHealth;
                    healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);
                                       
                };
                console.log(createdChar2.currenthealth);
                document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
                document.getElementById("bar2").style.width = healthPercentage2 + "%";
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

                            createdChar2.currenthealth -= randomDamage;
                            healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);

                            document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
                            document.getElementById("bar2").style.width = healthPercentage2 + "%";
                            console.log(randomDamage);

                            i++;

                            randomDamage = Math.floor(Math.random() * (createdChar1.maxDamage - createdChar1.min + 1) + createdChar1.min);
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
                console.log(randomDamage);
                if (chance < 0.3) {
                    randomDamage = Math.ceil(randomDamage * 0.5);
                    console.log(randomDamage);
                    console.log("reflected damage " + randomDamage);
                    createdChar2.currenthealth -= randomDamage;
                    healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth)
                    document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
                    document.getElementById("bar2").style.width = healthPercentage2 + "%";
                    
                    console.log("P2 current health " + createdChar2.currenthealth);
                    //randomDamage = 0;
                    console.log(randomDamage);

                } else {
                    createdChar1.currenthealth -= randomDamage;
                    healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
                    document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
                    document.getElementById("bar1").style.width = healthPercentage1 + "%";
                    console.log("P1 curr health" + createdChar1.currenthealth);
                }
            }


            document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
            document.getElementById("bar1").style.width = healthPercentage1 + "%";
            document.getElementById("pic1").style.width = healthPercentage1 + "%";
            document.getElementById("pic1").style.height = healthPercentage1 + "%";


        }

        /*if (createdChar1.currenthealth <= 0) {
            createdChar1.currenthealth = 0;
            healthPercentage1 = 0;
            document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
            document.getElementById("bar1").style.width = healthPercentage1 + "%";
            alert (p1Name);
        }*/
        
    };
    
    this.totalDamage = this.damage();

    displayChar(this.race, this.item, this.maxHealth);

}


//Delete this functiom
function displayChar(race, item, maxHealth) {
    return console.log(`I am a ${race}, I wield a ${item}, my total health point are ${maxHealth}`);
}