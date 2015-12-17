import React from 'react';
import { Grid } from 'react-bootstrap';
import NotesList from './notes-list.jsx';

var Notes = React.createClass({
  render() {
    console.log('notes1: ', this.props.notes)
    return (
      <Grid fluid>
        <h3>Notes for {this.props.username}</h3>
        <NotesList notes={this.props.notes} />
      </Grid>
    )
  }
});

export default Notes;