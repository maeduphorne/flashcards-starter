const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    //instantiate a Turn instance
    let turn = new Turn(guess, this.currentCard);
    // increase the turn count
    this.turns ++;
    // then access the current card using the index of the turn count
    this.currentCard = this.deck.cards[this.turns]
    // if the guess is evaluated to false, the update the incorrect guesses array and run the return feedback function
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  };

  // calculatePercentCorrect() {
  //
  // };
};

module.exports = Round;
