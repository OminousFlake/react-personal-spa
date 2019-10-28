import React from 'react';
import s from './Header.module.css';
import Menu from './../Menu/Menu.js';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://seeklogo.com/images/A/alliance-logo-BDD77C0478-seeklogo.com.png' alt='' />
            <Menu />
        </header>
    )
};

export default Header;