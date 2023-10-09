// Creating Card class
class Card {
    constructor(faces, suits) {
      this.faces = faces
      this.suits = suits
    }
  }
// Creating Dealer Class
  class Dealer {
    constructor() {
      this.getDeckOfCards()
      this.shuffle()
    }
// Number of cards in the deck.
  CARD_COUNT = 52
// Creating an empty cards array.
  cards = []
// Array for faces.
  faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
// Array for suits.
  suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
//getDeckOfCards
    getDeckOfCards() {
      for (let count = 0; count < this.CARD_COUNT; count++) {
        this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)])
      }
    }
//shuffle the cards
    shuffle() {
      for (let firstCard = 0; firstCard < this.CARD_COUNT; firstCard++) {
        let secondCard = Math.floor(Math.random() * this.CARD_COUNT)
        let tempCard = this.cards[firstCard]
        this.cards[firstCard] = this.cards[secondCard]
        this.cards[secondCard] = tempCard
      }
    }
//create a function buildPlayingCard
    buildPlayingCard(card, suitIcon, faceColor, suitColor) {
      return `<div class='card player-card' style='width:100%'>
                <div class='card-title' style='color: ${faceColor}; font-size: 20px; padding-left: 10px; text-align: left;'>
                  ${card}
                </div>
                <div class='card-content' style='font-size: 28px; padding-bottom: 25px;'>
                  <span style='color: ${suitColor}' class='${suitIcon}'></span>
                </div>
              </div>`
    }
  }
//Create a onclick function 
  function main() {
    let dealer = new Dealer()
    dealer.shuffle()
    let cardOutputWithIcon = ""
    for (const card of dealer.cards) {
      switch (card.suits) {
        case "Hearts":
          cardOutputWithIcon += dealer.buildPlayingCard(card.faces, "mdi mdi-cards-heart", "red", "red")
          break
        case "Diamonds":
          cardOutputWithIcon += dealer.buildPlayingCard(card.faces, "mdi mdi-cards-diamond", "red", "red")
          break
        case "Clubs":
          cardOutputWithIcon += dealer.buildPlayingCard(card.faces, "mdi mdi-cards-club", "black", "black")
          break
        case "Spades":
          cardOutputWithIcon += dealer.buildPlayingCard(card.faces, "mdi mdi-cards-spade", "black", "black")
          break
        default:
          break;
      }
    }
    document.getElementById("results").innerHTML = cardOutputWithIcon;
  }