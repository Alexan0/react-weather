import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import { Header, Loading } from './components';
import { Home, NotFound } from './pages';

import './assets/scss/style.scss';

function App() {
	const { loading } = useSelector(state => state.loading);
	const { darkTheme } = useSelector(state => state.changeTheme);

	if (darkTheme === true) {
		document.body.classList = 'dark-theme';
	} else {
		document.body.classList = 'light-theme';
	}

	return (
		<>
			<div className={loading ? 'wrapper loading' : 'wrapper'}>
				<Header />
				<main className='page'>
					<div className="page-container container">
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="*" element={<NotFound />} />
						</Routes>
					</div>
				</main>
			</div>
			{
				loading && <Loading />
			}
		</>
	);
}

export default App;
