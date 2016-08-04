import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BarChart from './BarChart';
import _ from 'lodash';
import Tracker from './Tracker';
import Players from './Players';
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
    width: tileDim,
    height: tileDim
  },
  body: {
    display: 'flex',
    flex: 1
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'rollTally': {
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
        '12': 0
      },
      'rollHistory': [],
      'currentRoll': '',
      'enteringName': '',
      'players': [],
      gameStarted: false,
      currentPlayerIndex: 0
    }
  };

  selectRoll(roll) {
    let {rollTally} = this.state;
    rollTally[roll] += 1

    this.setState({
      currentRoll: roll,
      rollTally: rollTally,
      rollHistory: this.state.rollHistory.concat([roll]),
      currentPlayerIndex: (this.state.rollHistory.length) % this.state.players.length
    })
  };

  undoLastRoll() {
    if (this.state.rollHistory.length) {
      let {rollTally} = this.state;
      let lastRoll = this.state.rollHistory.slice(-1)[0];
      rollTally[lastRoll] -= 1;

      this.setState({
        rollTally: rollTally,
        rollHistory: this.state.rollHistory.slice(0, -1),
        currentPlayerIndex: (this.state.rollHistory.length) % this.state.players.length
      });
    }
  };

  handleInputPlayer(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      this.setState({
        players: this.state.players.concat(this.state.enteringName),
        enteringName: ''
      });
    };
  };

  handleEnterPlayerName(e) {
    this.setState({
      enteringName: e.target.value
    });
  };

  handleStartGame() {
    this.setState({
      gameStarted: true
    });
  };

  render() {
    const { rollTally } = this.state;

    // player stuff
    console.log('this.state.rollHistory.length:', this.state.rollHistory.length);
    console.log('players:', this.state.players);
    console.log('currentPlayerIndex:', this.state.currentPlayerIndex);




    // tracker stuff
    const gridTiles = _.range(2, 13).map(roll => {
      return <RaisedButton style={styles.gridTile} key={roll} onClick={() => this.selectRoll(roll)}>
               {roll}
             </RaisedButton>
    });

    const intro = this.state.rollHistory.length ? <BarChart rollTally={rollTally} /> : <h1></h1>;
    const undoDisabled = this.state.rollHistory.length ? false : true;
    const justRolled = this.state.rollHistory.length ?  <h2>{this.state.players[this.state.currentPlayerIndex]}  <span style={{'fontSize': '30px'}}>just rolled a</span>  {this.state.rollHistory.slice(-1)}!</h2> : <p>Ready to begin!</p>
    const nextUp = this.state.rollHistory.length ?  <h2>{this.state.players[this.state.currentPlayerIndex + 1]}  <span style={{'fontSize': '30px'}}>is next!</span></h2> : <p></p>
    const pluralOrNot = this.state.rollHistory.length > 1 ? 'rolls': 'roll'
    const rollsSoFar = this.state.rollHistory.length ? <h2>There have been <strong>{this.state.rollHistory.length}</strong> {pluralOrNot} so far</h2> : <span></span>

    const app = this.state.gameStarted
                  ? <Tracker {...{nextUp}} {...{intro}} rollHistory={this.state.rollHistory} {...{rollTally}} {...{styles}} {...{justRolled}} {...{rollsSoFar}} {...{gridTiles}} undoLastRoll={() => this.undoLastRoll()} {...{undoDisabled}} />
                  : <Players players={this.state.players} enteringName={this.state.enteringName} handleStartGame={this.handleStartGame.bind(this)} handleEnterPlayerName={this.handleEnterPlayerName.bind(this)} handleInputPlayer={this.handleInputPlayer.bind(this)} />

    return (
      <div className="App">
        <h1 style={styles.header}>Settlers of Catan Tracker</h1>
        {app}
      </div>
    );
  }
}

export default App;

// const rollTally = _.range(2, 13).map(x =>
//   <li key={x}>{x}: {this.state.rollTally[x]}</li>
// )
