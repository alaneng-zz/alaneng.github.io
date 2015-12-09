// Component declarations
var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");
var NavItem = require("react-bootstrap/lib/NavItem");
var Row = require("react-bootstrap/lib/Row");
var Col = require("react-bootstrap/lib/Col");
var Grid = require("react-bootstrap/lib/Grid");
var ButtonGroup = require("react-bootstrap/lib/ButtonGroup");
var Button = require("react-bootstrap/lib/Button");
var Input = require("react-bootstrap/lib/Input");
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');
var Glyphicon = require("react-bootstrap/lib/Glyphicon");
var Image = require("react-bootstrap/lib/Image");
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var _ = require('underscore');

var DataTable = require('./data-table');
var CityMenu = require('./city-menu');
var View = require('./view');

var Application = React.createClass({

  getInitialState: function() {
    return {
      json: [], // must be [] so [].map works
      city: 'San Francisco'
    }
  },

  componentDidMount: function() { // always use Did for data fetching
    $.ajax({
      url: 'getData',
      dataType: 'json',
      type: 'GET'
    }).then(this.handleGetData, function(err){
      console.log('Whoa! Error: ', err.status)
    });
  },

  handleGetData: function(data) {
    this.setState({json: data.data})
  },

  handleCityClick: function(city) {
    this.setState({city: city})
  },

  render: function(){
    return (  
      <Grid fluid className='marginstuff'>
        <Jumbotron>
          <h1>bay area bike share</h1>
          <p>statistics of bikes around the bay</p>
        </Jumbotron>
        <div className='text-center'>
          <CityMenu json={this.state.json} handleCityClick={this.handleCityClick} />
          <h2 className='text-center'>{this.state.city}</h2>
          <View />
        </div>
        <br></br>
        <DataTable json={this.state.json} city={this.state.city} />
      </Grid>        
    );
  }  
});




if(typeof document !== 'undefined') {
  require('style!css!../stylesheets/application.css');  
  ReactDOM.render(<Application />, document.getElementById('root'));
}

module.exports = Application;

