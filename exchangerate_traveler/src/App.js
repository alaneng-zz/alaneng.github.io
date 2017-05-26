import React, { Component } from "react";
import {
  fetchRates,
  updateBaseCurrency,
  updateConvertedCurrency,
  fetchDateRange
} from "./actions";
import { RateList } from "./components/RateList";
import { connect } from "react-redux";
import "./App.css";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import { currencyList } from "./helpers";

const styles = {
  customWidth: {
    width: 200
  }
};

class App extends Component {
  componentDidMount() {
    const range = this.props.dateRange;
    range.map(date => this.props.fetchRates(date, this.props.baseCurrency));
  }

  componentDidUpdate() {
    const range = this.props.dateRange;
    // range.map(date => this.props.fetchRates(date, this.props.baseCurrency));
  }

  render() {
    const currencyDropdown = currencyList.map(currency => (
      <MenuItem key={currency} value={currency} primaryText={currency} />
    ));

    return (
      <div>
        <div className="App">
          {/*<h2>Welcome to the exchange rate traveler</h2>*/}
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Choose your base currency</h3>
          <DropDownMenu
            style={styles.customWidth}
            autoWidth={false}
            onChange={this.props.updateBaseCurrency}
            value={this.props.baseCurrency}
          >
            {currencyDropdown}
          </DropDownMenu>

        </div>
        <RateList rates={this.props.rates} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rates: state.rates,
    baseCurrency: state.baseCurrency,
    convertedCurrency: state.convertedCurrency,
    dateRange: state.dateRange
  };
}

export default connect(mapStateToProps, {
  fetchRates,
  updateBaseCurrency,
  updateConvertedCurrency,
  fetchDateRange
})(App);
/*
<DropDownMenu
            style={styles.customWidth}
            autoWidth={false}
            onChange={this.props.updateConvertedCurrency}
            value={this.props.convertedCurrency}
          >
            {currencyDropdown}
          </DropDownMenu>*/
