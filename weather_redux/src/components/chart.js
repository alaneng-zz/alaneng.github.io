import React, { Component } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default class Chart extends Component {
  average(data) {
    return _.round(_.sum(data) / data.length)
  }

  render() {
    const {data, color} = this.props;

    return (
      <div>
        <Sparklines height={120} width={180} data={data}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
        <div style={{textAlign: 'center'}}>{this.average(data)} {this.props.units}</div>
      </div>
    )
  }
}