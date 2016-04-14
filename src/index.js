import React from 'react';
import ReactDOM from 'react-dom';
import '../static/stylesheets.scss';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return <h1>hello {this.props.name}!</h1>
  }
};

ReactDOM.render(<Homepage name='world!'/>, document.getElementById('root'));