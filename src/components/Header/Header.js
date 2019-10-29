import React, { useState, useEffect } from 'react';
import s from './Header.module.css';
import Menu from './../Menu/Menu.js';
import MobileMenu from './../Menu/MobileMenu.js';
import Logo from './../Logo/Logo.js';

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const changeMenu = () => {
			toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
		}
	let width = window.innerWidth;

	useEffect(() => {
		width <= 600 ? setIsMobile(true) : setIsMobile(false);
	}, [width])

    return (
    	<div className={s.headerContainer}>
			<header className={s.header}>
				<div className={s.logoContainer} onClick={changeMenu}>
	            	<Logo />
	            </div>
	            {isMobile && toggleMenu ? <MobileMenu /> : <Menu />}
			</header>
    	</div>
    )
};

export default Header;