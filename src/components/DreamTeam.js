import React, { Component, Fragment } from 'react'
import DeveloperProfile from './DeveloperProfile';
import { Row, Col } from 'reactstrap';

export default class DreamTeam extends Component {
	constructor(props) {
		super();
		this.state = {
			data: [
				{
					avatar: 'https://avatars3.githubusercontent.com/u/39678979?s=400&v=4',
					nickname: 'SergeyGuchok',
					github: 'https://github.com/SergeyGuchok'
				},
				{
					avatar: 'https://avatars3.githubusercontent.com/u/22866490?s=460&v=4',
					nickname: 'Alexshumansky',
					github: 'https://github.com/Alexshumansky'
				},
				{
					avatar: 'https://avatars1.githubusercontent.com/u/14245565?s=460&v=4',
					nickname: 'KirillTovpinets',
					github: 'https://github.com/KirillTovpinets'
				}
			]
		}
	}
	render() {
		return (
			<Fragment>
				<h2>Разработчики</h2>
				<Row>
				{this.state.data.map((el) => <Col md="4"><DeveloperProfile person={el}/></Col>)}
				</Row>
			</Fragment>
		)
	}
}