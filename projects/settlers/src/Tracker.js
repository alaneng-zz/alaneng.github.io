import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return <div>
            <h1 style={this.props.styles.header}>Settlers of Catan Tracker</h1>
            <h1><em>{this.props.justRolled}</em></h1>
            <br />
            {this.props.rollsSoFar}
            <br />
            <div style={this.props.styles.body}>
              <div style={this.props.styles.gridList}>
                {this.props.gridTiles}
                <RaisedButton style={this.props.styles.undoButton} label='undo last roll' onClick={() => this.props.undoLastRoll()} disabled={this.props.undoDisabled} />
              </div>
              <div className='barchart'>
                {this.props.intro}
              </div>
            </div>
          </div>
  }
};

export default Tracker;
