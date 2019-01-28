import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Photographers from "./components/Photograpers";

import data from "./data";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";

class App extends Component {
  state = {
    isOpen: false
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
                  <NavLink className="nav-link" to="/">Главная</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/photographers/">Фотографы Беларуси</NavLink>
                </NavItem>
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
                render={props => <Photographers {...props} data={data} />}
              />
            </Container>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
