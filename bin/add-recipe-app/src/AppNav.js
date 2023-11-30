import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavbarBrand, NavLink} from 'reactstrap';

class AppNav extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Recipe App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add">Add Recipe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recipes">View Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/info">Useful Info</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
      </div>
    );
  }
}

export default AppNav;