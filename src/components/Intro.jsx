import React from 'react';

import { useSelector } from 'react-redux';

import ItemList from './ItemList';

import iconTemp from '../assets/img/icons/icon-temp.svg';
import iconHumidity from '../assets/img/icons/humidity.svg';
import iconRainfall from '../assets/img/icons/rainfall.svg';
import iconWind from '../assets/img/icons/wind.svg';

import mainlyCloudy from '../assets/img/icons/mainly-cloudy-icon.svg';
import rain from '../assets/img/icons/rain-icon.svg';
import smallRainAndSun from '../assets/img/icons/small-rain-and-sun-icon.svg';
import smallRain from '../assets/img/icons/small-rain-icon.svg';
import sun from '../assets/img/icons/sun-icon.svg';
import snow from '../assets/img/icons/snow.png';

function Intro() {
	const nowTime = new Date().toLocaleTimeString().slice(0,5);
	const { date } = useSelector(state => state.date);

	function capitalize(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

	const itemList = [
		{
			iconPath: iconTemp,
			title: 'Температура',
			stat: `${date.main.temp}° ощущается как ${date.main.feels_like}°`,
		},
		{
			iconPath: iconHumidity,
			title: 'Давление',
			stat: `${date.main.pressure - 268} мм ртутного столба`,
		},
		{
			iconPath: iconRainfall,
			title: 'Осадки',
			stat: `${capitalize((date.weather[0].description))}`,
		},
		{
			iconPath: iconWind,
			title: 'Ветер',
			stat: `${date.wind.speed} м/с`,
		},
	];

	const iconWeather = {
		mainlyCloudy,
		rain,
		smallRain,
		sun,
		smallRainAndSun,
		snow,
	};

	// `http://openweathermap.org/img/wn/${date.weather[0].icon}@2x.png`

	const mainIcon = date.weather[0].description;

	return (
		<div className='intro'>
			<div className="intro__info-left info-left" >
				<div className="info-left__top">
					<div className="info-left__text">
						<div className="info-left__temp">{date.main.temp}°</div>
						<div className="info-left__day">Сегодня</div>
					</div>
					<div className="info-left__icon">
						<img src=
							{mainIcon === 'пасмурно' ? iconWeather.mainlyCloudy : '' ||
								mainIcon === 'переменная облачность' ? iconWeather.mainlyCloudy : '' ||
									mainIcon === 'ясно' ? iconWeather.sun : '' ||
										mainIcon === 'облачно с прояснениями' ? iconWeather.smallRainAndSun : '' ||
											mainIcon === 'небольшой проливной дождь' ? iconWeather.smallRain : '' ||
												mainIcon === 'небольшой дождь' ? iconWeather.smallRain : '' ||
													mainIcon === 'сильный дождь' ? iconWeather.rain : '' ||
														mainIcon === 'дождь' ? iconWeather.rain : '' ||
															mainIcon === 'небольшой снег' ? iconWeather.snow : '' ||
																mainIcon === 'снег' ? iconWeather.snow : ''
							}
							alt={capitalize(date.weather[0].description)}
						/>
					</div>
				</div>
				<div className="info-left__bottom">
					<div className="info-left__time">Время: {nowTime}</div>
					<div className="info-left__place">Город: {date.name}</div>
				</div>
			</div>
			<div className='intro__info-right info-right'>
				<div className="info-right__content">
					<ul className="info-right__list">
						{itemList.map((obj) => (
							<ItemList key={`${obj.id}_${obj.title}`} items={obj} />
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Intro;