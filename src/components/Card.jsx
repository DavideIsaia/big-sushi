import React, { Component } from 'react';

class Card extends Component {
  render() {
    return(
      <div className="card mb-2 me-1 ms-1" style={{width: '18rem'}}>
      <img src={this.props.card.immagine} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{this.props.card.nome} Rolls</h5>
        <p className="card-text">€{this.props.card.prezzo}</p>
        <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">
          Aggiungi 
          <span className='badge bg-dark ms-2'>{this.props.card.quantità}</span>
          </button>
      </div>
    </div>
    );
  }
}

export default Card;