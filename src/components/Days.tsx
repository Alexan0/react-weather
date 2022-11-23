import React from 'react';

import { useSelector } from 'react-redux';
import { selectDay } from '../redux/slices/wheatherSlice';

import { Card } from './index';

type WearherDetails = {
	day: string;
	dayInfo: string;
	iconPath: string;
	tempMax: number;
	tempMin: number;
	info: string;
}

const Days: React.FC = () => {
	const { wheaterDate } = useSelector(selectDay);

	const [todayButton, setTodayButton] = React.useState<boolean>(true);
	const [fiveDaysButton, setFiveDaysButton] = React.useState<boolean>(false);

	const onClickButton = () => {
		setTodayButton(!todayButton);
		setFiveDaysButton(!fiveDaysButton);
	};

	const wheatherToday: WearherDetails[] = [
		{
			day: wheaterDate.list[0].dt_txt.slice(10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[0].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[0].main.temp_max,
			tempMin: wheaterDate.list[0].main.temp_min,
			info: wheaterDate.list[0].weather[0].description,
		},
		{
			day: wheaterDate.list[1].dt_txt.slice(10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[1].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[1].main.temp_max,
			tempMin: wheaterDate.list[1].main.temp_min,
			info: wheaterDate.list[1].weather[0].description,
		},
		{
			day: wheaterDate.list[2].dt_txt.slice(10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[2].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[2].main.temp_max,
			tempMin: wheaterDate.list[2].main.temp_min,
			info: wheaterDate.list[2].weather[0].description,
		},
		{
			day: wheaterDate.list[3].dt_txt.slice(10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[3].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[3].main.temp_max,
			tempMin: wheaterDate.list[3].main.temp_min,
			info: wheaterDate.list[3].weather[0].description,
		},
		{
			day: wheaterDate.list[4].dt_txt.slice(10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[4].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[4].main.temp_max,
			tempMin: wheaterDate.list[4].main.temp_min,
			info: wheaterDate.list[4].weather[0].description,
		},
	];

	const wheatherFiveDays: WearherDetails[] = [
		{
			day: wheaterDate.list[8].dt_txt.slice(0, 10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[8].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[8].main.temp_max,
			tempMin: wheaterDate.list[8].main.temp_min,
			info: wheaterDate.list[8].weather[0].description,
		},
		{
			day: wheaterDate.list[16].dt_txt.slice(0, 10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[16].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[16].main.temp_max,
			tempMin: wheaterDate.list[16].main.temp_min,
			info: wheaterDate.list[16].weather[0].description,
		},
		{
			day: wheaterDate.list[24].dt_txt.slice(0, 10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[24].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[24].main.temp_max,
			tempMin: wheaterDate.list[24].main.temp_min,
			info: wheaterDate.list[24].weather[0].description,
		},
		{
			day: wheaterDate.list[32].dt_txt.slice(0, 10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[32].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[32].main.temp_max,
			tempMin: wheaterDate.list[32].main.temp_min,
			info: wheaterDate.list[32].weather[0].description,
		},
		{
			day: wheaterDate.list[39].dt_txt.slice(0, 10),
			dayInfo: wheaterDate.city.name,
			iconPath: `http://openweathermap.org/img/wn/${wheaterDate.list[39].weather[0].icon}@2x.png`,
			tempMax: wheaterDate.list[39].main.temp_max,
			tempMin: wheaterDate.list[39].main.temp_min,
			info: wheaterDate.list[39].weather[0].description,
		},
	];

	return (
		<div className='days'>
			<div className="days__filter filter-days">
				<div className='filter-days__buttons'>
					<button type='button'
						onClick={onClickButton}
						className={todayButton ? 'filter-days__button active' : 'filter-days__button'}>Сегодня
					</button>
					<button type='button'
						onClick={onClickButton}
						className={fiveDaysButton ? 'filter-days__button active' : 'filter-days__button'}>На 5 дней
					</button>
				</div>
			</div>
			<div className='days__content'>
				{todayButton && wheatherToday.map((obj) => (
					<Card key={`${obj.day}_${obj.iconPath}`} {...obj} />
				))}
				{fiveDaysButton && wheatherFiveDays.map((obj) => (
					<Card key={`${obj.day}_${obj.iconPath}`} {...obj} />
				))}
			</div>
		</div>
	)
}

export default Days;