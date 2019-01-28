import React, { Component } from 'react'
import { Jumbotron, Row, Col} from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default class FirstFace extends Component {
	render() {
		console.log(this.props.man);
		return (
				<Jumbotron>
					<h1 className="display-3">Фотограф дня</h1>
					{ this.props.man &&
					<Row>
						<Col md="4">
							<img src={this.props.man.avatar} className="profile-avatar"/>
						</Col>
						<Col md="8">
							<h2>{this.props.man.person}</h2>
							<p className="lead">{this.props.man.about.life[0].concat('...')}</p>
							<p className="lead">								
							</p>
						</Col>
					</Row>
					}
				</Jumbotron>
		)
	}
}