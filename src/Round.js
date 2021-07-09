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
    let turn = new Turn(guess, this.currentCard);
    this.returnCurrentCard();
    this.turns ++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    };
  };

  calculatePercentCorrect() {
    let correctAnswers = this.turns - this.incorrectGuesses.length
    let percentCorrect = Math.ceil((correctAnswers / this.turns) * 100)
    return percentCorrect
  };

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  };
};

module.exports = Round;
