import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

var Home = React.createClass({
  render() {
    return (
      <Grid fluid>
        <h3 className='text-center'>
          <em>Search by Github username above!!!!</em>
        </h3>
      </Grid>
    )
  }
});

export default Home;