var React = require('react');
var ReactDOM = require('react-dom');

var Grid = require('react-bootstrap/lib/Grid');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require("react-bootstrap/lib/Button");

var Menu = require('./Menu.js');

var Main = React.createClass({  
  getInitialState() {
    return {
      menu: ['Activities', 'Achievements', 'Staff', 'Contact']
    }
  },

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Literacy & Language Center</h1>
          <p>Where Mitchellbear and kids gather in the Inner Sunset</p>
          <Button bsStyle='primary'>Learn more</Button>
        </Jumbotron>
        <Menu menu={this.state.menu} />
      </Grid>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('root'))