//game.js


var unshuffledDeck = createCards();

//console.log(cards[0]);


var deck = shuffle(unshuffledDeck);

var playerCards = dealCards(deck);
var compCards = dealCards(deck);

var playerMatches = 0;
var compMatches = 0;
var pGuide = document.getElementById("guide");
//console.log("sfdsfdsfs" + deck[0].image.src);
//console.log(playerCards[0].image.src);
//console.log(compCards[0].image.src);
//var game = document.getElementById("game");
var cardBacki = new Image();
cardBacki.src = "images/redBack.png";
var cardBack = {image: cardBacki};


function playerAsk(event){
	var pGuide = document.getElementById("guide");

	if(compCards.length == 0){
		compAsk();
	}
	var cardClick = document.getElementsByTagName('input');
	var isMatch = false;
	console.log("player asking!!!!");
	//pGuide.innerHTML = "Player: do you have a " + this.name + "?";
	for(var i = 0; i < compCards.length; i++){
		if(this.name === compCards[i].rank){
			isMatch = true;
			pGuide.innerHTML = "Comp: Yes, I have a " + this.name+" here you go! (still your turn)";
			playerCards.push(compCards[i]);
			compCards.splice(i,1);
			checkPairPlayer(playerCards);
			playerBoard(playerCards);
			compBoard(compCards);
			
		}
	}
	
	if(isMatch === false) {
		pGuide.innerHTML = "Go Fish! (you drew a card)";
		//pause(500);
		if(deck.length > 0){	
			if(deck[0].rank === this.name){ 
				pGuide.innerHTML = "You fished your wish! You get to have another turn!";
				drawCard(deck, playerCards);
				checkPairPlayer(playerCards);
				playerBoard(playerCards);
				compBoard(compCards);
				if(playerCards.length === 0){
					console.log("out of cards, need to draw");
					console.log("deck size " + deck.length);
					if(deck.length === 0){
						determineWinner(playerMatches, compMatches);
					}
					drawCard(deck, playerCards);
					playerBoard(playerCards);
					compBoard(compCards);
					for(var i = 0; i < cardClick.length; i++)  { 
						cardClick[i].addEventListener('click', playerAsk);
					}
				}
				for(var i = 0; i < cardClick.length; i++)  { 
				cardClick[i].addEventListener('click', playerAsk);
				}
			}	
			else {
				drawCard(deck, playerCards);
				checkPairPlayer(playerCards);
				console.log("new size" + deck.length);
				playerBoard(playerCards);
				compBoard(compCards);
				compAsk();
			}	
		}
		else{
			compAsk();
		}							
	}
	else{
		console.log("match!!");
		//console.log("player matches " + playerMatches);
		//console.log("comp matches " + compMatches);
		//var cardClick = document.getElementsByTagName('input');
		if(playerCards.length === 0){
			console.log("out of cards, need to draw");
			console.log("deck size " + deck.length);
			if(deck.length === 0){
				determineWinner(playerMatches, compMatches);
			}
			drawCard(deck, playerCards);
			playerBoard(playerCards);
			compBoard(compCards);
			for(var i = 0; i < cardClick.length; i++)  { 
				cardClick[i].addEventListener('click', playerAsk);
			}
		}
		for(var i = 0; i < cardClick.length; i++)  { 
			cardClick[i].addEventListener('click', playerAsk);
		}
	}
}
function compAsk() {
	var pGuide = document.getElementById("guide");
	var message = "";

	console.log("Comp Ask!!!");
	var cardClick = document.getElementsByTagName('input');
	if(playerCards.length === 0){
		for(var i = 0; i < cardClick.length; i++)  { 
			cardClick[i].addEventListener('click', playerAsk);
		}
	}
	var handPos = Math.floor(Math.random()*compCards.length);
	
	//console.log("pos: " + handPos +" card: " + compCards[handPos].rank);
		var isMatch = false;
		for(var i = 0; i < playerCards.length; i++){
			if(compCards.length > 0 && handPos > compCards.length-1){
				handPos--;
			}
			//console.log("hand pos: "+ handPos);
			//console.log("rand: "+ compCards[handPos].rank);
			//console.log("playerHand: "+playerCards[i].rank);
		if(compCards.length > 0){
			if(compCards[handPos].rank === playerCards[i].rank){
				isMatch = true;
				message += pGuide.innerHTML = "Computer asks for your "  +compCards[handPos].rank+" (You hand it over)\n";

				//console.log("compMatches: "+ compMatches);
				compCards.push(playerCards[i]);
				playerCards.splice(i,1);
				checkPairComp(compCards);
				playerBoard(playerCards);
				compBoard(compCards);
				//pause(500);
			}
		}
	   }
	if(isMatch === false) {
		message += pGuide.innerHTML = "Comp's Turn: Computer asks for a "  +compCards[handPos].rank+" ...Go Fish! (your turn again)\n";

		if(deck.length > 0){
			if(deck[0].rank === compCards[handPos].rank){ 
				message += pGuide.innerHTML = "Computer fished its wish! it goes again!\n";	
				//pause(500);
				drawCard(deck, compCards);
				checkPairComp(compCards);
				playerBoard(playerCards);
				compBoard(compCards);
				if(compCards.length === 0){
					message += "out of cards, need to draw\n";
					console.log("deck size " + deck.length);
					if(deck.length === 0){
						determineWinner(playerMatches, compMatches);
					}
					drawCard(deck, compCards);
					playerBoard(playerCards);
					compBoard(compCards);
					compAsk();
				}
				compAsk();
			}
			else {
				drawCard(deck, compCards);
				checkPairComp(compCards);		
				console.log("new size" + deck.length);
				playerBoard(playerCards);
				compBoard(compCards);
				for(var i = 0; i < cardClick.length; i++)  { 
					cardClick[i].addEventListener('click', playerAsk);
				}
			}
		}
		else {
			for(var i = 0; i < cardClick.length; i++)  { 
				cardClick[i].addEventListener('click', playerAsk);
			}
		}
	}
	else{
		console.log("match!");
		if(compCards.length === 0){
			message += "out of cards, need to draw\n";
			console.log("deck size " + deck.length);
			if(deck.length === 0){
				determineWinner(playerMatches, compMatches);
			}
			drawCard(deck, compCards);
			playerBoard(playerCards);
			compBoard(compCards);
			compAsk();
		}
		compAsk();
	}
}

