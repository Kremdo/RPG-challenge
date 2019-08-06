//Use this script to generate your character
export default function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    displayChar(this.race,this.item,this.maxHealth);
}

//Delete this functiom
function displayChar(race,item,maxHealth){
    return console.log(`I am a ${race}, I wield a ${item}, my total health point are ${maxHealth}`);
}