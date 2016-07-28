import React from 'react';
import ReactDOM from 'react-dom';
import drawBar from './d3/drawBar';

class BarChart extends React.Component {

  componentDidMount() {
    drawBar.createCanvas();
  };

  componentDidUpdate() {
    drawBar.draw(this.props.rollTally);
  };

  render() {
    return <div className='barchart'></div>
  };
};

export default BarChart;
