import React from 'react';
import ReactDOM from 'react-dom';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidUpdate() {
    let el = ReactDOM.findDOMNode(this);
  };

  render() {
    return <div></div>
  };
};

export default BarChart;
