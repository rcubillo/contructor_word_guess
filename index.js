// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

var Word = require("./word");
var inquirer = require("inquirer");

var random = ["HOUSE", "KITCHEN", "JAVASCRIPT", "NETFLIX", "TREE", "EXPRESS"]

var indexing = Math.floor(Math.random() * random.length);

let guessRandom = new Word(random[5]);

function prompting( ){
// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Guess a letter!",
      name: "guess"
    },
]).then(function(userinput) {
    guessRandom.wordAsString(userinput.guess);
});
}

function correctGuess() {
    console.log("Correct!");
    prompting();
}

prompting();