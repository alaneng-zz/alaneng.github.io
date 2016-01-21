import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class PokeMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false
    }
  }

  onMenuEnter() {
    this.setState({showMenu: true})
  }

  onMenuExit() {
    this.setState({showMenu: false})
  }

  render() {
    const {menuItems} = this.props;
    const menuList = menuItems.map(menuItem =>
      <ListGroupItem href="#" key={menuItem}>
        {menuItem}
      </ListGroupItem>
    )

    return (
      <div 
        className='menu' 
        onMouseEnter={this.onMenuEnter.bind(this)}
        onMouseLeave={this.onMenuExit.bind(this)}>
        <p>PokéMenu</p>
        {this.state.showMenu && menuList}
      </div>
    )
  }
}