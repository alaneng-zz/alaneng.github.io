var Button = ReactBootstrap.Button,
    ButtonGroup = ReactBootstrap.ButtonGroup,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Jumbotron = ReactBootstrap.Jumbotron,
    ListGroup = ReactBootstrap.ListGroup,
    ListGroupItem = ReactBootstrap.ListGroupItem,
    Table = ReactBootstrap.Table

var Header = React.createClass({
  render: function() {
    return (
      <Jumbotron className='jumbo'>
        <h1>bay area bike share</h1>
        <p>current statistics of bikes around the bay</p>
      </Jumbotron>
    )
  }
});

var Cities = React.createClass({

  handleCityClick: function(e) {
    this.props.showCity(e.target.text)
  },

  render: function() {
    var menuItems = ['San Francisco', 'San Jose', 'Oakland']
    var listgroup = menuItems.map(i => 
      <Button href="#" value={i} onClick={this.handleCityClick}>{i}</Button>
    )

    return (
      <ButtonGroup bsSize="md">
        {listgroup}
      </ButtonGroup>
    )
  }
})

var SFStats = React.createClass({

  handleData: function() {
    debugger
  },

  getData: function() {
    $.ajax({
      url: 'http://www.bayareabikeshare.com/stations/json'
    }).then(this.handleData)
  },

  render: function() {

    this.getData();

    var stations = ['', 'Powell', 'Civic Center', 'Embarcadero', 'Caltrain'];
    var bikes_docks = ['Bike Docks', '25', '25', '30', '50'];
    var bikes_available = ['Bikes Available', '12', '8', '15', '4'];

    var header = stations.map(station => 
      <th className='placeCenter'>{station}</th>
    );

    var row1 = bikes_docks.map(docks => 
      <td>{docks}</td>
    );

    var row2 = bikes_available.map(available => 
      <td>{available}</td>
    );

    return (
      <Table className='tablebg' hover>
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody>
          <tr>
            {row1}
          </tr>
          <tr>
            {row2}
          </tr>
        </tbody>
      </Table>
    )
  }
});

var SJStats = React.createClass({
  render: function() {
    return (
      <p>no SJ stats yet!</p>
    )
  }
});

var OakStats = React.createClass({
  render: function() {
    return (
      <p>no Oak stats yet!</p>
    )
  }
});

var App = React.createClass({
  getInitialState: function(){
    return {
      showsf: true,
      showsj: false,
      showoak: false
    }
  },

  showCity: function(city) {

    switch(city) {
      case 'San Francisco':
        this.setState({showsf: true});
        this.setState({showsj: false});
        this.setState({showoak: false});
        break;
      case 'San Jose':
        this.setState({showsf: false});
        this.setState({showsj: true});
        this.setState({showoak: false});
        break;
      case 'Oakland':
        this.setState({showsf: false});
        this.setState({showsj: false});
        this.setState({showoak: true});
        break;
    }
  },

  render: function() {

    return (
      <Grid fluid>
        <Row>
          <Header />
        </Row>
        <Row className='main placeCenter'>
          <h2>Cities</h2>
          <Cities showCity={this.showCity} />
          <br></br>
          <br></br>
          <Grid fluid>
          {this.state.showsf && <SFStats />}
          {this.state.showsj && <SJStats />}
          {this.state.showoak && <OakStats />}
          </Grid>
        </Row>
      </Grid>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('react-hook'));