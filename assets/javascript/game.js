console.log("game.js is linked");

// ***************** GLOBAL VARIABLES ******************** //

//Array for alphabet.
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Store counters.
var winScore = 0;
var lossScore = 0;
var countDown = 10;

//Selects and stores random letter from "alphabet" array.
var cpuLetter = alphabet[Math.floor(Math.random() * 26)];

//Stores already-keyed letters by user during a single game.
var usedLetters = [];


//Event listener for keyed letters.
document.onkeyup = function(event) {

    // Captures the keypress, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
   
    //"stop" variable provides "on/off switch" to prevent duplicate entries.
    var stop = false;
    for (i = 0; i < usedLetters.length; i++) {
    	//Compares each keyed letter to the "usedLetters" array;
    	if (letter === usedLetters[i]) {
    		alert("You've already guessed that letter. Try a different one.");
    		//Causes following if statment to be skipped
    		stop = true;
    	} 
	 }

 	//If it is a unique keypress, run this.
    if (stop === false) {
    	//Stores keyed letters to "usedLetter" array.
		usedLetters = usedLetters + letter;
		//Writes keyed letter to ID in DOM.
    	document.getElementById("typed-letters").innerHTML += letter + ", ";
    	//Decrements "countDown" Variable.
    	countDown--;
    	//Writes "countDown" value to ID.
    	document.getElementById("remaining-guesses").innerHTML = countDown;

    }

    // Loss conditional
    if (countDown < 1) {
		//Inecrement "lossScore" variable.
    	lossScore++;
    	//Write lossCcore value to DOM.
    	document.getElementById("loss-score").innerHTML = lossScore;
    	//Reset "countDown" variable to 10.
    	countDown = 10;
    	//Write "countDown" variable to DOM.
    	document.getElementById("remaining-guesses").innerHTML = countDown;
    	//Reset "usedLetters" array.
    	usedLetters = [];
    	//Clear "typed-letters" ID by setting it to a blank space.
    	document.getElementById("typed-letters").innerHTML =" ";
    // Win conditional	
    } else if ( letter === cpuLetter ) {
    	//Increment "winScore" variable.
    	winScore++;
    	//Write "winScore" value  to DOM.
    	document.getElementById("win-score").innerHTML = winScore;
    	// Alert to user.
    	alert("You won! You must be Psychic! Who will win the Super Bowl next year? Just curious.");
    	//Reset "countDown" variable to 10.
    	countDown = 10;
    	//Write "countDown" variable to DOM ID.
    	document.getElementById("remaining-guesses").innerHTML = countDown;
    	//Reset "usedLetters" array.
    	usedLetters = [];
    	document.getElementById("typed-letters").innerHTML =" ";
    } 
	    
};