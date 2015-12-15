var React = require('react');

var Repos = React.createClass({
  render() {
    return (
      <div>
        <h3>repos</h3> 
        <p>{this.props.repos}</p>
      </div>
    )
  }
}); 

module.exports = Repos;