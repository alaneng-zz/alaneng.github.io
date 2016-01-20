import React, { Component } from 'react';
import $ from 'jquery'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

import PokeGrid from './pokegrid.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokedex: []
    }
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
        <Jumbotron>
          <h1 style={{textAlign: 'center'}}>Pokedex</h1>
        </Jumbotron>
        <PokeGrid pokedex={this.state.pokedex} />
      </Grid>
    )
  }
}
