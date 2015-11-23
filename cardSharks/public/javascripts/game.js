//game.js
//game.js


function shuffleSymbols(symbols) {
	var doubleSymbols = [];
	var doubleSymbolIndex = 0;
	for(var i = 0; i < symbols.length; i++){
		doubleSymbols[doubleSymbolIndex] = symbols[i];
		doubleSymbols[doubleSymbolIndex + 1] = symbols[i];
		doubleSymbolIndex += 2
	}
	
	var cards = [];
	var cardIndex = 0;
	while(doubleSymbols.length > 0) {
		randPosition = Math.floor(Math.random()*doubleSymbols.length);
		var newCard = doubleSymbols[randPosition];
		console.log('newCard: ' + newCard);
		doubleSymbols.splice(randPosition, 1);
		cards[cardIndex] = newCard;
		//console.log('card[index]' + cards[cardIndex]);
		cardIndex++;
	}
	return cards;
}


function generateBoard(cards) {
	//var myDiv = document.createElement("div"); 
	var str = '';
	
	for(var i = 0; i < cards.length; i++){
		str += '<button class="floating-box">' + cards[i] + '</button>';
	}
	
	game.innerHTML = str;
	
	var hiddenElements = document.getElementsByClassName('floating-box');
	if(cards.length == 4)
		for(var i = 0; i < hiddenElements.length; i++) {
			hiddenElements[i].style.margin = '135px'; 
		}
}


function startClick(event) {
	console.log('clicked');
	var symbols = ['⛵', '⛳', '⚡', '☺', '☎', '☂', '☃', '☁'];
	var symbolsNeeded = [];
	var game = document.getElementById('game');
	var guesses = document.getElementById('guesses');
	var startForm = document.getElementById('startForm');
	var numSymbols = document.getElementById('numSymbols').value;
	if(numSymbols > 8) {
		numSymbols = 8;
	}
	for(var i = 0; i < numSymbols; i++) {
	  symbolsNeeded[i] = symbols[i];
	}
	
	console.log(numSymbols);
	game.removeChild(startForm);
	
	var guessTracker = document.createElement("P");
	var guessText = document.createTextNode("Number of Guesses: ");      
	guessTracker.appendChild(guessText);                                         
	guesses.appendChild(guessTracker); 
	
	var cards = shuffleSymbols(symbolsNeeded);
	generateBoard(cards);	
	var cardClicker = document.getElementsByClassName('floating-box');
	for(var i = 0; i < cardClicker.length; i++)  { 
		cardClicker[i].addEventListener('click', cardClick);
	}
}



function cardClick(event) {
	//console.log('clicked card');
	var numGuesses = 0;
	var numClicked = 1;
	var otherIndex = -1;
	var cardClicker = document.getElementsByClassName('floating-box');	
	for(var i = 0; i < cardClicker.length; i++) {
		if(cardClicker[i].style.fontSize == 'xx-large'){
			numClicked++;
			otherIndex = i;
		}
	
	}
	this.setAttribute("style", "font-size: xx-large; background-color: magenta");
	//console.log("num:" + numClicked);
	
	
	
	
	if(numClicked == 2){
		var guessCounter = document.getElementsByTagName('p')[0];
		var guessStr = guessCounter.textContent;
		var updateGuess = guessStr.substring(guessStr.length-1, guessStr.length);
		updateGuess = Number(updateGuess) + 1;
		console.log("Guesses: " + updateGuess);
		guessCounter.innerHTML = "Number of Guesses: " + updateGuess;
		
		if(this.textContent == cardClicker[otherIndex].textContent){
			console.log("matched");
			
			cardClicker[otherIndex].className = 'matched';
			this.className = 'matched';
			
			checkWin();
			
		}
		else {
			console.log("no match");
			this.setAttribute("style", "font-size: 0; background-color: #73AD21");
			cardClicker[otherIndex].setAttribute("style", "font-size: 0; background-color: #73AD21");
		}
			
	}	
}


function checkWin(){
	var cardClicker = document.getElementsByClassName('floating-box');
	if(cardClicker.length == 0){
		console.log("INN");
		var matched = document.getElementsByClassName('matched');
		for(var i = 0; i < matched.length; i++) {		
				matched[i].style.display = "none";	
		}
		var pWin = document.createElement("P");
	var winText = document.createTextNode("You Won!");      
	pWin.appendChild(winText);                                         
	guesses.appendChild(pWin);  
	}		
		
}

var startButton = document.getElementById('startButton');
	startButton.addEventListener('click', startClick);
