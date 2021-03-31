var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    
    return value;
    };

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
        }

    console.log("Your robot's name is " + name);
        return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        this.health += 20;
        this.money -= 7;
    },
    upgradeAttack: function() {
        this.attack += 6;
        this.money -= 7;
    }
};

var enemyInfo = [
    {
        name: "Roboto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

// Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
      // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        shop();
        //return true if player wants to leave
        return true;
        }
    }
    return false;
};

// fight function
var fight = function(enemy) {

    while (playerInfo.health > 0 && enemy.health > 0) {
        //ask the player if they would like to fight or skip using the fight or skip option.
        if (fightOrSkip()) {
            //if true, leave the fight by breaking loop
            break;
        }

          // generate random damage value based on players attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);

            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
          // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");

                // award player for winning
                playerInfo.money = Math.max(0, playerInfo.money + 10);

                //leave while() loop since enemy is dead
                break;

            } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }

            var damage = randomNumber(enemy.attack -3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);

            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
    
          // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
    };  // if no (false), ask question again by running fight() again
    

var startGame = function() {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);
            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask if player wants to use the store before the nest round
                var storeConfirm = window.confirm("The fight is over, visit the store?");
                //if yes, take them to the store() function
                if (storeConfirm) {
                shop();
                }
            }

        }
        else {
            window.alert("You have lost your robot in battle!  Game Over!");
            break;
            }
        }
        endGame();
};

var endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("The game has now ended.  Let's see how you did!");
        }
        else {
            window.alert("You've lost your robot in battle.");
        }
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
            startGame();
        } else {
            window.alert("Thank you for playing Robot Gladiators!  Come back soon!")
        }
    };

var shop = function() {
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?  Please enter one: 'REFILL', 'Upgrade', or 'LEAVE' to make a choice."
    );
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill": // new case
        case "REFILL":
            playerInfo.refillHealth();
            break;

        case "upgrade": //new case
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;
        case "leave": //new case
        case "LEAVE":

            window.alert ("leaving the store.");

            //do nothing, so function will end
            break;
        default:
            window.alert ("You did not pick a valid option, try again.");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
//function to generate a random numeric value
};
//start the game when page loads
startGame();