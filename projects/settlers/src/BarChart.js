import React from 'react';
import drawBar from './d3/drawBar';

class BarChart extends React.Component {
  render() {
    drawBar.draw(this.props.rollTally);
    return <div className='barchart'></div>
  };
};

export default BarChart;
