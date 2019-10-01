import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <a className={'item'} href='#s'>Profile</a>
            <a href='#s'>Messeges</a>
            <a href='#s'>News</a>
            <a href='#s'>Music</a>
            <a href='#s'>Settings</a>
        </nav>
    );
}

export default Navbar;