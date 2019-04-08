//   * Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var Letter = require("./letter");

function Word(word) {
    this.word = word.split("");
    this.string = "";
    this.wordAsString = function (userinput){
        for (let i = 0; i < this.word.length; i++) {
            let newLetter = new Letter(userinput, this.word[i]);
            this.string += " " + newLetter.letterPrinter();
        }
        console.log(this.string);
    };

    this.wordLetterChecker = function (userinput){
        for (let i = 0; i < this.word.length; i++) {
            let newLetter = new Letter(userinput, this.word[i]);
            this.string += " " + newLetter.letterChecker();
        }
        console.log(this.string);

    };
};

// let newWord = new Word("Pudding");
// newWord.wordAsString();

module.exports = Word;