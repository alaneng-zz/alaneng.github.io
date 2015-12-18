import React from 'react';
import Router, { History } from 'react-router';
import { Button, ButtonGroup } from 'react-bootstrap';

var SearchGithub = React.createClass({
  mixins: [History],

  handleSubmit() {
    var username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.history.pushState(null, 'profile/' + username) 
  },

  handleEnter(e) {
    if(e.keyCode == 13){
      var username = this.usernameRef.value;
      this.usernameRef.value = '';
      this.history.pushState(null, 'profile/' + username)       
    }
  },

  render() {
    return (
      <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search Github user..." 
            onKeyDown={this.handleEnter}
            ref={(ref) => this.usernameRef = ref} />
          <span className='input-group-btn'>
            <Button bsStyle='primary' onClick={this.handleSubmit}>Submit</Button>
          </span>
       </div>
    )
  }
});

export default SearchGithub;