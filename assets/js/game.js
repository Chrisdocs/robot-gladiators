var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players they are starting a round
    window.alert("Welcome to Robot Gladiators!");
    //Subtrack the value of playerAttack from the value of enemyHealth
enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " +enemyName + " now has " + enemyHealth + " health remaining."
);
    // Check enemy health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died.");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
    //Subtract the value of enemyAttack fromt he value of playerHealth.
playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //check players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

};

fight();