import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import d3 from 'd3';
import nv from 'nvd3';
import 'nvd3/build/nv.d3.min.css';

class App extends Component {

  getData() {
    var sin = [],
        cos = [];

    for (var i = 0; i < 100; i++) {
      sin.push({x: i, y: Math.sin(i/10)});
      cos.push({x: i, y: .5 * Math.cos(i/10)});
    }

    return [
      {
        values: sin,
        key: 'Sine Wave',
        color: '#ff7f0e'
      },
      {
        values: cos,
        key: 'Cosine Wave',
        color: '#2ca02c'
      }
    ];
  }

  createChart() {
    var chart = nv.models.lineChart()
      .useInteractiveGuideline(true)
      ;

    chart.xAxis
      .axisLabel('Time (ms)')
      .tickFormat(d3.format(',r'))
      ;

    chart.yAxis
      .axisLabel('Voltage (v)')
      .tickFormat(d3.format('.02f'))
      ;

    nv.utils.windowResize(chart.update);

    this.setState({chart})
  };

  componentDidMount() {
    console.log('111');
    this.createChart();
  };

  componentDidUpdate() {
    console.log('222');
    d3.select('#chart svg')
       .datum(this.getData())
       .call(this.state.chart)
  }

  render() {


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id='chart'><svg style={{'height': '500'}}></svg></div>
      </div>
    );
  }
}

export default App;
