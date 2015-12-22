import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Nav, NavItem,
          Navbar, Input } from 'react-bootstrap'
import $ from 'jquery';
import { Link } from 'react-router';

import Home from './home.jsx';
import SearchGithub from './search-github.jsx';

var Main = React.createClass({
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1><Link to="/" style={{color: 'black', textDecoration: 'none'}}>Github Profiler</Link></h1>
          <SearchGithub />
        </Jumbotron>
        <Grid fluid>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
})

export default Main;

