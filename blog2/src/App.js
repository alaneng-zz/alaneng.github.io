import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Navstuff from './Nav.js';

class App extends Component {
  render() {
    return (
      <Grid fluid className='page'>
        <Col xs={3} className='sidebar'>
          <Row><h2>alan eng</h2></Row>
          <Row><p>web developer</p></Row>
        </Col>
        <Col xs={9} className='main'>
          lorem ipsum
        </Col>
      </Grid>
    );
  }
};

export default App;