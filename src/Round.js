const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  };

  takeTurn(guess) {
    //instantiate a Turn instance
    let turn = new Turn(guess, this.currentCard);
    this.returnCurrentCard();
    // increase the turn count
    this.turns ++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
    // then access the current card using the index of the turn count
    // if the guess is evaluated to false, the update the incorrect guesses array and run the return feedback function
  };

  calculatePercentCorrect() {
  //**method that calculates and returns the percentage of correct guesses
  let correctAnswers = this.turns - this.incorrectGuesses.length
  let percentCorrect = Math.ceil((correctAnswers / this.turns) * 100)
  return percentCorrect
  };

  endRound() {
    // prints the following to the console:
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
};

module.exports = Round;
