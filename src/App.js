import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Photographers from './components/Photograpers';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Главная</Link>
						</li>
						<li>
							<Link to="/photographers">Фотографы Беларуси</Link>
						</li>
					</ul>

					<hr />

					<Route exact path="/" component={Home} />
					<Route path="/photographers" component={Photographers} />
				</div>
			</Router>
    );
  }
}

export default App;
