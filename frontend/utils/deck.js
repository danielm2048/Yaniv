const SUITS = ["♠", "♣", "♥", "♦"];
const RANKS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

class Deck {
  constructor(numberOfCards = 54) {
    this.numberOfCards = numberOfCards;
    this.cards = [];

    this.init();
  }

  init() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        const c = new Card(SUITS[i], RANKS[j]);
        this.cards.push(c);
      }
    }

    if (this.numberOfCards === 54) {
      this.cards.push(new Card());
      this.cards.push(new Card());
    }
  }

  suffleDeck() {
    let j;

    for (let i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i + 1);

      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drawCard() {
    let rand = Math.floor(Math.random() * this.cards.length + 1);

    this.cards.splice(rand, 1);

    const selectedCard = this.cards[rand];
    return selectedCard;
  }
}

class PlayerDeck extends Deck {
  constructor(numberOfCards = 5, name) {
    super(numberOfCards);

    this.cards = [];
    this.name = name;
    this.points = 0;
  }
}

class TableDeck extends Deck {
  constructor(numberOfCards) {
    super(numberOfCards);

    this.cards = [];
  }
}

class PileDeck extends Deck {
  constructor(numberOfCards = 0) {
    super(numberOfCards);

    this.cards = [];
  }

  takeCard(direction) {
    if (direction === "top") {
      return this.cards.pop();
    } else if (direction === "bottom") {
      return this.cards.shift();
    }
  }
}
