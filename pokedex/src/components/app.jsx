import React, { Component } from 'react';
import $ from 'jquery'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: ''
    }
  }

  componentDidMount() {
    fetch('http://pokeapi.co/api/v1/pokemon/1/')
      .then(function(response){
        return response.json()
      })
      .then(function(json){
        this.setState({
          pokemon: json
        })
      }.bind(this))
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Pokedex</h1>
        </Jumbotron>
      </Grid>
    )
  }
}
