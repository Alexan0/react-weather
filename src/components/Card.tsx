import React from 'react';

type CardProps = {
	day: string;
	dayInfo: string;
	tempMax: number;
	tempMin: number;
	info: string;
	iconPath?: string;
}

const Card: React.FC<CardProps> = ({ day, dayInfo, tempMax, tempMin, info, iconPath }) => {
	return (
		<div className='days__item item-day'>
			<h5 className="item-day__title">{day}</h5>
			<span className="item-day__date">{dayInfo}</span>
			<div className="item-day__icon">
				<img src={iconPath} alt={info} />
			</div>
			<span className="item-day__temp-day">{tempMax}</span>
			<span className="item-day__temp-night">{tempMin}</span>
			<span className="item-day__info">{info}</span>
		</div>
	)
}

export default Card;