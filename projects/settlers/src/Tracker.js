import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BarChart from './BarChart';

class Tracker extends React.Component {

  render() {

    // const intro = this.props.rollHistory.length ? <BarChart rollTally={this.props.rollTally} /> : <h1>Begin the first roll!</h1>;

    return <div>
            <h1><em>{this.props.justRolled}</em></h1>
            <br />
            {this.props.rollsSoFar}
            <br />
            <div style={this.props.styles.body}>
              <div style={this.props.styles.gridList}>
                {this.props.gridTiles}
                <RaisedButton style={this.props.styles.undoButton} label='undo last roll' onClick={() => this.props.undoLastRoll()} disabled={this.props.undoDisabled} />
              </div>
              {this.props.intro}
            </div>
          </div>
  }
};

export default Tracker;

              // <BarChart rollTally={this.props.rollTally} />

