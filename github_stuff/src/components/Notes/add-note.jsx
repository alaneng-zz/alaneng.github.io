import React, { PropTypes } from 'react';
import { Grid, Input, Button } from 'react-bootstrap';

var AddNote = React.createClass({
  propTypes: {
    username: PropTypes.string.isRequired,
    addNote: PropTypes.func.isRequired
  },


  handleSubmit: function(e){
    debugger
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  },

  onType() {
    this.query = this.refs.addNote.getValue()
  },

  // handleSubmit(e) {
  //   this.props.addNote(this.query)
  //   debugger
  //   this.refs.addNote.value = ''
  // },

  render() {
    var submitButton = <Button onClick={this.handleSubmit}>Submit</Button>
    return (
        <Input 
          type='text' 
          className='form-control' 
          placeholder='Add new note'
          ref='grr'
          buttonAfter={submitButton} />
    )
  }
});

export default AddNote;