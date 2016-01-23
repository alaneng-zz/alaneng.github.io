import React, { Component } from 'react';
import $ from 'jquery'
import { Jumbotron, Grid, Row, Col, Button, Input } from 'react-bootstrap';

import PokeGrid from './pokegrid.jsx';
import PokeMenu from './pokemenu.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokedex: [],
      menuItems: ['foo'],
      showMenu: true,
      addMenuitem: ''
    }
  }

  handleMenu() {
    this.setState({showMenu: !this.state.showMenu})
  }

  onHeaderCopy() {
    console.log('lolwut r u doin')
  }

  handleAddMenuItem(e) {
    this.setState({addMenuItem: e.target.value})
    this.setState({menuItems: this.state.menuItems.concat([e.target.value])})
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
        <Input value={this.state.addMenuItem} onChange={this.handleAddMenuItem.bind(this)} type='text' />
        {this.state.showMenu && <PokeMenu menuItems={this.state.menuItems} />}
        <PokeGrid pokedex={this.state.pokedex} />
      </Grid>
    )
  }
}
