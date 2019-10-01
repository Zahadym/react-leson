import React from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <a className={css.item} href='#s'>Profile</a>
            <a className={css.item} href='#s'>Messeges</a>
            <a className={css.item} href='#s'>News</a>
            <a className={css.item} href='#s'>Music</a>
            <a className={css.item} href='#s'>Settings</a>
        </nav>
    );
}

export default Navbar;