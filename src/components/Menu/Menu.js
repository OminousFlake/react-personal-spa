import React from 'react';
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/route-generator' activeClassName={s.active}>Карта</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/gallery' activeClassName={s.active}>Галлерея</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/sudoku' activeClassName={s.active}>Судоку</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/articles' activeClassName={s.active}>Статьи</NavLink>
            </div>
        </nav>
    )
};

export default Menu;