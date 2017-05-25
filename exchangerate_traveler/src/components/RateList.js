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

  // const rates = sorted.map(ratePair => ratePair.rate);
  const rates = [
    1.2517,
    1.2517,
    1.2517,
    1.2541,
    1.2475,
    1.2375,
    1.2387,
    1.2387,
    1.2387,
    1.2387,
    1.2491,
    1.2525,
    1.2596,
    1.2569,
    1.2567,
    1.2567,
    1.2567,
    1.2534,
    1.2662,
    1.2642,
    1.2708,
    1.2766,
    1.2766,
    1.2766,
    1.288,
    1.2906,
    1.2907,
    1.2847,
    1.2816,
    1.2816,
    1.2816,
    1.278,
    1.2642,
    1.2613,
    1.2681,
    1.2682,
    1.2682,
    1.2682,
    1.2659,
    1.2697,
    1.2665,
    1.2676,
    1.2697,
    1.2697,
    1.2697
  ];
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
