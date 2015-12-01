//game.js
//game.js

var cards = createCards();
var playerCards = [];
var compCards = [];


function startClick(event){
var Aci = new Image();
Aci.src = "../images/Ac.png";
var Ac = {rank: 'A', image: Aci};

var game = document.getElementById("game");
game.appendChild(Aci);

}

function createCards() {
	var cards = [];
	var cardsIndex = [];
	
	var Aci = new Image();
	Aci.src = "../images/Ac.png";
	var Ac = {rank: 'A', image: Aci};
	cards[cardsIndex] = Ac;
	cardIndex++;
	
	var Asi = new Image();
	Asi.src = "../images/Asi.png";
	var As = {rank: 'A', image: Asi};
	cards[cardsIndex] = As;
	cardIndex++;
	
	var Ahi = new Image();
	Ahi.src = "../images/Ah.png";
	var Ah = {rank: 'A', image: Ahi};
	cards[cardsIndex] = Ah;
	cardIndex++;
	
	var Adi = new Image();
	Adi.src = "../images/Ad.png";
	var Ac = {rank: 'A', image: Adi};
	cards[cardsIndex] = Ad;
	cardIndex++;
	
	var 2ci = new Image();
	2ci.src = "../images/2c.png";
	var 2c = {rank: '2', image: 2ci};
	cards[cardsIndex] = 2c;
	cardIndex++;
	
	var 2si = new Image();
	2si.src = "../images/2s.png";
	var 2s = {rank: '2', image: 2si};
	cards[cardsIndex] = 2s;
	cardIndex++;
	
	var 2hi = new Image();
	2hi.src = "../images/2h.png";
	var 2h = {rank: '2', image: 2hi};
	cards[cardsIndex] = 2h;
	cardIndex++;
	
	var 2di = new Image();
	2di.src = "../images/2d.png";
	var 2d = {rank: '2', image: 2di};
	cards[cardsIndex] = 2d;
	cardIndex++;
	
	var 3ci = new Image();
	3ci.src = "../images/3c.png";
	var 3c = {rank: '3', image: 3ci};
	cards[cardsIndex] = 3c;
	cardIndex++;
	
	var 3si = new Image();
	3si.src = "../images/3s.png";
	var 3s = {rank: '3', image: 3si};
	cards[cardsIndex] = 3s;
	cardIndex++;
	
	var 3hi = new Image();
	3hi.src = "../images/3h.png";
	var 3h = {rank: '3', image: 3hi};
	cards[cardsIndex] = 3h;
	cardIndex++;
	
	var 3di = new Image();
	3di.src = "../images/3d.png";
	var 3d = {rank: '3', image: 3di};
	cards[cardsIndex] = 3d;
	cardIndex++;
	
	var 4ci = new Image();
	4ci.src = "../images/4c.png";
	var 4c = {rank: '4', image: 4ci};
	cards[cardsIndex] = 4c;
	cardIndex++;
	
	var 4si = new Image();
	4si.src = "../images/4s.png";
	var 4s = {rank: '4', image: 4si};
	cards[cardsIndex] = 4s;
	cardIndex++;
	
	var 4hi = new Image();
	4hi.src = "../images/4h.png";
	var 4h = {rank: '4', image: 4hi};
	cards[cardsIndex] = 4h;
	cardIndex++;
	
	var 4di = new Image();
	4di.src = "../images/4d.png";
	var 4d = {rank: '4', image: 4di};
	cards[cardsIndex] = 4d;
	cardIndex++;
	
	var 5ci = new Image();
	5ci.src = "../images/5c.png";
	var 5c = {rank: '5', image: 5ci};
	cards[cardsIndex] = 5c;
	cardIndex++;
	
	var 5si = new Image();
	5si.src = "../images/5s.png";
	var 5s = {rank: '5', image: 5si};
	cards[cardsIndex] = 5s;
	cardIndex++;
	
	var 5hi = new Image();
	5hi.src = "../images/5h.png";
	var 5h = {rank: '5', image: 5hi};
	cards[cardsIndex] = 5h;
	cardIndex++;
	
	var 5di = new Image();
	5di.src = "../images/5d.png";
	var 5d = {rank: '5', image: 5di};
	cards[cardsIndex] = 5d;
	cardIndex++;
	
	var 6ci = new Image();
	6ci.src = "../images/6c.png";
	var 6c = {rank: '6', image: 6ci};
	cards[cardsIndex] = 6c;
	cardIndex++;
	
	var 6si = new Image();
	6si.src = "../images/6s.png";
	var 6s = {rank: '6', image: 6si};
	cards[cardsIndex] = 6s;
	cardIndex++;
	
	var 6hi = new Image();
	6hi.src = "../images/6h.png";
	var 6h = {rank: '6', image: 6hi};
	cards[cardsIndex] = 6h;
	cardIndex++;
	
	var 6di = new Image();
	6di.src = "../images/6d.png";
	var 6d = {rank: '6', image: 6di};
	cards[cardsIndex] = 6d;
	cardIndex++;
	
	var 7ci = new Image();
	7ci.src = "../images/7c.png";
	var 7c = {rank: '7', image: 7ci};
	cards[cardsIndex] = 7c;
	cardIndex++;
	
	var 7si = new Image();
	7si.src = "../images/7s.png";
	var 7s = {rank: '7', image: 7si};
	cards[cardsIndex] = 7s;
	cardIndex++;
	
	var 7hi = new Image();
	7hi.src = "../images/7h.png";
	var 7h = {rank: '7', image: 7hi};
	cards[cardsIndex] = 7h;
	cardIndex++;
	
	var 7di = new Image();
	7di.src = "../images/7d.png";
	var 7d = {rank: '7', image: 7di};
	cards[cardsIndex] = 7d;
	cardIndex++;
	
	var 8ci = new Image();
	8ci.src = "../images/8c.png";
	var 8c = {rank: '8', image: 8ci};
	cards[cardsIndex] = 8c;
	cardIndex++;

}


function shuffle(cards) {
	var cards2 = [];
	var cardIndex2 = 0;
	while(cards.length > 0) {
		randPosition = Math.floor(Math.random()*cards.length);
		var newCard = cards[(randPosition)];
		console.log('newCard: ' + newCard);
		cards.splice(randPosition, 1);
		cards2[cardIndex2] = newCard;
		cardIndex2++;
	}
	return cards2;
}

function dealCards(cards, playerCards, compCards) {
	for(var i = 0; i < 10; i++) {
		var playerCard = cards[i];
		var compCard = cards[i+1];
		playerCards[i] = playerCard;
		compCards[i] = compCard;
		cards.splice(i,2);
		
	}
	console.log("players hand: " + playerCards);
	console.log("computers hand: " + computerCards); 
}

var startButton = document.getElementById('startButton');
	startButton.addEventListener('click', startClick);
/*
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
		//console.log('newCard: ' + newCard);
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
*/