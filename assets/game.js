var guessLimit = 9;
var totalWins = 0;
var totalGuesses = 0;
var totalLosses = 0;
var totalGuessesLeft = 0;
var currentLetter = 0;
var gameHasStarted = false;
var newGame = true;

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var currentAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var listofGuesses = "";

  
function displayHead() {
    document.getElementById("header");     	
}

function displayGuessLetter() {
	document.getElementById("guessletter");     	
}

function displayWins() {
	document.getElementById("wins");    	
}  

function displayLosses() {
	document.getElementById("losses");      	
}

function displayGuessLeft() {
	document.getElementById("guessleft");   	
} 

function displayYourGuesses() {
	document.getElementById("yourguesses");	
}

function displayListOfGuesses(){
		document.getElementById("strOfGuesses").innerHTML = listofGuesses;	
}

function displayLossesChange(num) {	
	document.getElementById("numberOfLosses").innerHTML = Number(num);
}

function displayChangeInGuessesLeft(num) {
	document.getElementById("numberOfGuessesLeft").innerHTML = Number(num);
}

function UpdateGuessesLeft(){
	totalGuessesLeft--;
	document.getElementById("numberOfGuessesLeft").innerHTML = Number(totalGuessesLeft);
	if (totalGuessesLeft<=0){
	
		totalLosses++;
		displayLossesChange(totalLosses);
		
		startNewGame();
	}
}


function UpDateTotalWins(){
	
	totalWins++;
	document.getElementById("numberOfWins").innerHTML = Number(totalWins);
}



function getRandomLetter() {
 	currentAlphabet = alphabet;    
 	currentLetter = Math.floor(Math.random() * 25);
 	
}


function startTheGame() {

	totalWins = 0;
	totalLosses = 0;
	gameHasStarted = true;
	startNewGame();
}


function startNewGame() {

	if (gameHasStarted=== false){
		startTheGame();
	}
	else {
		newGame = false;
		maxNumberOfGuesses = guessLimit;
		totalGuesses = 0;
		totalGuessesLeft = 0;
		currentLetter = 0;
		listofGuesses = "";
	
		displayHead();
		displayGuessLetter();
		displayWins();
		displayLosses();
		displayGuessLeft();
		displayYourGuesses();
		displayListOfGuesses();	

		
		totalGuessesLeft = maxNumberOfGuesses;
		displayChangeInGuessesLeft(totalGuessesLeft);

		
		
		getRandomLetter(); 
		} 
}


var xInPutChar = "";
$(document).ready(function(){
	$(document).on("keyup", "body", function(e){
	console.log(e.key, e.keyCode, e.which);
	xInPutChar = String(e.key);
	xInPutChar = xInPutChar.toUpperCase();	
	checkResponse();});
});



function checkResponse(){
	
	if (gameHasStarted === false){
		startTheGame();
		} 

	if (xInPutChar===currentAlphabet[currentLetter]) {
		
		UpDateTotalWins();
		startNewGame();
		
		} else {
			
			var goodval = currentAlphabet.includes(xInPutChar);
			
			if (goodval===true){						
				
				if (listofGuesses.length===0){
				 	listofGuesses = xInPutChar;
				 	UpdateGuessesLeft();
				  } else {	
				  		var choiceAlreadyChoosen = listofGuesses.includes(xInPutChar);
				  		if (choiceAlreadyChoosen===false){
				  			var tmp = listofGuesses.concat(xInPutChar);
				  			listofGuesses = tmp;			 			
				 			UpdateGuessesLeft();
				 			}
				 		}
								
				
				displayListOfGuesses();
			}	
		
		} 
	xInPutChar=""; 
	}