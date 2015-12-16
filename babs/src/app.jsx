import React, { Component } from 'react'
import $ from 'jquery'
import { Button, Grid, Jumbotron } from 'react-bootstrap'

module.exports = React.createClass({
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>hey!!</h1>
          <Button bsStyle='primary'>click me</Button>
        </Jumbotron>
        <h1>Hello, Alan!!</h1>
        <Button>hiya</Button><br></br>
        <Button>heya</Button>
      </Grid>
    )
  }
})
