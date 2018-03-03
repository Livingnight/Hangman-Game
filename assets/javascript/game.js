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
                // var space = this.computerGuess.indexOf(" ");

                game.answer.push(this.computerGuess[i]);

                console.log(game.answer);
                game.underScore.push("___ ");
            }
        }

        if (game.userCheck.includes(userGuess)){
            // debugger;
            console.log("i'm inside of user check boolean");
            for ( var j = 0; j < game.answer.length; j++){
                if (game.answer[j] === userGuess){
                    console.log("inside for loop checking userguess against answer arr");
                    game.underScore[j] = userGuess;
                    console.log(game.underScore[j]);
                    // game.underScore.push(userGuess);

                    }


                }
            if(game.answer.indexOf("___ ") === -1){
                game.wins++;
            }
            }


        console.log(game.answer);
        console.log(game.underScore);

        console.log("this is answer");



        // if (game.answer.includes(userGuess)) {

        // }


        document.querySelector(".answer").innerHTML = game.underScore.join(" ");
        document.querySelector(".wins").textContent = game.wins;
        console.log(game.underScore.join(" "));
        console.log(game.answer);

    }
};
    // };

document.onkeyup = function(){

    console.log("keyup");
    var userGuess = event.key.toLowerCase();
        console.log(userGuess);
        game.gameStart(userGuess);

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
