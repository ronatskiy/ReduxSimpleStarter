import React, {Component} from "react";

export default class SearchBar extends Component {
	constructor(options){
		super(options);

		this.state = {term: ""};
	}

	render() {
		return (
			<input
				value={this.state.term}
				onChange={event => this.setState({term: event.target.value})}
			/>
		);
	}
}
