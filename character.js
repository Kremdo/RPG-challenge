import {
    createdChar1
} from "/gamelogic.js";
import {
    createdChar2
} from "/gamelogic.js";
//Use this script to generate your character
export default function Person(race, item) {
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;



    this.heal = function () {
        if (event.target == document.getElementById("pheal1")) {
            var randomHealValue = Math.floor(Math.random() * (createdChar1.maxHealing - createdChar1.min + 1) + createdChar1.min);
            console.log(createdChar1.currenthealth)

            var healingValue;
            if (item == "staff") {
                healingValue = randomHealValue + Math.ceil(((randomHealValue * 20) / 100));
                console.log(healingValue);
            } else {
                healingValue = randomHealValue;
            }
            console.log(randomHealValue);
            createdChar1.currenthealth += healingValue;
            console.log(createdChar1.currenthealth);
        } else {
            var randomHealValue = Math.floor(Math.random() * (createdChar2.maxHealing - createdChar2.min + 1) + createdChar2.min);
            console.log(createdChar2.currenthealth)

            var healingValue;
            if (item == "staff") {
                healingValue = randomHealValue + Math.ceil(((randomHealValue * 20) / 100));
                console.log(healingValue);
            } else {
                healingValue = randomHealValue;
            }
            console.log(randomHealValue);
            createdChar2.currenthealth += healingValue;
            console.log(createdChar2.currenthealth);
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
