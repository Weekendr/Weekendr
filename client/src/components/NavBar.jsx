import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">Weekendr</IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '#' }}>
                <NavItem>How It Works</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '#' }}>
                <NavItem>Team</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/airbnb' }}>
                <NavItem>Airbnb</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={{ pathname: '/profile' }}>
                <NavItem>Profile</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/signup' }}>
                <NavItem>Sign Up</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/login' }}>
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
