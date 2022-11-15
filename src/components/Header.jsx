import React from 'react';
import { useLocation } from 'react-router-dom';

import { GoSettings } from 'react-icons/go';
import { IoIosCloudyNight, IoIosCloseCircleOutline } from 'react-icons/io';

import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../redux/slices/themeSlice';
import { searchCity } from '../redux/slices/searchSlice';

import headerLogo from '../assets/img/header-icon.png';


function Header() {
	const location = useLocation();
	const dispatch = useDispatch();
	const { darkTheme } = useSelector(state => state.changeTheme);
	const { loading } = useSelector(state => state.loading);

	const [menu, setMenu] = React.useState(false);
	const refMenu = React.useRef();

	const openMenu = () => {
		setMenu(!menu);
	};

	const themeChange = () => {
		dispatch(changeTheme(!darkTheme))
	};

	React.useEffect(() => {
		localStorage.setItem('theme', darkTheme)
	}, [darkTheme])

	const search = () => {
		const input = document.querySelector('.menu-setting__search input');
		dispatch(searchCity(input.value));
		openMenu();
	}

	// const popupHidden = (e) => {
	// 	if (!e.path.includes(refMenu.current)) {
	// 		setMenu(false);
	// 	}
	// }

	// React.useEffect(() => {
	// 	document.body.addEventListener('click', popupHidden)
	// }, [])

	return (
		<header className='header'>
			<div className="header__container container">
				<div className="header__row">
					<div className="header__title">
						<div className='header__logo'>
							<img src={headerLogo} alt='logo' />
						</div>
						<h2 className='header__text'>React weather</h2>
					</div>
					{
						location.pathname === '/' &&
						<button type='button' onClick={openMenu} className="header__actions">
							<GoSettings />
						</button>
					}
				</div>
				{
					loading ? '' : <div ref={refMenu} className={menu ? "menu-setting menu-open" : "menu-setting"}>
						<div className="menu-setting__body">
							<div className="menu-setting__content">
								<div className="menu-setting__search">
									<input onKeyDown={ev => ev.key === 'Enter' && dispatch(searchCity(ev.target.value)) && setMenu(false)} placeholder='Введите город' />
									<IoIosCloseCircleOutline onClick={openMenu} />
								</div>
								<div className="menu-setting__actions">
									<button type='button' onClick={themeChange} className="menu-setting__change-theme">
										<IoIosCloudyNight />
										<span>Сменить тему</span>
									</button>
									<button onClick={search} type='button' className='menu-setting__search-button'>Найти</button>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		</header>
	)
}

export default Header;