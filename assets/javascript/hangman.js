
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

// Converts user guessed letter into uppercase 
document.onkeyup = function(event) {
    //var keyPress;    
    //keyPress = event.keyCode;
    // Convert user input key to upper case string.
    //userInput = String.fromCharCode(keyPress).toUpperCase();
    userInput = event.key.toUpperCase();
    console.log('This is the key entered', userInput);
    //console.log(userInput);
};

// Functions 

// Function to select random word from the array
function createWord(wordArray) {
    word = wordArray[Math.floor(Math.random()*wordArray.length)];
    console.log(word);
    //Create placeholder for word in UI
	//createWordPlaceholder(word);
	//return word;
};
createWord(wordArray);