function checkPairPlayer(hand) {
	//pause(1000);
	console.log("checking!");
	var pPlayerMatch = document.getElementById('playerMatchCount');
	for(var i = 0; i < hand.length; i++){
		for(var j = i+1; j < hand.length; j++){
		if(hand[i].rank === hand[j].rank){
		console.log("found a match between: " + hand[i].rank + " and " + hand[j].rank + " at pos: " + i+ " and " +j);
		console.log("first splice " +hand[i].rank);
		hand.splice(i, 1);
		console.log("second splice " +hand[j-1].rank);
		hand.splice(j-1, 1);
		playerMatches++;
		pPlayerMatch.innerHTML = "Player Score: " + playerMatches;
		
		}
		}
	}
}

function checkPairComp(hand) {
	//pause(1000);
	console.log("checking!");
	var pCompMatch = document.getElementById('compMatchCount');

	for(var i = 0; i < hand.length; i++){
		for(var j = i+1; j < hand.length; j++){
		if(hand[i].rank === hand[j].rank){
		console.log("found a match between: " + hand[i].rank + " and " + hand[j].rank + " at pos: " + i+ " and " +j);
		console.log("first splice " +hand[i].rank);
		hand.splice(i, 1);
		console.log("second splice " +hand[j-1].rank);
		hand.splice(j-1, 1);
		compMatches++;
		pCompMatch.innerHTML = "Comp Score: " + compMatches;

		
		}
		}
	}
}

