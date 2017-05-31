import React, { Component } from "react";
import {
  fetchRates,
  clearRates,
  updateBaseCurrency,
  updateConvertedCurrency,
  fetchDateRange
} from "./actions";
import { RateChart } from "./components/RateChart";
import { connect } from "react-redux";
import "./App.css";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import { currencyList } from "./lib/objects";

const styles = {
  customWidth: {
    width: 200
  }
};

class App extends Component {
  componentDidMount() {
    const range = this.props.dateRange;
    console.log("111:", this.props.convertedCurrency);

    range.map(date => {
      this.props.convertedCurrency.map(convertedCurrency => {
        this.props.fetchRates(date, this.props.baseCurrency, convertedCurrency);
      });
    });
  }

  onCurrencyChange(value) {
    this.props.updateBaseCurrency(value);

    if (this.props.baseCurrency !== value) {
      this.props.clearRates();

      const range = this.props.dateRange;
      range.map(date => this.props.fetchRates(date, value));
    }
  }

  render() {
    const currencyDropdown = currencyList.map(currency => (
      <MenuItem key={currency} value={currency} primaryText={currency} />
    ));

    const RateCharts = this.props.convertedCurrency.map(convertedCurrency => {
      const convertedCurrencyRates = this.props.rates.filter(
        rate => rate.convertedCurrency == convertedCurrency
      );
      return (
        <RateChart
          rates={convertedCurrencyRates}
          currency={convertedCurrency}
        />
      );
    });

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
            onChange={(event, index, value) => this.onCurrencyChange(value)}
            value={this.props.baseCurrency}
          >
            {currencyDropdown}
          </DropDownMenu>
        </div>
        {RateCharts}
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
  clearRates,
  updateBaseCurrency,
  updateConvertedCurrency,
  fetchDateRange
})(App);
