import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BarChart from './BarChart';
import drawBar from './d3/drawBar';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount(){
    drawBar.createCanvas();
  };

  render() {

    return <div>
            <h1><em>{this.props.justRolled}</em></h1>
            <h1><em>{this.props.nextUp}</em></h1>
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

              // <BarChart rollTally={this.props.rollTally} />

