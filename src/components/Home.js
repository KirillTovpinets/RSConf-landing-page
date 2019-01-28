import React, { Component, Fragment } from 'react'
import About from './About';
import FirstFace from './FirstFace';
import DreamTeam from './DreamTeam';


export default class Home extends Component {
	render() {
		return (
			<Fragment>
				<About/>
				<FirstFace man={this.props.data} />
				<DreamTeam/>
			</Fragment>
		)
	}
}