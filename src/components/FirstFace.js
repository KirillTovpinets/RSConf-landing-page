import React, { Component } from 'react'
import { Jumbotron, Button, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class FirstFace extends Component {
	render() {
		return (
			<Jumbotron>
        <h1 className="display-3">Фотограф дня</h1>
				<Row>
					<Col md="4">
						<img src="http://placehold.it/500x700" className="profile-avatar"/>
					</Col>
					<Col md="8">
						<h2>Иванов Иван Иванович</h2>
						<p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
						<hr className="my-2" />
						<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
						<p className="lead">
							<Link to='/photographers/Tovpinets' color="primary">Подробнее</Link>
						</p>
					</Col>
				</Row>
      </Jumbotron>
		)
	}
}