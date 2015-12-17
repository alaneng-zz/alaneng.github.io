import React from 'react';
import { Grid } from 'react-bootstrap';

var Repos = React.createClass({
  render() {
    return (
      <Grid fluid>
        <p>Repos</p>
        Repos: {this.props.repos}
      </Grid>
    )
  }
});

export default Repos;