import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

var Repos = React.createClass({

  propTypes: {
    username: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
  },

  render() {
    return (
      <Grid fluid>
        <h3>Repos</h3>
        Repos: {this.props.repos}
      </Grid>
    )
  }
});

export default Repos;