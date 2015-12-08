var React = require('react');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

module.exports = React.createClass({
  render: function() {
    var stations = this.props.json.filter(item =>
      item.city === this.props.city
    );

    var stationsList = stations.map(item =>
      <ListGroupItem key={item.id}>
        <h4>{item.stationName}</h4>

        Available bikes: {item.availableBikes}
        <br></br>
        Available docks: {item.availableDocks}
        <br></br>
        Total docks: {item.totalDocks}
      </ListGroupItem>
    )

    return (
      <ListGroup>{stationsList}</ListGroup>
    )
    
  }
});;