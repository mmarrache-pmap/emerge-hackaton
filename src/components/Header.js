import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src="/static/images/logo.png" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"></NavItem>
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
