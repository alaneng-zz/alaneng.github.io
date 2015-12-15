import React, { Component } from 'react';

module.exports = React.createClass({
  getInitialState() {
    return ({
      count: 0
    })
  },

  tick() {
    this.setState({ count: this.state.count + 1})
  },

  componentDidMount() {
    setInterval(this.tick, 1000)
  },

  render() {
    return (
      <div>
        <h1>hey alan grr weee!!</h1>
        Count is: {this.state.count}
      </div>
    )
  }
});