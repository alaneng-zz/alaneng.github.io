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
var _ = require('underscore');

var Application = React.createClass({

  render: function(){

    return (  
      <Grid fluid>
        Hello, Alan
      </Grid>        
    );
  }  
});

if (typeof document !== 'undefined') {
  require('style!css!../stylesheets/application.css');  
  ReactDOM.render(<Application />, document.getElementById('root'));
}

module.exports = Application;

