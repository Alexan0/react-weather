import React from 'react';

function ItemList({ items }) {
	return (
		<li className="info-right__item item-list">
			<div className="item-list__icon">
				<img src={items.iconPath} alt='icon'/>
			</div>
			<div className="item-list__title">{items.title}</div>
			<div className="item-list__stat">{items.stat}</div>
		</li>
	)
}

export default ItemList;