var React = require('react');
var ReactDOM = require('react-dom');

var Grid = require('react-bootstrap/lib/Grid');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require("react-bootstrap/lib/Button");

import StaffMenu from './StaffMenu';
var ContactUs = require('./ContactUs');
var WhoWeAre = require('./WhoWeAre');

var Main = React.createClass({  
  getInitialState() {
    return {
      staffMenu: ['Mitchellbear', 'Kayla', 'Leigh', 'Jessica'],
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
      <Grid className='app'>
        <Jumbotron className='section'>
          <h1>Literacy & Language Center</h1>
          <p>Where Mitchellbear and kids gather in the Inner Sunset</p>
          <Button bsStyle='primary'>Sign up</Button>
        </Jumbotron>
        <WhoWeAre />
        <br />
        <StaffMenu staffMenu={this.state.staffMenu} />
        <br />
        <ContactUs datatable={this.state.datatable} />
        <br />
      </Grid>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('root'))