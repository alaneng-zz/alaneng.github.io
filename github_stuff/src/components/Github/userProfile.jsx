import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

var UserProfile = React.createClass({
  
  propTypes: {
    username: PropTypes.string.isRequired
  },

  render() {
    return (
      <Grid fluid>
        <h3>User profile</h3>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio}</p>
      </Grid>
    )
  }
});

export default UserProfile;