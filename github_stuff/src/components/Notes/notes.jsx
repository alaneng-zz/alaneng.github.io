import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';
import NotesList from './notes-list.jsx';
import AddNote from './add-note.jsx';

var Notes = React.createClass({

  propTypes: {
    username: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    addNote: PropTypes.func.isRequired
  },

  render() {
    return (
      <Grid fluid>
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </Grid>
    )
  }
});

export default Notes;