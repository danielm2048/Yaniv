class Game {
  constructor(names, maxPoints = 50) {
    this.deck = new Deck();
    this.players = [];
    this.scoreBoard = [];
    this.table = new TableDeck(this.deck.numberOfCards - (names.length * 5));
    this.pile = new PileDeck();
    this.maxPoints = maxPoints;

    names.map(name => this.players.push(new PlayerDeck(name)));
  }
}