import React from 'react';
import './MenuItem.styles.scss';

const withRouter = require('react-router-dom').withRouter;

const MenuItem = (props) => {
	const { size, title, imageUrl, linkUrl, history, match } = props;
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
				className="background-image"></div>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">shop now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
