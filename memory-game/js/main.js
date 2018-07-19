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
			updateScore();
		} else {
			alert('sorry, no match');
		}
	}
}

var updateScore = function(){
	var scoreElement = document.getElementById('score');
	var score = scoreElement.innerText;
	score = parseInt(score)+1;
	scoreElement.innerText = score;
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	var card = cards[cardId];
	cardsInPlay.push(card.rank);
	console.log('User flipped ' + card.rank);
	console.log(card.suit);
	console.log(card.cardImage);
	this.setAttribute('src', card.cardImage);
	checkForMatch();
}

var createGame = function() {
	for(var i = 0 ; i < cards.length ; i++){
		var newCard = document.createElement('img');
		newCard.setAttribute('src', 'images/back.png');
		newCard.setAttribute('data-id', i);
		newCard.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(newCard);
	}
	document.querySelector('button').addEventListener('click', reset);
}

var reset = function(){
	var currentCards = document.querySelectorAll('img');
	for(var i = 0 ; i < currentCards.length ; i++){
		currentCards[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
}

createGame();