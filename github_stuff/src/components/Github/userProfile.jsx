import React from 'react';
import { Grid } from 'react-bootstrap';

var UserProfile = React.createClass({
  render() {
    return (
      <Grid fluid>
        <p>User profile</p>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio}</p>
      </Grid>
    )
  }
});

export default UserProfile;