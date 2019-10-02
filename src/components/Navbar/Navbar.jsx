import React from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <a className={css.item} href='/profile'>Profile</a>
            <a className={css.item} href='/dialogs'>Messeges</a>
            <a className={css.item} href='/news'>News</a>
            <a className={css.item} href='/music'>Music</a>
            <a className={css.item} href='/settings'>Settings</a>
        </nav>
    );
}

export default Navbar;