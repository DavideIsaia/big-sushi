import React, { Component } from 'react';

class Card extends Component {
  render() {
    return(
      <div className="card" style={{width: '18rem'}}>
      <img src={this.props.immagine} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{this.props.nome} Rolls</h5>
        <p className="card-text">€{this.props.prezzo}</p>
        <button className="btn btn-outline-danger">Elimina</button>
      </div>
    </div>
    );
  }
}

export default Card;