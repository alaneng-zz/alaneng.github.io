var React = require('react');
var ButtonGroup = require("react-bootstrap/lib/ButtonGroup");
var Button = require("react-bootstrap/lib/Button");

module.exports = React.createClass({
  handleCityClick: function(e) {
    this.props.handleCityClick(e.target.value);
  },

  render: function() {
    var _ = require('underscore');
    var cities_list = _.unique(this.props.json.map(i => i.city));
    var cities = cities_list.map(city =>
      <Button onClick={this.handleCityClick} key={city}  value={city}>
        {city}
      </Button>
    )

    return (
      <ButtonGroup>
        {cities}
      </ButtonGroup>
    )
  }
});