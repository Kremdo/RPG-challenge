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

            //making sure currenthealth never exceeds maxhealth
            if (createdChar1.currenthealth > createdChar1.maxHealth) {
                createdChar1.currenthealth = createdChar1.maxHealth;
                healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
                console.log(healthPercentage1)

            } else {
                createdChar1.currenthealth += healingValue;
                healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
                if (createdChar1.currenthealth > createdChar1.maxHealth) {
                    createdChar1.currenthealth = createdChar1.maxHealth;
                    healthPercentage1 = createdChar1.currenthealth * (100 / createdChar1.maxHealth);
                }
            }
            document.getElementById("bar1").innerHTML = createdChar1.currenthealth;
            document.getElementById("bar1").style.width = healthPercentage1 + "%";
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
            //making sure currenthealth never exceeds maxhealth
            if (createdChar2.currenthealth > createdChar2.maxHealth) {
                createdChar2.currenthealth = createdChar2.maxHealth;
                healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);

            } else {
                createdChar2.currenthealth += healingValue;
                healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);
                if (createdChar2.currenthealth > createdChar2.maxHealth) {
                    createdChar2.currenthealth = createdChar2.maxHealth;
                    healthPercentage2 = createdChar2.currenthealth * (100 / createdChar2.maxHealth);

                }
            }
            document.getElementById("bar2").innerHTML = createdChar2.currenthealth;
            document.getElementById("bar2").style.width = healthPercentage2 + "%";
        }

    };

    this.damage = function () {};

    this.totalDamage = this.damage();

    displayChar(this.race, this.item, this.maxHealth);

}


//Delete this functiom
function displayChar(race, item, maxHealth) {
    return console.log(`I am a ${race}, I wield a ${item}, my total health point are ${maxHealth}`);
}
