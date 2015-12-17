import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

var Home = React.createClass({
  render() {
    return (
      <Grid fluid>
        <h2 className='text-center'>
          Search by Github username above!
        </h2>
      </Grid>
    )
  }
});

export default Home;