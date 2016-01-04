import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Nav, NavItem,
          Navbar, Input, ButtonGroup } from 'react-bootstrap'
import $ from 'jquery';
import { Link } from 'react-router';

import Home from './home.jsx';

var Main = React.createClass({
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1><Link to="/" style={{color: 'black', textDecoration: 'none'}}>DataTable Example</Link></h1>
          <div style={{textAlign: 'center'}}>
            <ButtonGroup>
              <Button><Link to='ex1'>example 1</Link></Button>
              <Button><Link to='ex2'>example 2</Link></Button>
              <Button><Link to='ex3'>example 3</Link></Button>
            </ButtonGroup>
          </div>
        </Jumbotron>
        <Grid fluid>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
})

export default Main;

