// Pseudo Code
// ================================================================================================================================
// Create an array with list of words
// Computer selects a random word from the array
// Create a placeholder array to store random selected word by adding underscores corresponding to the number of letters in the word
// Track user guessed letters
// Replace underscore with each letter if user guess it correctly. If not, move it under already guessed letters
// Compare the words
// If both words are equal, user wins and Restart game


// VARIABLES
// ================================================================================================================================
var wins = 0;
var placeholderArray = [];
var prevPlaceholderArray = [];
//var wordPlaceholder = [];
var lettersGuessed = [];
var word = [];
var wordPlaceholderString = "";
//var lettersGuessedString = "";
var userInput = "";
var correctGuessCount = 0;
var guessesLeft = 10;

// Object of Country words.
var countryWords = {
    word1: ["U", "S", "A"],
    word2: ["I", "N", "D", "I", "A"],
    word3: ["C", "A", "N", "A", "D", "A"],
    word4: ["J", "A", "P", "A", "N"],
    word5: ["C", "H", "I", "N", "A"],
    word6: ["B", "R", "A", "Z", "I", "L"],
    word7: ["Z", "A", "M", "B", "I", "A"],
    word8: ["Y", "E", "M", "E", "N"],
    word9: ["M", "E", "X", "I", "C", "O"],
    word10: ["U", "G", "A", "N", "D", "A"],
};

// Array of words created from object
var wordArray = [countryWords.word1, countryWords.word2, countryWords.word3, countryWords.word4, countryWords.word5, countryWords.word6, countryWords.word7, countryWords.word8, countryWords.word9, countryWords.word10];

// Calls the function to select a random word to initialize the game
createWord(wordArray);

// Converts user guessed letter into uppercase 
document.onkeyup = function (event) {

    // Convert user input key to upper case string
    userInput = event.key.toUpperCase();
    // Calls function to track user guesses
    trackLetterGuesses(userInput);
    // Calls function to build word based on new user input
        buildWord(userInput);
};

// FUNCTIONS
//=================================================================================================================================
// Function to select random word from the array
function createWord(wordArray) {
    word = wordArray[Math.floor(Math.random() * wordArray.length)];
    //Create placeholder for word in UI
    createWordPlaceholder(word);
    return word;
};

// Function to create placeholder array with underscores corresponding to the length of the randomly selected word 
function createWordPlaceholder(word) {
    var wordPlaceholder = [];
    //Replace placeholder array with underscore corresponding to each letter of the word
    for (i = 0; i < word.length; i++) {
        wordPlaceholder.push("_");
    };

    // Join the underscores together and display as a string 
    wordPlaceholderString = wordPlaceholder.join(" ");

    // Display undescores in UI correspoding to the length of the randonnly selected word 
    document.getElementById("word-placeholder").textContent = wordPlaceholderString;
    return wordPlaceholder;
};

// Function to track user guesses 
function trackLetterGuesses(userInput) {

    for (i = 0; i < lettersGuessed.length; i++) {
        if (userInput == lettersGuessed[i]) {
            return;
        }
    }

    // Push the letters guessed to the array
    lettersGuessed.push(userInput);

    // Convert letters guessed array to string for displaying in UI
    var lettersGuessedString = lettersGuessed.join(", ");
    document.getElementById('letters-guessed').innerHTML = lettersGuessedString;

    // Reduce number of guesses left for each guessed letter
    guessesLeft--;

    // Display number of guesses left in UI
    document.getElementById('guess-count').innerHTML = guessesLeft;

    // Restart game of no guesses left
    if (guessesLeft == 0) {
        // Calls function to Restart game
        restartGame();
    }
    return lettersGuessedString;
};

// Function to update array as user guesses correct leters 
function buildWord(userInput) {

    // Initialize placeholder array with underscore array
    if (prevPlaceholderArray.length == 0) {
        placeholderArray = createWordPlaceholder(word);
        // Display letters and underscores 
    } else {
        placeholderArray = prevPlaceholderArray;
    }

    // Replace underscore with matching letter
    for (i = 0; i < word.length; i++) {
        if (userInput == word[i]) {
            console.log(userInput + "in word at" + i)
            placeholderArray[i] = userInput;
        }
    }
    prevPlaceholderArray = placeholderArray;

    // Convert placeholder array to string to display in UI
    placeholder = placeholderArray.join(" ");
    document.getElementById('word-placeholder').innerHTML = placeholder;

    if (placeholder == word.join(" ")) {
    	wins++;
        document.getElementById('win-count').innerHTML = wins;
        // Calls function to Restart game
        restartGame();     
    }
};

// Function to Restart/Reset game
function restartGame(wordPlaceholder) {
	
	// Add new word.
	createWord(wordArray);

	//Empty user input and placeholder values
    userInput = "";
	prevPlaceholderArray = [];
	placeholderArray = [];

	// Reset remaining guesses
	guessesLeft = 10;

	// Reset guess count
	correctGuessCount = 0;
	document.getElementById('guess-count').innerHTML = guessesLeft;

	// Reset list of letters guessed
	lettersGuessed = [];
	document.getElementById('letters-guessed').innerHTML = lettersGuessed;
};














