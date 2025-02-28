let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
const weapons = [
    {
        name:"stick",
        damage:5
    },
    {
        name:"sword",
        damage:10
    },
    {
        name:"axe",
        damage:15
    }
];
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText= document.querySelector('#healthText');
const goldText= document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const MonsterNameText = document.querySelector('#MonsterName');
const MonsterHealthText = document.querySelector('#MonsterHealth');
const locations=[
    {
        name:"town",
        "button text":["Go to the store","Go to the cave","Fight the dragon"],
        "button functions":[goStore,goCave,fightDragon],
        "text":"you are in the town square. Where do you want to go? Use the buttons above."
    },
    {
        name:"store",
        "button text":["Buy  10 health with 10 gold","Buy  a sword with 30 gold","Go to Town"],
        "button functions":[buyHealth,buySword,goTown],
        "text":"Welcome to the store. What would you like to buy?"
    },
    // {
    //     name:"cave",
    //     "button text":["Fight the monster","Run away","Go to Town"],
    //     "button functions":[fightMonster,runAway,goTown],
    //     "text":""
    // },
    // {
    //     name:"fight",
    //     "button text":["Attack","Run away",""],
    //     "button functions":[attack,runAway],
    //     "text":""
    // }
];
// innitialize the buttons
button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;

function goTown(){
    updateStats(locations[0]);
}

function goStore(){
    updateStats(locations[1]);
}

function buyHealth(){
    if(gold>=10){
        gold-=10;
        health+=10;
        updateStats();
    }
    else text.innerText="You don't have enough gold to buy health.";
}
function buySword(){
    if(gold>=30){
        gold-=30;
        inventory.push("sword");
        currentWeapon=1;
        updateStats();
    }
    else text.innerText="You don't have enough gold to buy a sword.";
}

function updateStats(location){
    healthText.innerText=health;
    goldText.innerText=gold;
    xpText.innerText=xp;
    if(!location)return;
    text.innerText=location.text;
    button1.innerText=location["button text"][0];
    button2.innerText=location["button text"][1];
    button3.innerText=location["button text"][2];
    button1.onclick=location["button functions"][0];
    button2.onclick=location["button functions"][1];
    button3.onclick=location["button functions"][2];
}
function goCave(){
    console.log("going to the cave.");
    
}
function fightDragon(){
    console.log("fighting the dragon.");
    
}