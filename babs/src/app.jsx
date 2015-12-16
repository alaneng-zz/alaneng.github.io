import React, { Component } from 'react'
import $ from 'jquery'
import { Button, Grid, Jumbotron } from 'react-bootstrap'

module.exports = React.createClass({
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
})
