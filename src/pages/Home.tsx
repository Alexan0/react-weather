import React from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { fetchDays, selectStatus } from '../redux/slices/wheatherSlice';
import { selectCity } from '../redux/slices/searchSlice';
import { selectTheme } from "../redux/slices/themeSlice";

import { Intro, Days } from '../components';

export const apiKey: string = 'c382bb86b9586b9ed658a70e2c87bbbf';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	
	const status = useSelector(selectStatus);
	const { city } = useSelector(selectCity);
	const { theme } = useSelector(selectTheme);

	const isMounted = React.useRef(false);
	
	const getWeather = async () => {
		dispatch(fetchDays({
			city,
			apiKey,
		}))
	};

	React.useEffect(() => {
		getWeather();
		if (isMounted.current) {
			const cityJson = JSON.stringify(city);
			localStorage.setItem('city', cityJson);

			const darkThemeJson = JSON.stringify(theme);
			localStorage.setItem('theme', darkThemeJson);
		}
		isMounted.current = true;
	}, [city, theme]);
	
	return (
		<>
			{
				status === 'loading' ? '' : status === 'error' ? <div className='page-error'><span>К сожалению мы не нашли информацию по введенному городу</span></div> :
					<>
						<Intro />
						<Days />
					</>
			}
		</>
	)
}

export default Home;