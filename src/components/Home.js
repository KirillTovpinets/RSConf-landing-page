import React, { Component, Fragment } from 'react'
import About from './About';
import FirstFace from './FirstFace';
import DreamTeam from './DreamTeam';


export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			data:[]
		}	
	}
	componentWillMount() {
		fetch('/data.json')
			.then(data => data.json())
			.then(data => this.setState({...this.state, data}));
	}
	render() {
		return (
			<Fragment>
				<About/>
				<FirstFace man={this.state.data.find(el => el.status === 'vip')} />
				<DreamTeam/>
			</Fragment>
		)
	}
}