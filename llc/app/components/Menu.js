var React = require('react');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

module.exports = React.createClass({
  render() {
    var menuItems = this.props.menu.map(menuItem =>
      <ListGroupItem key={menuItem} href='#'>
        <h5>{menuItem}</h5>
      </ListGroupItem>
    )

    return (
      <ListGroup className='menuItem text-center'>
        {menuItems}
      </ListGroup>
    )
  }
})