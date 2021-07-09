const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3;
  let cards;
  let deck;
  let round;
  let game;

  beforeEach(function() {
    card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card (3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    cards = [card1, card2, card3];

    game = new Game(round);
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of a Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start the game', function() {
    expect(game.start).to.be.a('function');
  });

  it('should create a deck of cards and round to be played', function() {
    game.start();
    expect(deck).to.be.an.instanceof(Deck);
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
