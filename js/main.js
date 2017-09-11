console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

	var cardOne = cards[0];

	cardsInPlay.push('cardOne');

	console.log("user flipped" + cardOne);

var cardTwo = cards[2];

	cardsInPlay.push('cardTwo');

	console.log("user flipped" + cardTwo);

var totalCards = cardsInPlay.length;

if (totalCards === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	 alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}