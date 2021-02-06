import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import './App.css';

import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = (props) => {
	const { history, match } = props;
	return (
		<div>
			<h1>HATS</h1>
			<Link to="/">Go back</Link>
			<button onClick={() => history.push(`${match.url}/topics`)}>topics</button>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
