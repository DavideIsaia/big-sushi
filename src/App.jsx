import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

import dragon from './images/dragon.png';
import california from './images/california.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  state = {
    cards: [
      {id: 0, nome: "California", prezzo: 2.99, immagine: california, quantità: 0},
      {id: 1, nome: "Dragon", prezzo: 4.99, immagine: dragon, quantità: 0},
      {id: 2, nome: "Dynamite", prezzo: 3.49, immagine: dynamite, quantità: 0},
      {id: 3, nome: "Philadelphia", prezzo: 4.19, immagine: philadelphia, quantità: 0},
      {id: 4, nome: "Rainbow", prezzo: 8.99, immagine: rainbow, quantità: 0},
      {id: 5, nome: "Shrimp", prezzo: 7.99, immagine: shrimp, quantità: 0},
    ]
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({cards}); 
  }

  handleDecrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    if (cards[id].quantità > 0) {
      cards[id].quantità--;      
    }
    this.setState({cards}); 
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Cosa desideri ordinare?</h1>
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                card={card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
