import React, { Component, Fragment} from 'react'
import PhotographerCard from './PhotograperCard';
import { Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Personal from './Personal';
import List from './List';

export default class Photographers extends Component {
	render() {
		return (
			<Fragment>
			<Route exact path={this.props.match.path} component={List}/>
			<Route path={this.props.match.path.concat('/:id')} component={Personal} />
			</Fragment>
		)
	}
}
