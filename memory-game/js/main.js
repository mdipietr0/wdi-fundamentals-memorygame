console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function() {
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert('match');
		} else {
			alert('sorry, no match');
		}
	}
}

var flipCard = function(cardId){
	var card = cards[cardId];
	console.log(card);
	cardsInPlay.push(card);
	console.log('User flipped ' + card);
	checkForMatch();
}

flipCard(0);
flipCard(2);


