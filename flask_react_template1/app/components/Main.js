var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render() {
    return <h1>is baby bear my baby bear!?</h1>
  }
});

ReactDOM.render(<Main />, document.getElementById('root'))