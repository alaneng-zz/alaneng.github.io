import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

export const RateList = props => {
  const sorted = _.sortBy(props.rates, ["date"]);

  // const ratePairs = sorted.map(ratePair => {
  //   const date = ratePair.date;
  //   const rate = ratePair.rate;

  //   return <li key={date}>{date}: {rate}</li>;
  // });

  const rates = sorted.map(ratePair => ratePair.rate);

  return (
    <div>
      <ul>
        <Sparklines data={rates} height={40} margin={5}>
          <SparklinesLine color="grey" />
          <SparklinesReferenceLine type="mean" color="blue" />
        </Sparklines>
      </ul>
    </div>
  );
};

// //data={rates} width={100} height={20} margin={5} />
