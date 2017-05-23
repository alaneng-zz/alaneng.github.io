import React, { Component } from "react";
import { fetchRates } from "./actions";
import { getDateRange } from "./helpers";
import { RateList } from "./components/RateList";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const range = getDateRange(["2016-04-15", "2016-05-30"]);
    range.map(date => this.props.fetchRates(date));
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to the exchange rate traveler</h2>
          </div>
        </div>
        <RateList rates={this.props.rates} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { rates: state.rates };
}

export default connect(mapStateToProps, { fetchRates })(App);
