var React = require('react');
var ReactDOM = require('react-dom');

var Grid = require('react-bootstrap/lib/Grid');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require("react-bootstrap/lib/Button");

import StaffMenu from './StaffMenu';
import ContactUs from  './ContactUs';
import WhoWeAre from './WhoWeAre';
import SocialMenu from './SocialMenu';

export default class Main extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      staffMenu: ['Mitchellbear', 'Kayla', 'Leigh', 'Jessica'],
      socialMenu: ['Facebook', 'Blog', 'Twitter'],
      datatable: []
    }
  }

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
  }

  render() {
    return (
      <Grid className='app'>
        <Jumbotron className='section'>
          <h1>Literacy & Language Center</h1>
          <p>Where Mitchellbear and kids gather in the Inner Sunset</p>
          <Button bsStyle='primary'>Sign up</Button>
        </Jumbotron>
        <SocialMenu socialMenu={this.state.socialMenu} />
        <WhoWeAre />
        <br />
        <StaffMenu staffMenu={this.state.staffMenu} />
        <br />
        <ContactUs datatable={this.state.datatable} />
        <br />
      </Grid>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('root'))