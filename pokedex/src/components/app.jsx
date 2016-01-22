import React, { Component } from 'react';
import $ from 'jquery'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

import PokeGrid from './pokegrid.jsx';
import PokeMenu from './pokemenu.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokedex: [],
      menuItems: ['foo', 'bar', 'wee'],
      showMenu: true
    }
  }

  handleMenu() {
    this.setState({showMenu: !this.state.showMenu})
  }

  onHeaderCopy() {
    console.log('lolwut r u doin')
  }

  componentDidMount() {
    fetch('http://pokeapi.co/api/v1/pokedex/1/')
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        this.setState({
          pokedex: json.pokemon
        })
      }.bind(this))
  }

  render() {
    return (
      <Grid>
        <Jumbotron
          onMouseLeave={this.handleMenu.bind(this)}
          onMouseEnter={this.handleMenu.bind(this)}>
          <h1 onCopy={this.onHeaderCopy.bind(this)} style={{textAlign: 'center'}}>Pokédex!</h1>
        </Jumbotron>
        {this.state.showMenu && <PokeMenu menuItems={this.state.menuItems} />}
        <PokeGrid pokedex={this.state.pokedex} />
      </Grid>
    )
  }
}
