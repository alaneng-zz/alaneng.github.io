var Button = ReactBootstrap.Button,
    ButtonGroup = ReactBootstrap.ButtonGroup,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Jumbotron = ReactBootstrap.Jumbotron,
    ListGroup = ReactBootstrap.ListGroup,
    ListGroupItem = ReactBootstrap.ListGroupItem

// var buttonGroupStyle = {

// }

var Header = React.createClass({
  render: function() {
    return (
      <Jumbotron>
        <h1>bay area bike share</h1>
        <p>current statistics of bikes in SF</p>
      </Jumbotron>
    )
  }
});

var Menu = React.createClass({
  render: function() {
    var menuItems = ['Stations', 'About', 'Contact']
    var listgroup = menuItems.map(i => 
      <Button href="#">{i}</Button>
    )

    return (
      <ButtonGroup justified>
        {listgroup}
      </ButtonGroup>
    )
  }
})

var Stats = React.createClass({
  handleData: function() {
    debugger
  },

  get: function() {
    $.ajax({
      url: 'http://www.bayareabikeshare.com/stations/json',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      dataType: 'jsonp'
    }).then(this.handleData)
  },

  render: function() {
    return <p>{this.get()}</p>
  }
})

var App = React.createClass({
  render: function() {
    return (
      <Grid fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Menu />
        </Row>
        <Row>
          <Stats />
        </Row>
      </Grid>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('react-hook'));