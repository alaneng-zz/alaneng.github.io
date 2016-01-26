import React from 'react';
import { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1>finally, a blog.</h1>
        <p>musings of me</p>
      </Jumbotron>
      {this.props.children}
      </div>
    );
  }
}
