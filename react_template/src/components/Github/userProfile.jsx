import React, { PropTypes } from 'react';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

var UserProfile = React.createClass({
  
  propTypes: {
    username: PropTypes.string.isRequired
  },

  render() {
    return (
        <ListGroup>
          {this.props.bio.avatar_url && <ListGroupItem> <img src={this.props.bio.avatar_url} className="img-rounded img-responsive"/></ListGroupItem>}
          {this.props.bio.name && <ListGroupItem>Name: {this.props.bio.name}</ListGroupItem>}
          {this.props.bio.login && <ListGroupItem>Username: {this.props.bio.login}</ListGroupItem>}
          {this.props.bio.email && <ListGroupItem>Email: {this.props.bio.email}</ListGroupItem>}
          {this.props.bio.location && <ListGroupItem>Location: {this.props.bio.location}</ListGroupItem>}
          {this.props.bio.company && <ListGroupItem>Company: {this.props.bio.company}</ListGroupItem>}
          {this.props.bio.followers && <ListGroupItem>Followers: {this.props.bio.followers}</ListGroupItem>}
          {this.props.bio.following && <ListGroupItem>Following: {this.props.bio.following}</ListGroupItem>}
          {this.props.bio.following && <ListGroupItem>PubListGroupItemc Repos: {this.props.bio.pubListGroupItemc_repos}</ListGroupItem>}
          {this.props.bio.blog && <ListGroupItem>Blog: <a href={this.props.bio.blog}> {this.props.bio.blog}</a></ListGroupItem>}
        </ListGroup>
    )
  }
});

export default UserProfile;