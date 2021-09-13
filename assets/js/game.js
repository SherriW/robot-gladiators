var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log (playerName, playerAttack, playerHealth);

var enemyName = 'Roborto';
var enemyHealth = 50;
var enemyAttack = 12;
var fight = function () {
  // Alert players that they are starting the round
  window.alert ('Welcome to Robot Gladiators!');

  var promptFight = window.prompt (
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose."
  );
  console.log (promptFight);

  // if player choses to fight, thern fight
  if (promptFight === 'fight' || promptFight === 'FIGHT') {
    // Subtract a value of 'playerAttack'from the value of 'enemyHealth' amd use that result to update the value in the 'énemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log (
      playerName +
        ' attacked ' +
        enemyName +
        '. ' +
        enemyName +
        ' now has ' +
        enemyHealth +
        ' health remaining.'
    );

    // Subtract a value of 'enemyHealth'from the value of 'playerHealth' amd use that result to update the value in the 'playerHealth' variable
    playerHealth - playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log (
      enemyName +
        ' attacked ' +
        playerName +
        '. ' +
        playerName +
        ' now has ' +
        playerHealth +
        ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert (enemyName + ' has died!');
    } else {
      window.alert (enemyName + ' still has ' + enemyHealth + ' health left.');
    }
    // check player's health
    if (playerHealth <= 0) {
      window.alert (playerName + ' has died!');
    } else {
      window.alert (
        playerName + ' still has ' + playerHealth + ' health left.'
      );
    }
    // if player choses to skip
  } else if (promptFight === 'skip' || promptFight === 'SKIP') {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Äre you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert (playerName + ' has chosen to skip the fight!');
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    }
    
    // if no (false), ask question again by funning fight() again
    else {
      fight();
    }

    // if player did not chose 1 or 2 in prompt
    } else {
    window.alert ('You need to choose a valid option. Try again!');
  }
};

// run fight function to start game
fight ();
