$(document).ready(function(){

    // [x]have an array of words to chose from
    let words         = ["why", "hour", "honor", "through", "exhausted"];
    //console.log("words array: " + words)
    
    // index of word selected from the word array randomly
    let wordsIndex    = Math.floor((Math.random() * words.length));
    // console.log("wordsIndex: " + wordsIndex);

    // [x]select random word from array
    // set that random word to the "answer"
    let answer        = words[wordsIndex];
    // console.log("answer: " + answer);

    // array of letters in selected word
    let answerLetters = [];

    // array for the _ blanks
    let blanks        = [];

    // [x]split that selected word up letter by letter into it's own array
    //let answerSplit = answer.split(" ");

    // guess counter for corresponding images
    let guessCount    = 0;

    // letters guessed incorrectly
    let wrongLetters  = [];

    // A-Z for player buttons
    let alphabet      = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // a function to render random word from words
    let renderWord    = function(){
        
        //console.log("answer split: "+ answerSplit);
        // answerLetters.push(answerSplit);
        // console.log(answerLetters);

        // answerLetters = answer.split(" ");
        // console.log("aL: " + answerLetters);

        // [x]make each letter display dynamically in the word div
        for(var i = 0; i < answer.length; i++){
             console.log(answer[i]);
            answerLetters.push(answer[i]);
             console.log("AL:I "+ answerLetters[i] + ": " + i);
            $("#wordDisplay").html(answer);

        // [x]make as many  " _ "'s display dynamically as the letter count
            blanks.push("_ ")
            $('#blankDisplay').html(blanks);
            // console.log(blanks)
            
        }

        // [x]hide all letters in the word div, initially
        // hide the selected answer 
        // $("#wordDisplay").hide();
    }

    renderWord();


    // [x]make onkey event to register user interaction
    // player input on key
    document.onkeyup = function(event){
        let playerGuess = event.key.toLowerCase();
        console.log(`KEY: ${playerGuess}`);


         for(var j = 0; j < answer.length; j++){

            if (playerGuess === answerLetters[j]){
                console.log(`correct! G: ${playerGuess} j=${[j]}`);
            }

        //     if (playerGuess === answerSplit[j]) {
        //         // answerSplit[j] === blanks[j];
        //         console.log("you guessed a letter");
                
        //     } else {
        //         console.log("wrong letter");
                    //push to wrong letters div
        //     };

         }

    }

})


/*
    []get the count for how many letters the selected word has
        
    []if player input is equal to any letter in the letter array, unhide that letter
    []if player input is not in letter array, increase guess count and display next img
    []if all letters in word are guessed, display victory image, countdown and then reset game
    []if guess count expires, display final image, countdown, and then reset game


    Take the letter count in that specific word and save it as a variable

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

// if word is completed before guesses run out, display celebration image, restart with new word

//Guesses remaining.
//Counter for number of guesses
//reset once counter reaches zero

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


