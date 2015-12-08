// Component declarations
var React = require("react");
var ReactDOM = require("react-dom");
var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");
var NavItem = require("react-bootstrap/lib/NavItem");
var Row = require("react-bootstrap/lib/Row");
var Col = require("react-bootstrap/lib/Col");
var Grid = require("react-bootstrap/lib/Grid");
var Button = require("react-bootstrap/lib/Button");
var Input = require("react-bootstrap/lib/Input");
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');
var Glyphicon = require("react-bootstrap/lib/Glyphicon");
var Image = require("react-bootstrap/lib/Image");
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var _ = require('underscore');

var DataTable = require('./data-table');

var Application = React.createClass({

  getInitialState: function() {
    return {
      json: [] // must be [] so [].map works
    }
  },

  componentWillMount: function() {
    $.ajax({
      url: 'getData',
      dataType: 'json',
      type: 'GET'
    }).then(this.handleGetData, function(err){
      console.log('Whoa! Error: ', err.status)
    });
  },

  handleGetData: function(data) {
    console.log('2')
    this.setState({json: data.data})
  },

  render: function(){
    return (  
      <Grid fluid>
        <Jumbotron>
          <h1>bay area bike share</h1>
          <p>statistics of bikes around the bay</p>
        </Jumbotron>
        <DataTable json={this.state.json} />
      </Grid>        
    );
  }  
});

if (typeof document !== 'undefined') {
  require('style!css!../stylesheets/application.css');  
  ReactDOM.render(<Application />, document.getElementById('root'));
}

module.exports = Application;

