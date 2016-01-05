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
          <h1>Sad title</h1>
          <p>laughable description</p>
          <Button bsStyle='primary'>Learn more</Button>
        </Jumbotron>
      </Grid>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('root'))