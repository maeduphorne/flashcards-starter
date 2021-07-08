const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1, card2, card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card (3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    cards = [card1, card2, card3];

    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the first card of the deck upon the start of a round', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });
  // 'Turn count is updated'
    // 2 happy paths - if guess is correct/if guess is Incorrect
  it('should update the turn count each time a turn is played', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn();
    expect(round.turns).to.equal(1);
  });
  // 'Should return the current card being played'
  it('Should return the current card being played', function() {
    round.takeTurn();
    expect(round.currentCard).to.equal(deck.cards[0]);
    round.takeTurn();
    expect(round.currentCard).to.equal(deck.cards[1]);
  });
  // 'Should evaluate if a guess is correct and return feedback'
    // check if the incorrect guess is pushed to the array
    // check incorrect and correct feedback
  it('Should evaluate if a guess is correct or incorrect', function() {
    // run takeTurn function for card1 with guess of object(correct)
    expect(round.takeTurn('object')).to.equal('Correct!');
    // expect a return of the string 'Correct!'
    expect(round.takeTurn('function')).to.equal('Incorrect!');
    //and also expect incorrect guess array length to be 1
  });

  it('Should add incorrect guesses to the incorrectGuesses array by ID', function() {
    round.takeTurn("array");
    // expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })
  // 'Should store ids of incorrect guesses'
  // 'Should move to the next card when a turn is played'
  // 'Should calculate the percentage of correct guesses and print winnings'

  it('Should calculate and return the percentage of correct guesses', function() {
    round.takeTurn('object');

    expect(round.calculatePercentCorrect()).to.equal(100);

    round.takeTurn('function');

    expect(round.calculatePercentCorrect()).to.equal(50);

    round.takeTurn('accessor method');

    expect(round.calculatePercentCorrect()).to.equal(34);
  })
})
