import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = (props) => {
	console.log(props);
	const { name, imageUrl, price } = props;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span>{name}</span>
				<span>${price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
