import React, { Component } from 'react';
import { Grid, Input, Jumbotron } from 'react-bootstrap'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div className='search-bar'>
        <Input type='text' 
               value={this.state.term}
               onChange={e => this.setState({term: e.target.value})} />
      </div>             
    )
  }
}