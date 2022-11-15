import React from 'react';

function Card({ day }) {
	return (
		<div className='days__item item-day'>
			<h5 className="item-day__title">{day.day}</h5>
			<span className="item-day__date">{day.dayInfo}</span>
			<div className="item-day__icon">
				<img src='' alc='icon' />
			</div>
			<span className="item-day__temp-day">{day.tempDay}</span>
			<span className="item-day__temp-night">{day.tempNight}</span>
			<span className="item-day__info">{day.info}</span>
		</div>
	)
}

export default Card;