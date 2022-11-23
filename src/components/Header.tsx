import React from 'react';
import { useLocation } from 'react-router-dom';

import { GoSettings } from 'react-icons/go';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { AiFillCloud } from 'react-icons/ai';

import { useSelector, useDispatch } from 'react-redux';
import { changeTheme, selectTheme } from '../redux/slices/themeSlice';
import { searchCity } from '../redux/slices/searchSlice';
import { selectStatus } from '../redux/slices/wheatherSlice';

import headerLogo from '../assets/img/header-icon.png';

const Header: React.FC = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const status = useSelector(selectStatus);
	const { theme } = useSelector(selectTheme)

	const [menu, setMenu] = React.useState<Boolean>(false);
	const inputRef = React.useRef<HTMLInputElement>(null);


	const openMenu = () => {
		setMenu(!menu);
	};

	const changeDark = () => {
		dispatch(changeTheme('dark-theme'));
		openMenu();
	}

	const changeWhite = () => {
		dispatch(changeTheme('white-theme'));
		openMenu();
	}

	const search = () => {
		dispatch(searchCity(inputRef.current?.value));
		openMenu();
	}

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
					status === 'loading' ? '' : <div className={menu ? "menu-setting menu-open" : "menu-setting"}>
						<div className="menu-setting__body">
							<div className="menu-setting__content">
								<div className="menu-setting__search">
									<input ref={inputRef} onKeyDown={ev => ev.key === 'Enter' && dispatch(searchCity(inputRef.current?.value)) && setMenu(false)} placeholder='Введите город' />
									<IoIosCloseCircleOutline onClick={openMenu} />
								</div>
								<div className="menu-setting__actions">
									{
										theme === 'white-theme' ?
											<div onClick={changeDark}>
												<div className="menu-setting__change-theme dark">
													<AiFillCloud />
												</div>
												<span>Сменить тему</span>
											</div> :
											<div onClick={changeWhite}>
												<div onClick={changeWhite} className="menu-setting__change-theme white">
													<AiFillCloud />
												</div>
												<span>Сменить тему</span>
											</div>
									}
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