import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

var NotesList = React.createClass({
  render() {
    console.log('notes2: ', this.props.notes)
    var notes = this.props.notes.map((note, index) =>
      <ListGroupItem key={index}>
        {note['.value']}
      </ListGroupItem>
    );

    return (
      <ListGroup>
        {notes}
      </ListGroup>
    )
  }
});

export default NotesList;