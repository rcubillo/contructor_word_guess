//   * Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing
// the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

//This file requires access to the Letter.js file
var Letter = require('./Letter.js');

function Word(word) {
  this.lettersArr = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === ' ') {
      this.lettersArr.push(' ');
    } else {
      this.lettersArr.push(new Letter(word.charAt(i)));
    }
  }

  this.createString = function() {
    var wordString = '';
    this.lettersArr.forEach(function(element) {
      if (element === ' ') {
        wordString += '  ';
      } else {
        wordString += element.displayLetter();
      }
    });
    return wordString;
  };

  this.checkGuessWord = function(letterGuess) {
    this.lettersArr.forEach(function(element) {
      if (element.letter !== undefined) {
        element.checkGuess(letterGuess);
      }
    });
  };
}

module.exports = Word;