function createCards() {
	var cards = [];
	var cardsIndex = 0;
	
	var Aci = new Image();
	Aci.src = "images/Ac.png";
	var Ac = {rank: 'A', image: Aci};
	cards[cardsIndex] = Ac;
	cardsIndex++;
	
	var Asi = new Image();
	Asi.src = "images/As.png";
	var As = {rank: 'A', image: Asi};
	cards[cardsIndex] = As;
	cardsIndex++;
	
	var cardAhi = new Image();
	cardAhi.src = "images/Ah.png";
	var cardAh = {rank: 'A', image: cardAhi};
	cards[cardsIndex] = cardAh;
	cardsIndex++;
	
	var cardAdi = new Image();
	cardAdi.src = "images/Ad.png";
	var cardAd = {rank: 'A', image: cardAdi};
	cards[cardsIndex] = cardAd;
	cardsIndex++;
	
	var card2ci = new Image();
	card2ci.src = "images/2c.png";
	var card2c = {rank: '2', image: card2ci};
	cards[cardsIndex] = card2c;
	cardsIndex++;
	
	var card2si = new Image();
	card2si.src = "images/2s.png";
	var card2s = {rank: '2', image: card2si};
	cards[cardsIndex] = card2s;
	cardsIndex++;
	
	var card2hi = new Image();
	card2hi.src = "images/2h.png";
	var card2h = {rank: '2', image: card2hi};
	cards[cardsIndex] = card2h;
	cardsIndex++;
	
	var card2di = new Image();
	card2di.src = "images/2d.png";
	var card2d = {rank: '2', image: card2di};
	cards[cardsIndex] = card2d;
	cardsIndex++;
	
	var card3ci = new Image();
	card3ci.src = "images/3c.png";
	var card3c = {rank: '3', image: card3ci};
	cards[cardsIndex] = card3c;
	cardsIndex++;
	
	var card3si = new Image();
	card3si.src = "images/3s.png";
	var card3s = {rank: '3', image: card3si};
	cards[cardsIndex] = card3s;
	cardsIndex++;
	
	var card3hi = new Image();
	card3hi.src = "images/3h.png";
	var card3h = {rank: '3', image: card3hi};
	cards[cardsIndex] = card3h;
	cardsIndex++;
	
	var card3di = new Image();
	card3di.src = "images/3d.png";
	var card3d = {rank: '3', image: card3di};
	cards[cardsIndex] = card3d;
	cardsIndex++;
	
	var card4ci = new Image();
	card4ci.src = "images/4c.png";
	var card4c = {rank: '4', image: card4ci};
	cards[cardsIndex] = card4c;
	cardsIndex++;
	
	var card4si = new Image();
	card4si.src = "images/4s.png";
	var card4s = {rank: '4', image: card4si};
	cards[cardsIndex] = card4s;
	cardsIndex++;
	
	var card4hi = new Image();
	card4hi.src = "images/4h.png";
	var card4h = {rank: '4', image: card4hi};
	cards[cardsIndex] = card4h;
	cardsIndex++;
	
	var card4di = new Image();
	card4di.src = "images/4d.png";
	var card4d = {rank: '4', image: card4di};
	cards[cardsIndex] = card4d;
	cardsIndex++;
	
	var card5ci = new Image();
	card5ci.src = "images/5c.png";
	var card5c = {rank: '5', image: card5ci};
	cards[cardsIndex] = card5c;
	cardsIndex++;
	
	var card5si = new Image();
	card5si.src = "images/5s.png";
	var card5s = {rank: '5', image: card5si};
	cards[cardsIndex] = card5s;
	cardsIndex++;
	
	var card5hi = new Image();
	card5hi.src = "images/5h.png";
	var card5h = {rank: '5', image: card5hi};
	cards[cardsIndex] = card5h;
	cardsIndex++;
	
	var card5di = new Image();
	card5di.src = "images/5d.png";
	var card5d = {rank: '5', image: card5di};
	cards[cardsIndex] = card5d;
	cardsIndex++;
	
	var card6ci = new Image();
	card6ci.src = "images/6c.png";
	var card6c = {rank: '6', image: card6ci};
	cards[cardsIndex] = card6c;
	cardsIndex++;
	
	var card6si = new Image();
	card6si.src = "images/6s.png";
	var card6s = {rank: '6', image: card6si};
	cards[cardsIndex] = card6s;
	cardsIndex++;
	
	var card6hi = new Image();
	card6hi.src = "images/6h.png";
	var card6h = {rank: '6', image: card6hi};
	cards[cardsIndex] = card6h;
	cardsIndex++;
	
	var card6di = new Image();
	card6di.src = "images/6d.png";
	var card6d = {rank: '6', image: card6di};
	cards[cardsIndex] = card6d;
	cardsIndex++;
	
	var card7ci = new Image();
	card7ci.src = "images/7c.png";
	var card7c = {rank: '7', image: card7ci};
	cards[cardsIndex] = card7c;
	cardsIndex++;
	
	var card7si = new Image();
	card7si.src = "images/7s.png";
	var card7s = {rank: '7', image: card7si};
	cards[cardsIndex] = card7s;
	cardsIndex++;
	
	var card7hi = new Image();
	card7hi.src = "images/7h.png";
	var card7h = {rank: '7', image: card7hi};
	cards[cardsIndex] = card7h;
	cardsIndex++;
	
	var card7di = new Image();
	card7di.src = "images/7d.png";
	var card7d = {rank: '7', image: card7di};
	cards[cardsIndex] = card7d;
	cardsIndex++;
	
	var card8ci = new Image();
	card8ci.src = "images/8c.png";
	var card8c = {rank: '8', image: card8ci};
	cards[cardsIndex] = card8c;
	cardsIndex++;
	
	var card8si = new Image();
	card8si.src = "images/8s.png";
	var card8s = {rank: '8', image: card8si};
	cards[cardsIndex] = card8s;
	cardsIndex++;
	
	var card8hi = new Image();
	card8hi.src = "images/8h.png";
	var card8h = {rank: '8', image: card8hi};
	cards[cardsIndex] = card8h;
	cardsIndex++;
	
	var card8di = new Image();
	card8di.src = "images/8d.png";
	var card8d = {rank: '8', image: card8di};
	cards[cardsIndex] = card8d;
	cardsIndex++;
	
	var card9ci = new Image();
	card9ci.src = "images/9c.png";
	var card9c = {rank: '9', image: card9ci};
	cards[cardsIndex] = card9c;
	cardsIndex++;
	
	var card9si = new Image();
	card9si.src = "images/9s.png";
	var card9s = {rank: '9', image: card9si};
	cards[cardsIndex] = card9s;
	cardsIndex++;
	
	var card9hi = new Image();
	card9hi.src = "images/9h.png";
	var card9h = {rank: '9', image: card9hi};
	cards[cardsIndex] = card9h;
	cardsIndex++;
	
	var card9di = new Image();
	card9di.src = "images/9d.png";
	var card9d = {rank: '9', image: card9di};
	cards[cardsIndex] = card9d;
	cardsIndex++;
	
	var card10ci = new Image();
	card10ci.src = "images/10c.png";
	var card10c = {rank: '10', image: card10ci};
	cards[cardsIndex] = card10c;
	cardsIndex++;
	
	var card10si = new Image();
	card10si.src = "images/10s.png";
	var card10s = {rank: '10', image: card10si};
	cards[cardsIndex] = card10s;
	cardsIndex++;
	
	var card10hi = new Image();
	card10hi.src = "images/10h.png";
	var card10h = {rank: '10', image: card10hi};
	cards[cardsIndex] = card10h;
	cardsIndex++;
	
	var card10di = new Image();
	card10di.src = "images/10d.png";
	var card10d = {rank: '10', image: card10di};
	cards[cardsIndex] = card10d;
	cardsIndex++;
	
	var cardJci = new Image();
	cardJci.src = "images/Jc.png";
	var cardJc = {rank: 'J', image: cardJci};
	cards[cardsIndex] = cardJc;
	cardsIndex++;
	
	var cardJsi = new Image();
	cardJsi.src = "images/Js.png";
	var cardJs = {rank: 'J', image: cardJsi};
	cards[cardsIndex] = cardJs;
	cardsIndex++;
	
	var cardJhi = new Image();
	cardJhi.src = "images/Jh.png";
	var cardJh = {rank: 'J', image: cardJhi};
	cards[cardsIndex] = cardJh;
	cardsIndex++;
	
	var cardJdi = new Image();
	cardJdi.src = "images/Jd.png";
	var cardJd = {rank: 'J', image: cardJdi};
	cards[cardsIndex] = cardJd;
	cardsIndex++;
	
	var cardQci = new Image();
	cardQci.src = "images/Qc.png";
	var cardQc = {rank: 'Q', image: cardQci};
	cards[cardsIndex] = cardQc;
	cardsIndex++;
	
	var cardQsi = new Image();
	cardQsi.src = "images/Qs.png";
	var cardQs = {rank: 'Q', image: cardQsi};
	cards[cardsIndex] = cardQs;
	cardsIndex++;
	
	var cardQhi = new Image();
	cardQhi.src = "images/Qh.png";
	var cardQh = {rank: 'Q', image: cardQhi};
	cards[cardsIndex] = cardQh;
	cardsIndex++;
	
	var cardQdi = new Image();
	cardQdi.src = "images/Qd.png";
	var cardQd = {rank: 'Q', image: cardQdi};
	cards[cardsIndex] = cardQd;
	cardsIndex++;
	
	var Kci = new Image();
	Kci.src = "images/Kc.png";
	var Kc = {rank: 'K', image: Kci};
	cards[cardsIndex] = Kc;
	cardsIndex++;
	
	var cardKsi = new Image();
	cardKsi.src = "images/Ks.png";
	var cardKs = {rank: 'K', image: cardKsi};
	cards[cardsIndex] = cardKs;
	cardsIndex++;
	
	var cardKhi = new Image();
	cardKhi.src = "images/Kc.png";
	var cardKh = {rank: 'K', image: cardKhi};
	cards[cardsIndex] = cardKh;
	cardsIndex++;
	
	var cardKdi = new Image();
	cardKdi.src = "images/Kd.png";
	var cardKd = {rank: 'K', image: cardKdi};
	cards[cardsIndex] = cardKd;
	cardsIndex++;
	

	
	return cards;
}
	

