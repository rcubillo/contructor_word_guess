//   * Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
//  That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

class Letter {
    constructor(guessedLetter, input) {
        this.userGuess = guessedLetter;
        this.input = input;
        this.guessed = false;
    }

    letterPrinter() {
        if (this.userGuess.toUpperCase() === this.input.toUpperCase()) {
            return this.input + " ";
        }

        if (this.input == " ") {
            return "  ";
        }

        if (this.userGuess.toUpperCase() != this.input.toUpperCase()) {
            return "_  ";
        }
    }

    letterChecker() {
        if (this.userGuess === this.input) {
            this.guessed = true;
            return this.guessed;
        }
        else {
            return this.guessed;
        }

    }
}

module.exports = Letter;