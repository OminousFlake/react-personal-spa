import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.active}>Контакты</NavLink>
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
        </nav>
    )
};

export default Navbar;