//   * Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
//  That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// Contructor letter
function Letter (letter){
    this.letter = letter;
    this.guessed = false;
    //method checks the 'guessed' property and returns either an _ or letter based on the 'guessed' value
    this.displayLetter = function(){
        if(this.guessed){
            return this.letter + " ";
        }
        else{
            return "_ ";
        };
    };
    //if the guessed letter matches the 'letter' value, then we change the 'guessed' value of the Letter object to 'true'.
    this.checkGuess = function(guess){
        if(guess === this.letter){
            this.guessed = true;
        }
    };
};

//Exporting the constructor to the Word.js file.
module.exports = Letter;