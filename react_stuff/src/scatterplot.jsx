import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import d3ScatterPlot from './d3scatterplot.js'

module.exports = React.createClass({

  getDefaultProps() {
    return {
      width: 300,
      height: 300,
      margin: {
        top: 15,
        right: 15,
        bottom: 50,
        left: 50
      },
      r: 5
    }
  },

  componentDidMount() {
    let el = ReactDOM.findDOMNode(this)
    d3ScatterPlot.create(el, this.props)
  },

  componentDidUpdate() {
    let el = ReactDOM.findDOMNode(this)
    d3ScatterPlot.update(el, this.props)
  },

  render() {
    return <div></div>
  }
})
