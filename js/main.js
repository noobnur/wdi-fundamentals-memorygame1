//define cards array with the 4 diff cards that we have
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

//keep an open array here for later comparison
var cardsInPlay = [];

//define flipCard function. This function will run when a card is clicked on (EventListener). 
//Once a card is clicked on, we will pull the card's data and then push its .rank into cardsInPlay 
//Then console.log all the info of the card that was clicked.
//Also change the img (flip it) when clicked ??
//If another card is clicked then will continue to checkForMatch func
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log("User flipped " + cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].suit);
checkForMatch();
};

//define function for matching what was clicked on. Once it is clicked, this function will run.
//flip the images
//if the total cards in play array is two then they will compare the first and second card
// Alert based results.
var checkForMatch = function() {
	var totalCards = cardsInPlay.length;
	//Here 'href' is the name of the attribute we want to change, and 'http://newurl.com' is the new value for that attribute — a url.
		if (totalCards === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	 alert("You found a match!");
}
	else {
	alert("Sorry, try again.");
}
}


//define createBoard function. This function will run each time the page is refreshed.
//createBoard function basically sets the pictures randomly
//and all looks out for a "click" that will then run the flipCard function
var createBoard = function () {
	  for (var i = 0; i < cards.length; i++) {
	  	var cardElement = document.createElement('img');
	  	cardElement.setAttribute('src', 'images/back.png');
	  	cardElement.setAttribute('data-id', i);
	  	cardElement.addEventListener('click',flipCard);
	  	document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();

	






	