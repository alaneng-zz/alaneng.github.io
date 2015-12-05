import React, { Component } from 'react'
import $ from 'jquery'

import ScatterPlot from './scatterplot.jsx'
import getData from './randomdata.js'

module.exports = React.createClass({

  getInitialState() {
    return {
      data: getData()
    }
  },

  handleClick() {
    this.setState({ data: getData() })
  },

  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <button onClick={ this.handleClick }>Update</button>
        <ScatterPlot data={ this.state.data } />
      </div>
    )
  }
})
