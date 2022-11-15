import React from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { animLoading } from '../redux/slices/loadingSlice';
import { addDate } from '../redux/slices/daySlice';
import { searchCity } from '../redux/slices/searchSlice';

import { Intro, Days } from '../components';

function Home() {
	const dispatch = useDispatch();

	const { loading } = useSelector(state => state.loading);
	const { city } = useSelector(state => state.search);

	const apiKey = 'c382bb86b9586b9ed658a70e2c87bbbf';

	const setLoading = () => {
		dispatch(animLoading(false))
	}

	const getWeather = async () => {
		try {
			dispatch(animLoading(true))
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`
			await axios.get(url).then(res => dispatch(addDate(res.data)));
			setTimeout(() => {
				setLoading();
			}, 2000)
		} catch (err) {
			setTimeout(() => {
				setLoading();
				alert('К сожалению мы не нашли информацию по введенному городу');
				dispatch(searchCity('Москва'))
			}, 2000)
		}
	};
	console.log(city);
	React.useEffect(() => {
		getWeather();
	}, [city]);

	return (
		<>
			{
				loading ? '' :
					<>
						<Intro />
						<Days />
					</>
			}
		</>
	)
}






export default Home;