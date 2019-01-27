import React, { Component } from 'react'
import './DeveloperProfile.css';

export default class DeveloperProfile extends Component {
	render() {
		return (
			<div className="profile">
				<img class="avatar" src={this.props.person.avatar} alt={this.props.nickname}/>
				<div className="description">
					<h4 className="name">
						<span>Github: </span>
						<a href={this.props.person.github}>{this.props.person.nickname}</a>
					</h4>
				</div>
			</div>
		)
	}
}