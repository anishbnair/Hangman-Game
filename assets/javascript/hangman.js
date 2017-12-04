
//Computer randomly choose a word 
//User guess the word
//Compare the word
//Win / loose


// var letter = event.key.toLowerCase();
// console.log(letter);

// VARIABLES
// =================================================================================
var wins = 0;
var placeholderArray = [];
var prevPlaceholderArray = [];
var wordPlaceholder = [];
var lettersGuessed = [];
var word = [];
var wordPlaceholderString = "";
var userInput = "";
var correctGuessCount = 0;
var guessesLeft = 10;

// Object of Country words.
var countryWords = {
	word1: ["U", "S", "A"],
	word2: ["I", "N", "D", "I", "A"],
	word3: ["C", "A", "N", "A", "D", "A"],
	word4: ["J", "A", "P", "A", "N"],
};

// Array of Coutry words created from object.
var wordArray = [countryWords.word1, countryWords.word2, countryWords.word3, countryWords.word4];
console.log(wordArray);


