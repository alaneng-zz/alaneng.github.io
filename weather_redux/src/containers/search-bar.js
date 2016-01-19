import React, { Component } from 'react';
import { Input, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    this.props.fetchWeather(this.state.term);
    this.setState({ 
      term: '' 
    })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <Input 
          type='text'
          placeholder='Search city...'
          value={this.state.term}
          onChange={e => this.setState({term: e.target.value})} />
        <span className='input-group-btn'>
          <Button onClick={this.onFormSubmit.bind(this)} bsStyle='info'>Submit</Button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
