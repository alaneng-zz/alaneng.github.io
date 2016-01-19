import React from 'react';
import { Component } from 'react';
import  { Jumbotron, Input, Grid, Col, Row } from 'react-bootstrap';
import WeatherList from '../containers/weather-list';

import SearchBar from '../containers/search-bar';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <SearchBar />
        <WeatherList />
      </Grid>
    );
  }
}
