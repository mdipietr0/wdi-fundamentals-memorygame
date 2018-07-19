console.log("Up and running!");

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
];
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
	cardsInPlay.push(card.rank);
	console.log('User flipped ' + card.rank);
	console.log(card.suit);
	console.log(card.cardImage);
	checkForMatch();
}

flipCard(0);
flipCard(2);


