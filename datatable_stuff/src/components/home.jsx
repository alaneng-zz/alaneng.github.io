import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

var Home = React.createClass({
  render() {
    return (
      <Grid fluid>
        <h3 className='text-center'>
          <em>Table en route to rendering...</em>
        </h3>
      </Grid>
    )
  }
});

export default Home;