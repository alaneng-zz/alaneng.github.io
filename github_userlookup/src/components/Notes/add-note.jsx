import React, { PropTypes } from 'react';
import { Grid, Input, Button } from 'react-bootstrap';

var AddNote = React.createClass({
  propTypes: {
    username: PropTypes.string.isRequired,
    addNote: PropTypes.func.isRequired
  },

  handleSubmit() {
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  },

  handleEnter(e) {
    if(e.keyCode == 13){
      var newNote = this.note.value;
      this.note.value = '';
      this.props.addNote(newNote)      
    }
  },

  render() {
    return (
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Add new note!" 
          onKeyDown={this.handleEnter}
          ref={(ref) => this.note = ref} />
        <span className='input-group-btn'>
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
     </div>
    )
  }
});

export default AddNote;