var React = require('react');
var ReactDOM = require('react-dom');

var Grid = require('react-bootstrap/lib/Grid');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require("react-bootstrap/lib/Button");

var Menu = require('./Menu');
var DataTable = require('./DataTable');

var Main = React.createClass({  
  getInitialState() {
    return {
      menu: ['Activities', 'Achievements', 'Staff', 'Contact'],
      datatable: []
    }
  },

  componentDidMount() {
    fetch('datatable')
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        this.setState({
          datatable: data.datatable
        })
      }.bind(this))
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
        <DataTable datatable={this.state.datatable} />
      </Grid>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('root'))