var Button = ReactBootstrap.Button,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Jumbotron = ReactBootstrap.Jumbotron



var App = React.createClass({
  render: function() {
    return (
      <Grid fluid>
        <Row>
          <Jumbotron>
            <h1>hey, alan!</h1>
            <p>a simple react app</p>
            <Button bsStyle='primary'>React!</Button>
          </Jumbotron>
        </Row>
      </Grid>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('react-hook')
);