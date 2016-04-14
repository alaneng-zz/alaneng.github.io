import React, { PropTypes } from 'react';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

var Repos = React.createClass({

  propTypes: {
    username: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
  },

  render() {
    var repos = this.props.repos.map((repo, index) => {
      return <ListGroupItem key={index}>
              {repo.html_url && <h4><a href={repo.html_url} target="_blank">{repo.name}</a></h4>}
              {repo.description && <p>{repo.description}</p>}
             </ListGroupItem>        
    })

    return (
      <Grid fluid>
        <h3>Repos</h3>
        <ListGroup>
          {repos}
        </ListGroup>
      </Grid>
    )
  }
});

export default Repos;