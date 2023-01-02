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
      {id: 0, nome: "California", prezzo: 2.90, immagine: california},
      {id: 1, nome: "Dragon", prezzo: 5.00, immagine: dragon},
      {id: 2, nome: "Dynamite", prezzo: 3.50, immagine: dynamite},
      {id: 3, nome: "Philadelphia", prezzo: 4.20, immagine: philadelphia},
      {id: 4, nome: "Rainbow", prezzo: 8.90, immagine: rainbow},
      {id: 5, nome: "Shrimp", prezzo: 7.90, immagine: shrimp},
    ]
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
                nome={card.nome}
                prezzo={card.prezzo}
                immagine={card.immagine}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
