var React = require('react');
var ButtonGroup = require("react-bootstrap/lib/ButtonGroup");
var Button = require("react-bootstrap/lib/Button");

module.exports = React.createClass({
  render: function() {
    var _ = require('underscore');
    var cities_list = _.unique(this.props.json.map(i => i.city))
    var cities = cities_list.map(i =>
      <Button key={i}>{i}</Button>
    )

    return (
      <ButtonGroup>
        {cities}
      </ButtonGroup>
    )
  }
});