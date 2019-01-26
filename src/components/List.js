import React, { Component } from 'react'
import PhotographerCard from './PhotograperCard';
import { Row, Col } from 'reactstrap';

export default class List extends Component {
	render() {
		return (
			<Row>
				<Col md="3">
					<PhotographerCard route={this.props.match.url}/>
				</Col>
				<Col md="3">
					<PhotographerCard route={this.props.match.url}/>
				</Col>
			</Row>
		)
	}
}
