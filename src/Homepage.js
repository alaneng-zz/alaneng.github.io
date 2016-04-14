import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return<div className="Aligner">
            <div className="Aligner-item Aligner-item--top">top</div>
            <div className="Aligner-item">centered</div>
            <div className="Aligner-item Aligner-item--bottom">bottom</div>
          </div>
  }
};

export default Homepage;