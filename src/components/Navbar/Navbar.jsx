import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <NavLink className={css.item} activeClassName={css.active} to='/profile'>Profile</NavLink>
            <NavLink className={css.item} activeClassName={css.active} to='/dialogs'>Messeges</NavLink>
            <NavLink className={css.item} activeClassName={css.active} to='/news'>News</NavLink>
            <NavLink className={css.item} activeClassName={css.active} to='/music'>Music</NavLink>
            <NavLink className={css.item} activeClassName={css.active} to='/settings'>Settings</NavLink>
        </nav>
    );
}

export default Navbar;