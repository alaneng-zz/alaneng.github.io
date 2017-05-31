import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";
// import { dummyRates as rates } from "../lib/objects";

export const RateChart = props => {
  console.log("props:", props);

  const sorted = _.sortBy(props.rates, ["date"]);
  const rates = sorted.map(ratePair => ratePair.rate);

  return (
    <div className="chart">
      <h3>{props.currency}</h3>
      <Sparklines data={rates} height={30} margin={5}>
        <SparklinesLine color="grey" />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
    </div>
  );
};
