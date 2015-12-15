var React = require('react');

var Notes = React.createClass({
  render() {
    return (
      <div>
        <h3>notes</h3> 
        <p>{this.props.notes}</p>
      </div>
    )
  }
}); 

module.exports = Notes;