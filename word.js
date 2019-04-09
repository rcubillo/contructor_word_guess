//   * Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

//This file requires access to the Letter.js file
var Letter = require('./Letter.js');

//Our word constructor
function Word(word) {
  //Each Word constructor creates an array of Letter objects for each letter in the word.
  this.lettersArr = [];

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === ' ') {
      this.lettersArr.push(' ');
    } else {
      this.lettersArr.push(new Letter(word.charAt(i)));
    }
  }

  //Method that utilizes the displayLetter() method in each Letter object in the Word object and returns
  //what the user will see in the game based on which letters are guessed correctly in the hidden word.
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

  //When a letter is guessed, the Word object checks each Letter object in its array and changes the guessed value to true
  //if the letter is correct.
  this.checkGuessWord = function(letterGuess) {
    this.lettersArr.forEach(function(element) {
      if (element.letter !== undefined) {
        element.checkGuess(letterGuess);
      }
    });
  };
}

//Will be exporting the Word object to index.js
module.exports = Word;
