import React from 'react';
import ReactDOM from 'react-dom';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidUpdate() {
    console.log('rollTally:', this.props.rollTally)
    let el = ReactDOM.findDOMNode(this);
  };

  render() {
    return <div></div>
  };
};

export default BarChart;
