var React = require('react');

var UserProfile = React.createClass({
  render() {
    return (
      <div>
        <h3>userprofile</h3> 
        <p>{this.props.username}</p>
        <h3>bio</h3>
        <p>{this.props.bio.name}</p>
      </div>
    )
  }
}); 

module.exports = UserProfile;