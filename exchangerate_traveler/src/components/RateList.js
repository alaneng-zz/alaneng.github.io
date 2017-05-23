import React from "react";
import _ from "lodash";

export const RateList = props => {
  const sorted = _.sortBy(props.rates, ["date"]);

  const rates = sorted.map(ratePair => {
    const date = ratePair.date;
    const rate = ratePair.rate;

    return <li key={date}>{date}: {rate}</li>;
  });

  return (
    <div>
      <ul>
        <span>{rates}</span>
      </ul>
    </div>
  );
};
