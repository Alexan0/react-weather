import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectTheme } from "./redux/slices/themeSlice";
import { selectStatus } from "./redux/slices/wheatherSlice";

import { Header, Loading } from './components';
import { Home, NotFound } from './pages';

import './assets/scss/style.scss';

const App: React.FC = () => {
	const status = useSelector(selectStatus);
	const { theme } = useSelector(selectTheme);
	const body: HTMLBodyElement | any = document.body;

	if (theme === 'dark-theme') {
		body.classList = 'dark-theme';
	} else {
		body.classList = 'light-theme';
	}

	return (
		<>
			<div className={status === 'loading' ? 'wrapper loading' : 'wrapper'}>
				<Header />
				<main className='page'>
					<div className="page-container container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</main>
			</div>
			{
				status === 'loading' ? <Loading /> : ''
			}
		</>
	);
}

export default App;
