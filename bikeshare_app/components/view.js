var React = require('react');
var ButtonGroup = require("react-bootstrap/lib/ButtonGroup");
var Button = require("react-bootstrap/lib/Button");

module.exports = React.createClass({
  render: function() {
    return (
      <ButtonGroup>
        <Button>Grid</Button>
        <Button>Table</Button>
      </ButtonGroup>
  )}
});