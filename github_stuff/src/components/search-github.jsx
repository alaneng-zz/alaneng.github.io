import React from 'react';
import Router from 'react-router';

var SearchGithub = React.createClass({
  mixins: [Router.History],

  render() {
    return (
      <Col sm={12}>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            className='form-control'
            
            />
        </form>

      </Col>
    )
  }
});

export default SearchGithub;