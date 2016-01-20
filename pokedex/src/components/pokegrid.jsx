import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class PokeGrid extends Component {

  onPokemonClick(e) {
    console.log('clicked on', e.target.innerHTML)
  }

  render() {
    const {pokedex} = this.props;
    const pokemon = pokedex.map(pokemon =>
      <ListGroupItem key={pokemon.name} onClick={e => this.onPokemonClick(e)} >
        {pokemon.name}
      </ListGroupItem>
    )

    return (
      <ListGroup className='pokedex'>
        {pokemon}
      </ListGroup>
    )
  }
}