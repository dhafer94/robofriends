import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: '',
		};
	}

	onSearchChange = (evt) => {
		this.setState({ searchfield: evt.target.value });

		// console.log(filteredRobot);
	};

	render() {
		const filteredRobot = this.state.robots.filter((robots) => {
			return robots.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobot} />
			</div>
		);
	}
}

export default App;
