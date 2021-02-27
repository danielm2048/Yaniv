class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.isJoker = !(suit && rank);
    this.value = !this.rank
      ? 0
      : this.rank === "A"
        ? 1
        : this.rank === "J" || this.rank === "Q" || this.rank === "K"
          ? 10
          : parseInt(this.rank);
  }

  toString() {
    return `${this.isJoker ? "Joker" : `${this.rank} of ${this.suit}`
      }, Value of ${this.value}`;
  }
}
