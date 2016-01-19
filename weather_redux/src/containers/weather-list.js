import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(city) {
    if(city.cod === '404') {
      return;
    }

    const name = city.city.name;
    const temps = city.list.map(weather => weather.main.temp - 273.15)
    const humidities = city.list.map(weather => weather.main.humidity)
    const pressures = city.list.map(weather => weather.main.pressure)
    const { lat, lon } = city.city.coord

    return (
      <tr key={city.city.id}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color='red' units="C" /></td>
        <td><Chart data={humidities} color='orange' units="hPa" /></td>
        <td><Chart data={pressures} color='blue' units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </Table>
    )
  }
}

// function mapStateToProps(state) {
//   return {weather: state.weather}
// }

function mapStateToProps({weather}) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);