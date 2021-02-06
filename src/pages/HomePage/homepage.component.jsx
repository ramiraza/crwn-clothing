import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';

import Directory from '../../components/Directory/Directory.component';

const Home = () => {
	return (
		<div className="home-page">
			<Directory />
			<Link to="/hats">Go to hats</Link>
		</div>
	);
};

export default Home;
