import React from 'react';

import { useSelector } from 'react-redux';
import { selectDay } from '../redux/slices/wheatherSlice';

import ItemList from './ItemList';

import iconTemp from '../assets/img/icons/icon-temp.svg';
import iconHumidity from '../assets/img/icons/humidity.svg';
import iconRainfall from '../assets/img/icons/rainfall.svg';
import iconWind from '../assets/img/icons/wind.svg';

const Intro: React.FC = () => {
	const nowTime = new Date().toLocaleTimeString().slice(0, 5);
	const { wheaterDate } = useSelector(selectDay);

	const capitalize = (str: string) => {
		return str[0].toUpperCase() + str.slice(1);
	}

	const itemList: Record<string, string>[] = [
		{
			iconPath: iconTemp,
			title: 'Температура',
			stat: `${wheaterDate.list[0].main.temp}° ощущается как ${wheaterDate.list[0].main.feels_like}°`,
		},
		{
			iconPath: iconHumidity,
			title: 'Давление',
			stat: `${wheaterDate.list[0].main.pressure - 268} мм ртутного столба`,
		},
		{
			iconPath: iconRainfall,
			title: 'Осадки',
			stat: `${capitalize((wheaterDate.list[0].weather[0].description))}`,
		},
		{
			iconPath: iconWind,
			title: 'Ветер',
			stat: `${wheaterDate.list[0].wind.speed} м/с`,
		},
	];

	return (
		<div className='intro'>
			<div className="intro__info-left info-left" >
				<div className="info-left__top">
					<div className="info-left__text">
						<div className="info-left__temp">{wheaterDate.list[0].main.temp}°</div>
						<div className="info-left__day">Сегодня</div>
					</div>
					<div className="info-left__icon">
						<img src={`http://openweathermap.org/img/wn/${wheaterDate.list[0].weather[0].icon}@2x.png`}
							alt={capitalize(wheaterDate.list[0].weather[0].description)}
						/>
					</div>
				</div>
				<div className="info-left__bottom">
					<div className="info-left__time">Время: {nowTime}</div>
					<div className="info-left__place">Город: {wheaterDate.city.name}</div>
				</div>
			</div>
			<div className='intro__info-right info-right'>
				<div className="info-right__content">
					<ul className="info-right__list">
						{itemList.map((obj, i) => (
							<ItemList key={`${i}_${obj.title}`} {...obj} />
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Intro;