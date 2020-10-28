import React, { Component } from "react";
import Header from "./components/header/header";
import { Header, MovieDetails, MovieList } from "./components";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MovieList />
				<MovieDetails />
			</div>
		);
	}
}

export default App;
