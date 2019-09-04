$(document).ready(function(){

    // word array
     let wordsToGuess = [
        "why",
        "hour"
    ]

    // player options A-Z
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //guess counter for corresponding images
    let guessesLeft = 0;

    //letters guessed incorrectly
    let wrongGuesses = [];

    //player input on key
    document.onkeyup = function(event){
        let playerGuess = event.key.toLowerCase();
        console.log(`KEY: ${playerGuess}`);
    }

    //render each word from wordArray
    let renderWord = function(){
        for(var i = 0; i < wordsToGuess.length; i++){
            console.log(wordsToGuess[i]);
        }

        
        $("#wordDisplay").html(wordsToGuess[i]);
    }

    renderWord();



})

//Player INPUT. Will need to have an onkey event that connects to above correct/incorrect displays
//reveal player guesses (letters input) not in the word


// if letter guessed is correct, reveal the letter in the word box
// if Letter guessed incorrectly, display in incorrect guesses box
// if word is completed before guesses run out, display celebration image, restart with new word
// if guess count reaches zero, add 1 to Loss count, restart with new word



//First, need to display the number of letters in word as "_"'s

//Guesses remaining.
//Counter for number of guesses
//reset once counter reaches zero

//Win Count, shows how many words have been guessed correctly
//Loss Count, shows how many words have NOT been guessed

//Game reset
//when word is completely guessed
// or IF word is not guessed in time




//~~~~~~~~~words to use ~~~~~~~~~~~~
// why

// hour
// heir
// what
// when
// hola

// ghost
// ghoul
// rhyme
// honor

// honest
// chorus
// rhythm
// light

// rhubarb
// through


// exhausted


