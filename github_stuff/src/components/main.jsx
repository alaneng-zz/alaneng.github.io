import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Nav, NavItem,
          Navbar, Input } from 'react-bootstrap'
import $ from 'jquery'

import Home from './home.jsx'

class Main extends React.Component {
  render() {
    return (
      <Grid>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Github Profiler</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>Menu</NavItem>
          </Nav>
        </Navbar>
        <Jumbotron>
          <h1>Github Profiler</h1>
          <Input type='text' placeholder='Search Github username' />
        </Jumbotron>
        <Grid fluid>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
}

export default Main;