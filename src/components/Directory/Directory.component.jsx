import React from 'react';
import './Directory.styles.scss';

import MenuItem from '../MenuItem/MenuItem.component';

import sections from '../../directory.data';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: sections,
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherProps }) => (
					<MenuItem key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default Directory;
