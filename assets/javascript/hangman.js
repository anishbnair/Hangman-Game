// Pseudo Code
// ===============================================================================
// Create an array with list of words
// Computer selects a random word from the array
// Create a placeholder array to store random selected word by adding underscores corresponding to the number of letters in the word
// Track user guessed letters
// Replace underscore with each letter if user guess it correctly. If not, move it under already guessed letters
// Compare the words
// If both words are equal, user wins and Restart game


// VARIABLES
// =================================================================================
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
};

// Array of Coutry words created from object.
var wordArray = [countryWords.word1, countryWords.word2, countryWords.word3, countryWords.word4];
console.log(wordArray);

// Calls the function to select a random word to initialize the game
createWord(wordArray);

// Converts user guessed letter into uppercase 
document.onkeyup = function (event) {
    if (typeof event != 'undefined') {
        var keyPress;    
     keyPress = event.keyCode;
        // Convert user input key to upper case string.
    userInput = String.fromCharCode(keyPress).toUpperCase();
    //userInput = event.key.toUpperCase();
    console.log('This is the key entered', userInput);

    // Calls function to track user guesses
    trackLetterGuesses(userInput);

    // Build hangman word based on new user input.
        buildWord(userInput);
    };

};

// FUNCTIONS
//================================================================================================
// Function to select random word from the array
function createWord(wordArray) {
    word = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(word);
    //Create placeholder for word in UI
    createWordPlaceholder(word);
    return word;
};
//createWord(wordArray);

// Function to create placeholder array with underscores corresponding to the length of the randomly selected word 
function createWordPlaceholder(word) {
    var wordPlaceholder = [];
    //Replace placeholder array with underscore corresponding to each letter of the word
    for (i = 0; i < word.length; i++) {
        wordPlaceholder.push("_");
    };
    console.log(wordPlaceholder);

    // Join the underscores together and display as a string 
    wordPlaceholderString = wordPlaceholder.join(" ");
    console.log(wordPlaceholderString);

    // Display undescores in UI correspoding to the length of the randonnly selected word 
    document.getElementById("word-placeholder").textContent = wordPlaceholderString;
    return wordPlaceholder;
};
//createWordPlaceholder(word);

// Function to track user guesses 
function trackLetterGuesses(userInput) {

    for (i = 0; i < lettersGuessed.length; i++) {
        //console.log(lettersGuessed.length);
        if (userInput == lettersGuessed[i]) {
            //console.log(userInput);
            //console.log(lettersGuessed[i]);
            return;
        }
        //console.log(userInput);
    }
    //console.log(userInput);
    // Push the letters guessed to the array
    lettersGuessed.push(userInput);
    console.log("LettersGuessed array item: " + lettersGuessed[i]);

    // Convert letters guessed array to string for displaying in UI
    var lettersGuessedString = lettersGuessed.join(", ");
    document.getElementById('letters-guessed').innerHTML = lettersGuessedString;

    // Reduce number of guesses left for each guessed letter
    guessesLeft--;

    // Display number of guesses left in UI
    document.getElementById('guess-count').innerHTML = guessesLeft;
    console.log('Guesses left', + guessesLeft);

    // Restart game of no guesses left
    if (guessesLeft == 0) {
        //Restart Game - to be coded 
    }
    return lettersGuessedString;
};

// Function to update array as user guesses correct leters 
function buildWord(userInput) {

    // Initialize placeholder array with underscore array
    if (prevPlaceholderArray.length == 0) {
        placeholderArray = createWordPlaceholder(word);
        console.log("Placeholder array content is " + placeholderArray);
        // Display letters and underscores 
    } else {
        placeholderArray = prevPlaceholderArray;
        console.log("Placehokder array content is " + placeholderArray);
    }
    console.log("Placehokder array content is " + placeholderArray);

    // // Replace underscore with matching letter
    for (i = 0; i < word.length; i++) {
        if (userInput == word[i]) {
            console.log(userInput + "in word at" + i)
            placeholderArray[i] = userInput;
        }
    }
    prevPlaceholderArray = placeholderArray;
    //console.log(placeholderArray);
    //console.log(prevPlaceholderArray);

    // // Convert placeholder array to string to display in UI
    placeholder = placeholderArray.join(" ");
    console.log(placeholder);
    document.getElementById('word-placeholder').innerHTML = placeholder;

    console.log("Placeholder Array length is " + placeholderArray.length);
    console.log("Placeholder split is " + placeholder.split(","));
    console.log("Word join is " + word.join(" "));

    // User wins when placeholder matches word.
    if (placeholder.split(',') == word.join(" ")) {
    	wins++;
    	document.getElementById('win-count').innerHTML = wins;
        // Restart Game - to be coded
      
    }
};












