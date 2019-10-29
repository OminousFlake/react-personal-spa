import React from 'react';
import s from './MobileMenu.module.css';
import {NavLink} from 'react-router-dom';
import Emoji from './../Emoji/Emoji.js';

const MobileMenu = () => {
	return (
		<nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>
                	<Emoji label='profile' symbol='🐵'/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/route-generator' activeClassName={s.active}>
					<Emoji label='routes' symbol='🚶'/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/gallery' activeClassName={s.active}>
                	<Emoji label='gallery' symbol='📷'/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/sudoku' activeClassName={s.active}>
                	<Emoji label='sudoku' symbol='🉐'/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/articles' activeClassName={s.active}>
                	<Emoji label='articles' symbol='📒'/>
                </NavLink>
            </div>
        </nav>
	)
}

export default MobileMenu;