function shuffle(cards) {
	var cards2 = [];
	var cardsIndex2 = 0;
	while(cards.length > 0) {
		randPosition = Math.floor(Math.random()*cards.length);
		var newCard = cards[(randPosition)];
		
		cards.splice(randPosition, 1);
		cards2[cardsIndex2] = newCard;
		cardsIndex2++;
	}
	return cards2;
}

function dealCards(cards) {
	var playerCards = []; 
	for(var i = 0; i < 5; i++) {
		
		var playerCard = cards[i];
		
		playerCards[i] = playerCard;
		console.log(playerCards[i]);
		cards.splice(i,1);
		
	}
	return playerCards;
	//console.log("players hand: " + playerCards);
	//console.log("computers hand: " + computerCards); 
}



function drawCard(cards, hand){
	//pause(1000);

	if (cards.length > 0){
		hand.push(cards[0]);
		cards.splice(0,1);
	}
}



function playerBoard(cards) {
	var playerBoard = document.getElementById("playerBoard");
	var str = '';
	
	for(var i = 0; i < cards.length; i++){
		str += '<input name="' + cards[i].rank + '" src="' + cards[i].image.src + '" type="image"  />';
		//str += '<img src="' + cards[i].image.src + '"> </img>';
		//console.log(cards[i].image.src);
	}
	
	playerBoard.innerHTML = str;

}

function compBoard(cards) {
	var compBoard = document.getElementById("compBoard");
	var str = '';
	
	for(var i = 0; i < cards.length; i++){
		//str += '<input src="' + cardBack.image.src + '" type="image"  />';
		str += '<img src="' + cardBack.image.src + '"> </img>';
		//console.log(cards[i].image.src);
	}
	
	compBoard.innerHTML = str;

}
function determineWinner(playerMatches, compMatches) {
	console.log("determining winner");
	console.log("drumroll please!!!!");
	console.log("player match total: " + playerMatches);
	console.log("computer match total" + compMatches);
	if(playerMatches > compMatches){
		console.log("You Win!");
		window.location.href = '/win';

	}
	else{
		console.log("you Lose!");
			window.location.href = '/lose';

	}
}
function pause(millis)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}
//generateBoard(deck);
playerBoard(playerCards);
compBoard(compCards);
checkPairPlayer(playerCards);
checkPairComp(compCards);
checkPairPlayer(playerCards);
checkPairComp(compCards);
playerBoard(playerCards);
compBoard(compCards);

var cardClick = document.getElementsByTagName('input');
	for(var i = 0; i < cardClick.length; i++)  { 
		cardClick[i].addEventListener('click', playerAsk);
	}