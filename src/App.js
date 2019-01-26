import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Photographers from './components/Photograpers';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

class App extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
				<Router>
					<div>
						<Navbar color="light" light expand="md">
							<NavbarBrand href="/">RSSchool</NavbarBrand>
							<NavbarToggler onClick={this.toggle} />
							<Collapse isOpen={this.state.isOpen} navbar>
								<Nav className="ml-auto" navbar>
									<NavItem>
										<NavLink href="/">Главная</NavLink>
									</NavItem>
									<NavItem>
										<NavLink href="/photographers/">Фотографы Беларуси</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
						</Navbar>
						<div className="content">
							<Container>
								<Route exact path="/" component={Home} />
								<Route path="/photographers" component={Photographers} />
							</Container>
						</div>
					</div>
				</Router>
    );
  }
}

export default App;
