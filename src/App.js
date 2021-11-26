import React, { Component } from 'react';
import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		};
		console.log('constructor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				this.setState({ robots: users });
			});
		// this.setState({ robots: robots });
		console.log('componentDidMount');
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
		console.log('render');
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>;
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobot} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
