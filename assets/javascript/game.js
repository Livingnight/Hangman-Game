var game = {
    wins: 0,
    chancesLeft: 10,
    computerChoices:['hyrule', 'navi', 'ocarina', 'kokiri', 'epona'],
    userCheck: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"],
    alreadyGuessed:[],
    answer: [],
    underScore: [],

    gameStart: function(userGuess) {
        console.log("function start");


        // making sure the game doesn't pick a new word every time
        if (!this.computerGuess) {
            console.log("inside setting answer");
            // picking a random word from the word bank
            this.computerGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
            console.log(this.computerGuess);

            // do something the same amount of times as the length of the word to guess
            for (var i = 0; i < this.computerGuess.length; i++) {

                game.answer.push(this.computerGuess[i]);
                // console.log(game.answer);
                game.underScore.push("___ ");
            }
            console.log("this is the answer array: " + game.answer);
        }
            // debugger;
            console.log("i'm inside of user check boolean");
            console.log("this is game.answer.length: " + game.answer.length);
            for (var j = 0; j < game.answer.length; j++) {
                if (game.answer[j] === userGuess) {
                    console.log("inside for loop checking userguess against answer arr");
                    game.underScore[j] = userGuess;
                    console.log(game.underScore[j]);
                    console.log("this is the answer length: " + game.answer.length);
                    // game.answer.push(userGuess);

                }
            }

            // console.log("already guessed letters: " + game.alreadyGuessed);

            if (game.answer.indexOf(userGuess) === -1) {
                game.alreadyGuessed.push(userGuess);
                game.chancesLeft--;
                console.log(game.chancesLeft);
                console.log("this goes into already guessed : " + game.alreadyGuessed);
                if (game.chancesLeft === 0) {
                    game.answer = [];
                    game.underScore = [];
                    game.chancesLeft = 10;
                    this.computerGuess = undefined;
                    alert("You have been killed by the monster! Press any letter to try again")
                }
            }
            else if (game.underScore.indexOf("___ ") === -1) {
                game.wins++;
                game.answer = [];
                game.underScore = [];
                game.chancesLeft = 10;

                this.computerGuess = undefined;
                // document.onkeyup = game.underScore = [];

            }


            // console.log(game.answer);
            // console.log(game.underScore);
            //
            // console.log("this is answer");


            // if (game.answer.includes(userGuess)) {

            // }


            document.querySelector(".answer").innerHTML = game.underScore.join(" ");
            document.querySelector(".wins").textContent = game.wins;
            // document.querySelector(".lettersGuessed").textContent = game.alreadyGuessed;
            // document.querySelector(".guessesLeft").textContent = game.chancesLeft;
            // console.log(game.underScore.join(" "));
            // console.log(game.answer);

        }

};
    // };

document.onkeyup = function(){

    console.log("keyup");
    var userGuess = event.key.toLowerCase();
        console.log(userGuess);
        if (game.alreadyGuessed.includes(userGuess)){
            alert("You've already guessed that letter!")
        }
        else if (game.underScore.includes(userGuess)){
            alert("You've already guessed that letter!");
        }
        else if(game.userCheck.includes(userGuess)){
            game.gameStart(userGuess);
        }
        else{
            game.chancesLeft--;
            alert("You must choose a letter from the alphabet")
        }

    //      if (game.alreadyGuessed.includes(userGuess)){
    //     alert("You already guessed that letter!");
    // }
    // else if (game.computerChoices.includes(userGuess)){
    //     game.gameStart(userGuess);
    // }
    // else {
    //     alert("Must Choose a letter in the alphabet!")
    // }
};
