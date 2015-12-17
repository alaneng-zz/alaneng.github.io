import React from 'react';
import Router, { History } from 'react-router';

var SearchGithub = React.createClass({
  mixins: [History],

  handleSubmit() {
    var username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.history.pushState(null, 'profile/' + username) 
  },

  render() {
    return (
      <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search Github user..." 
            ref={(ref) => this.usernameRef = ref} />
          <span className='input-group-btn'>
            <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
          </span>
       </div>
    )
  }
});

export default SearchGithub;