import React, { Component } from 'react'
import { Button, Grid, Jumbotron } from 'react-bootstrap'
import $ from 'jquery'

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>bay area bike share</h1>
          <p>statistics of bikes around the bay</p>
        </Jumbotron>
        <h1>Hello, Alan!!</h1>
        <Button>hiya</Button><br></br>
      </Grid>
    )
  }
}

export default App;