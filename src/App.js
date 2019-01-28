import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Photographers from "./components/Photograpers";

import data from "./data";
import labels from './vocabulary';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class App extends Component {
  state = {
    isOpen: false,
    language: 'ru',
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render = () => {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand>
              <NavLink to="/">RSSchool</NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">{labels[this.state.language].menu[0]}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/photographers/">{labels[this.state.language].menu[1]}</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {labels[this.state.language].menu[2]}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {Object.keys(labels).map(el => (<DropdownItem onClick={() => this.setState({...this.state, language: el})}>{labels[el].language}</DropdownItem>))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="content">
            <Container>
              <Route 
                exact 
                path="/" 
                render={props => <Home {...props} data={data.find((el) => el.status === 'vip')} />} />
              <Route
                path="/photographers"
                render={props => <Photographers {...props} data={data} labels={labels[this.state.language]} />}
              />
            </Container>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;

