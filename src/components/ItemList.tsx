import React from 'react';

const ItemList: React.FC<Record<string, string>> = ({ iconPath, title, stat }) => {
	return (
		<li className="info-right__item item-list">
			<div className="item-list__icon">
				<img src={iconPath} alt='icon'/>
			</div>
			<div className="item-list__title">{title}</div>
			<div className="item-list__stat">{stat}</div>
		</li>
	)
}

export default ItemList;