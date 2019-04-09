// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

//This file depends of word.fs
var Word = require("./Word.js");

//// Load the NPM Package inquirer
var inquire = require("inquirer");

//Array with words to guess.
var container = ["netflix", "javascript", "pig", "vanderbilt university"];

// Regular expressions (Only letters).
var letters = /[a-zA-Z]/;

// Using this variable to initialize the number of tries.
var numGuesses;


function playGame() {

    var newWord = container[Math.floor(Math.random() * container.length)]
    //Picking new random word from the array.
    var word = new Word(newWord);

    //Giving the user 7 tries before the game over.
    numGuesses = 7;

    //Now we execute the game based on the word.
    guessWord(word, newWord);
};


function guessWord(guess, actual) {

    var letterWordArr = [];
    //This array will be used to store boolean values for each letter to see if everything has been guessed correctly
    var guessArr = [];

    //Shows the word being guessed as underscores.
    console.log('\n', guess.createString());


    inquire.prompt([
        {
            name: "guessLetter",
            message: "Guess a letter!",

            validate: function validateLetter(name) {
                if (!name.match(letters)) {
                    return "Only letters please! if you don't get it, play monopoly or something else.";
                }
                else{
                    return true;
                }
            }
        }
    ]).then(function (answer) {
        //Converting input to upper case, using the checkGuessWord to see if the letter is in the word selected.
        guess.checkGuessWord(answer.guessLetter.toLowerCase());

        //We want to get the boolean value for each Letter object in the Word so we can see if there are any false values. If there are
        //then the word is still being guessed on. Also, we want to get all the letters in the word so that we can see if the letter
        //is in the word. The checkGuessWord function above does not do that (though it could be written as if it was).
        guess.lettersArr.forEach(function (element) {

            letterWordArr.push(element.letter);
            guessArr.push(element.guessed);
        });

        if(letterWordArr.indexOf(answer.guessLetter.toLowerCase()) > -1){
            console.log("\n CORRECT!!!");
        }
        else{
            console.log("\n INCORRECT!!!");
            numGuesses--;
            console.log(`${numGuesses} guesses remaining.`)
        }

        // If user has tries, the function will keep asking for another letter.
        if (guessArr.indexOf(false) > -1 && numGuesses > 0) {
            guessWord(guess, actual);
        }
         //At the end of the game, show if the user won or lose. And the word.
        else {
            if (numGuesses === 0) {
                console.log("\n You lose!");
                console.log(`\n The word was ${actual}!`);
            }
            else {
                console.log("\n You got it right!");
                console.log(`\n The word was ${actual}`);
            };
        };
    });
};

//When running node index.js on terminal, the playgame function is called.
playGame();