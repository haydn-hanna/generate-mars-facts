/**
 * Initialize the app
 *
 */
function init() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('\nHello world! I am a random Mars fact generator! Happy to be of service.')
    promptUser(rl);
}

/**
 * Generate a random fact about the Red Planet
 * @return {string} The random fact about Mars 
 */
function getRandomMarsFact() {
    let randomFacts = [
        'Mars is home to the largest volcano in our solar system - Olympus Mons',
        'Mars has one of the largest valleys in our solar system - Valles Marineris',
        'Mars can get to temperatures as low as -140 degrees celsius'
    ]
    return randomFacts[Math.ceil(Math.random() * randomFacts.length - 1)];
}

/**
 *Prompts the user to indicate whether they'd like to know a fact about Mars
 *
 * @param {readline interface} rl interface object generated from the readline library
 */
function promptUser(rl) {
    rl.question("\n:) Would you like to know a fact about Mars? y/n \n", function saveInput(answer) {
        if (answer === 'y') {
            console.log(getRandomMarsFact());
        } else {
            console.log(`:( You should really find out more about Mars!`);
        }
        promptUser(rl);
    });
}

init()