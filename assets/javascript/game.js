$(document).ready(function(){

    // word array
     let wordList     = [
        "why",
        "hour",
        "honor",
        "through",
        "exhausted"
    ];
    //answer, selected word
    let answer        = "";

    let answerLetters = [];

    let blankSpaces = [];

    //index of the selected word from the word array
    let answerIndex   = Math.floor((Math.random() * wordList.length));
    //console.log("answerIndex: " + answerIndex);

    //guess counter for corresponding images
    let guessCount    = 0;

    //letters guessed incorrectly
    let wrongLetters  = [];

    // player options A-Z for buttons
    let alphabet      = ["a", "b", "c", "d", "e", "f", "g",
         "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
         "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //a function to render random word from wordArray
    let renderWord    = function(){

        //set that random word to the "answer"
        answer = wordList[answerIndex];
        console.log("answer: " + answer);

        let answerCount = answer.split(" ");
         console.log("answer count: "+ answerCount);
        
        for(var i = 0; i < answer.length; i++){
            // console.log(answer[i]);
            answerLetters.push(" " + answer[i] + " ");
            // console.log("AL: "+ answerLetters);
            $("#wordDisplay").html(answerLetters);

            blankSpaces.push(" _ ")
            $('#blankDisplay').html(blankSpaces);
            // console.log(blankSpaces)
            
        }

        
    }

    renderWord();



    //player input on key
    document.onkeyup = function(event){
        let playerGuess = event.key.toLowerCase();
        console.log(`KEY: ${playerGuess}`);
    }

})


/*
    [x]have an array of words to chose from
    [x]select random word from array
    [x]split that selected word up letter by letter into it's own array
    []make each letter display dynamically in the word div
    []hide all letters in the word div, initially
    []get the count for how many letters the selected word has
    []make as many  " _ "'s display dynamically as the letter count

    []make onkey event to register user interaction
    []if player input is equal to any letter in the letter array, unhide that letter
    []if player input is not in letter array, increase guess count and display next img
    []if all letters in word are guessed, display victory image, countdown and then reset game
    []if guess count expires, display final image, countdown, and then reset game







    A random word from the word array is chosen.

    Take the letter count in that specific word and save it as a variable

    display a blank space for each letter in the chosen word

    when the player types a letter
        if the letter is right,
        replace the "_" with the letter
        if no more letters to guess, game resets

        if the letter is wrong,
        add that letter to the "wrong letters" and
        display next image

        if the player is wrong 6 times, 
        player loses
        game resets
*/





//Player INPUT. Will need to have an onkey event that connects to above correct/incorrect displays
//reveal player guesses (letters input) not in the word

// if letter guessed is correct, reveal the letter in the word box
// if Letter guessed incorrectly, display in incorrect guesses box
// if word is completed before guesses run out, display celebration image, restart with new word
// if guess count reaches zero, add 1 to Loss count, restart with new word

//First, need to display the number of letters in word as "_"'s
// find the word.length and make a for loop that would put "_" x times.

//Guesses remaining.
//Counter for number of guesses
//reset once counter reaches zero

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


