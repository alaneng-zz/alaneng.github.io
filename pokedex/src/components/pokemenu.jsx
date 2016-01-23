import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class PokeMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: true
    }
  }

  onMenuEnter() {
    this.setState({showMenu: true})
  }

  onMenuExit() {
    this.setState({showMenu: false})
  }

  // componentWillUnmount() {
  //   console.log('UNMOUNTED!!')
  // }

  // componentDidMount() {
  //   console.log('MOUNTED!!')
  // }

  componentDidUpdate() {
    console.log('updated!')
  }

  componentWillReceiveProps(nextProps) {
    console.log('received:', nextProps.menuItems)
  }

  render() {
    const {menuItems} = this.props;
    const menuList = menuItems.map(menuItem =>
      <ListGroupItem 
        className='menuItem'
        href="#" 
        key={menuItem}>
        {menuItem}
      </ListGroupItem>
    )

    return (
      <div 
        className='menu' 
        
        >
        <p>PokéMenu</p>
        {this.state.showMenu && menuList}
      </div>
    )
  }
}

//onMouseEnter={this.onMenuEnter.bind(this)}
//        onMouseLeave={this.onMenuExit.bind(this)}