import React from 'react';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class StaffMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0.5,
      showName: true
    }
  }

  enterImage() {
    this.setState({
      opacity: 0.1,
      showName: false
    })
  }
  
  exitImage() {
    this.setState({
      opacity: 0.5,
      showName: true
    })
  }

  render() {
    var menuItems = this.props.staffMenu.map(menuItem => {
      var {opacity, showName} = this.state;

      var imageStyle = {
        backgroundSize: '100% 100%',
        backgroundImage: 'linear-gradient(rgba(255,255,255,' + opacity + '),rgba(255,255,255,' + opacity + ')), url(' + 'images/' + menuItem + '.jpg' + ')'
      }

      return (
        <ListGroupItem key={menuItem} 
                       href='#'
                       style={imageStyle}
                       onMouseEnter={this.enterImage.bind(this)}
                       onMouseLeave={this.exitImage.bind(this)}>
          <h5 className={'staffName'}>{showName && menuItem}</h5>
        </ListGroupItem>
      )
    })

    return (
      <Grid fluid className='section'>
        <h2 className='text-center'>Meet the Staff</h2>
        <ListGroup className='menuItem text-center'>
          {menuItems}
        </ListGroup>
      </Grid>
    )
  }
}