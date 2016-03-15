import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Navstuff extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">alan's blog</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight> 
              <NavItem>about</NavItem>
              <NavItem>contact</NavItem>
            </Nav>
           </Navbar>
  }
};

export default Navstuff;