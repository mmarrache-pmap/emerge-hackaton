import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src="../static/images/logo.png" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/*
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
          </Nav>
          */}
          <Nav pullRight>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Register</NavItem>
            <NavItem eventKey={2} href="#">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  // title: React.PropTypes.string,
};

export default Header;
