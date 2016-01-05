var React = require('react');
var ReactDOM = require('react-dom');

var Grid = require('react-bootstrap/lib/Grid');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require("react-bootstrap/lib/Button");

var Main = React.createClass({
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Literacy & Language Center</h1>
          <p>Where Mitchellbear and kids gather in the Inner Sunset</p>
          <Button bsStyle='primary'>Learn more</Button>
        </Jumbotron>
      </Grid>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('root'))