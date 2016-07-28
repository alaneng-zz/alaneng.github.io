import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BarChart from './BarChart';
import _ from 'lodash';
import './App.css';

const tileDim = 150;

const styles = {
  header: {
    margin: 120
  },
  gridList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  gridTile: {
    width: tileDim,
    height: tileDim,
    margin: 14,
    background: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },
  undoButton: {
    padding: 20,
    margin: 30
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      'rollHistory': [],
      'currentRoll': 0
    }
  };

  selectRoll(roll) {
    this.setState({
      currentRoll: roll,
      [roll]: this.state[roll] + 1,
      rollHistory: this.state.rollHistory.concat([roll])
    })
  };

  undoLastRoll() {
    if (this.state.rollHistory.length) {
      var lastRoll = this.state.rollHistory.slice(-1)[0];
      this.setState({
        [lastRoll]: this.state[lastRoll] - 1,
        rollHistory: this.state.rollHistory.slice(0, -1)
      });
    }
  };

  render() {
    const gridTiles = _.range(2, 13).map(roll => {
      return <RaisedButton style={styles.gridTile} key={roll} onClick={() => this.selectRoll(roll)}>
               {roll}
             </RaisedButton>
    });

    const undoDisabled = this.state.rollHistory.length ? false : true;

    const rollTally = _.range(2, 13).map(x =>
      <li>{x}: {this.state[x]}</li>
    )

    return (
      <div className="App">
        <h1 style={styles.header}>Settlers of Catan Tracker!</h1>
        {rollTally}
        <div style={styles.gridList}>
          {gridTiles}
        </div>
        <div style={styles.undoButton}>
          <RaisedButton label='undo last roll' onClick={() => this.undoLastRoll()} disabled={undoDisabled} />
        </div>
      </div>
    );
  }
}

export default App;
