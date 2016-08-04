import React from 'react';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Players extends React.Component {


  render() {

    const playerList = this.props.players.map(player =>
      <ListItem disabled={true} key={player} style={{'fontSize': '30px'}}>{player}</ListItem>
    );

    const letsStartButton = this.props.players.length >= 2
                              ? <RaisedButton onClick={this.props.handleStartGame} style={{'fontSize': '50px', 'width': '200px', 'height': '80px'}} label="Let's start!" />
                              : ''

    return <div>
            <h2>Welcome!</h2>
            <br />
            <h1>Enter player name</h1>
            <TextField inputStyle={{'textAlign': 'center'}} id='playerfield' value={this.props.currentPlayername} onChange={this.props.handleEnterPlayerName} onKeyDown={this.props.handleInputPlayer} />
            <br />
            <br />
            <List>{playerList}</List>
            <br />
            <br />
            {letsStartButton}
           </div>
  }
};

export default Players;
