import React from 'react';
import { Card } from './index'

function Days() {

	const tabs = [
		{
			value: 'На неделю'
		},
		{
			value: 'На месяц'
		},
		{
			value: 'На 10 дней'
		}
	]

	const days = [
		{
			day: 'Сегодня',
			dayInfo: '28 авг',
			iconPath: '',
			tempDay: '+18°',
			tempNight: '+15°',
			info: 'Облачно'
		},
		{
			day: 'Завтра',
			dayInfo: '29 авг',
			iconPath: '',
			tempDay: '+15°',
			tempNight: '+10°',
			info: 'Небольшой дождь'
		},
		{
			day: 'Пн',
			dayInfo: '28 авг',
			iconPath: '',
			tempDay: '+18°',
			tempNight: '+15°',
			info: 'Облачно'
		},
		{
			day: 'Вт',
			dayInfo: '28 авг',
			iconPath: '',
			tempDay: '+18°',
			tempNight: '+15°',
			info: 'Облачно'
		},
		{
			day: 'Ср',
			dayInfo: '28 авг',
			iconPath: '',
			tempDay: '+18°',
			tempNight: '+15°',
			info: 'Облачно'
		},
		{
			day: 'Чт',
			dayInfo: '28 авг',
			iconPath: '',
			tempDay: '+18°',
			tempNight: '+15°',
			info: 'Облачно'
		},
		{
			day: 'Пт',
			dayInfo: '28 авг',
			iconPath: '',
			tempDay: '+18°',
			tempNight: '+15°',
			info: 'Облачно'
		},
	]

	return (
		<div className='days'>
			<div className="days__filter filter-days">
				<div className='filter-days__buttons'>
					{tabs.map((obj) => (
						<button className='filter-days__button'
							type='button'
							key={obj.value}
						>
							{obj.value}
						</button>
					))}
				</div>
			</div>
			<div className='days__content'>
				{days.map((obj) => (
					<Card key={`${obj.day}_${obj.dayInfo}`} day={obj} />
				))}
			</div>
		</div>
	)
}

export default Days;