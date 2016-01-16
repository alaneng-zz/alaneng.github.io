import React, { Component } from 'react';
import { Grid, Input, Jumbotron } from 'react-bootstrap'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <Input type='text' 
               placeholder='wtf?'
               value={this.state.term}
               onChange={e => this.onInputChange(e.target.value)} />
      </div>             
    )
  }
}