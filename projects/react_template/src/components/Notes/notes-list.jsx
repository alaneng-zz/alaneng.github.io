import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

var NotesList = React.createClass({
  render() {
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