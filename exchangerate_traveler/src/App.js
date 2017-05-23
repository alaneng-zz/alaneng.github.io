import React, { Component } from "react";
import { fetchRates } from "./actions";
import { getDateRange } from "./helpers";
import { RateList } from "./components/RateList";
import { connect } from "react-redux";
import "./App.css";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const styles = {
  customWidth: {
    width: 200
  }
};

class App extends Component {
  componentDidMount() {
    const range = getDateRange(["2016-04-01", "2016-05-15"]);
    range.map(date => this.props.fetchRates(date));
  }

  render() {
    const currencyList = ["USD", "EUR", "YEN"];
    const currencyDropdown = currencyList.map(currency => (
      <MenuItem key={currency}>{currency}</MenuItem>
    ));
    return (
      <div>
        <div className="App">
          <h2>Welcome to the exchange rate traveler</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <DropDownMenu style={styles.customWidth}>
            {currencyDropdown}
          </DropDownMenu>
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
